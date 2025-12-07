import { getServerSession } from 'next-auth';
import User from '@models/user';
import { connectToDB } from '@utils/database';
import { uploadImage } from '@utils/cloudinary';

export const PATCH = async (request) => {
  try {
    const session = await getServerSession();
    
    if (!session?.user) {
      return new Response(
        JSON.stringify({ error: 'You must be logged in to update your profile' }),
        { status: 401 }
      );
    }

    await connectToDB();

    const contentType = request.headers.get('content-type');
    let username, profileImageUrl = undefined;

    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData();
      username = formData.get('username');
      const profileImage = formData.get('profileImage');

      if (profileImage && profileImage.size > 0) {
        const bytes = await profileImage.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = `data:${profileImage.type};base64,${buffer.toString('base64')}`;
        
        const uploadResult = await uploadImage(base64Image, 'avatars');
        profileImageUrl = uploadResult.url;
      }
    } else {
      const jsonData = await request.json();
      username = jsonData.username;
    }

    // Find the user by email from session
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 404 }
      );
    }

    // Update fields
    if (username && username.trim() !== '') {
      user.username = username.trim();
    }

    if (profileImageUrl) {
      user.image = profileImageUrl;
    }

    await user.save();

    return new Response(
      JSON.stringify({
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          image: user.image,
        }
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Profile update error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update profile' }),
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const session = await getServerSession();
    
    if (!session?.user) {
      return new Response(
        JSON.stringify({ error: 'You must be logged in' }),
        { status: 401 }
      );
    }

    await connectToDB();

    const user = await User.findOne({ email: session.user.email }).select('-password');

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        id: user._id,
        username: user.username,
        email: user.email,
        image: user.image,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Get profile error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to get profile' }),
      { status: 500 }
    );
  }
};
