import bcrypt from 'bcrypt';
import User from '@models/user';
import { connectToDB } from '@utils/database';
import { uploadImage } from '@utils/cloudinary';

export const POST = async (request) => {
  try {
    const contentType = request.headers.get('content-type');
    let name, email, password, profileImageUrl = null;

    if (contentType?.includes('multipart/form-data')) {
      // Handle FormData with optional image
      const formData = await request.formData();
      name = formData.get('name');
      email = formData.get('email');
      password = formData.get('password');
      const profileImage = formData.get('profileImage');

      if (profileImage && profileImage.size > 0) {
        // Convert file to base64 for Cloudinary upload
        const bytes = await profileImage.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = `data:${profileImage.type};base64,${buffer.toString('base64')}`;
        
        const uploadResult = await uploadImage(base64Image, 'avatars');
        profileImageUrl = uploadResult.url;
      }
    } else {
      // Handle JSON data (backward compatibility)
      const jsonData = await request.json();
      name = jsonData.name;
      email = jsonData.email;
      password = jsonData.password;
    }

    // Validate inputs
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and password are required' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: 'Password must be at least 6 characters' }),
        { status: 400 }
      );
    }

    await connectToDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      // If user exists and has a password, they already have an account
      if (existingUser.password) {
        return new Response(
          JSON.stringify({ error: 'User with this email already exists' }),
          { status: 409 }
        );
      }

      // If user exists but has no password (Google-only account), allow setting password
      const hashedPassword = await bcrypt.hash(password, 12);
      existingUser.password = hashedPassword;
      existingUser.authProvider = 'both';
      if (profileImageUrl) {
        existingUser.image = profileImageUrl;
      }
      await existingUser.save();

      return new Response(
        JSON.stringify({ message: 'Password added to your existing account. You can now sign in with email/password.' }),
        { status: 200 }
      );
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate username from name
    let username = name.replace(/\s+/g, '').toLowerCase();
    if (username.length < 3) {
      username = username.padEnd(3, '0');
    }

    const newUser = await User.create({
      email: email.toLowerCase(),
      username: username,
      password: hashedPassword,
      image: profileImageUrl || '/assets/images/default-avatar.svg',
      authProvider: 'credentials',
    });

    return new Response(
      JSON.stringify({ message: 'User created successfully', userId: newUser._id }),
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create account' }),
      { status: 500 }
    );
  }
};
