import { getServerSession } from 'next-auth';
import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (request, { params }) => {
  try {
    const session = await getServerSession();
    
    if (!session?.user) {
      return new Response(
        JSON.stringify({ error: 'You must be logged in to like a prompt' }),
        { status: 401 }
      );
    }

    await connectToDB();

    const { id } = await params;
    const prompt = await Prompt.findById(id);

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Prompt not found' }),
        { status: 404 }
      );
    }

    // Get user ID from session
    const userId = session.user.id;

    const hasLiked = prompt.likedBy.includes(userId);
    const hasDisliked = prompt.dislikedBy.includes(userId);

    if (hasLiked) {
      // Remove like (toggle off)
      prompt.likedBy = prompt.likedBy.filter(id => id.toString() !== userId);
      prompt.likes = Math.max(0, prompt.likes - 1);
    } else {
      // Add like
      prompt.likedBy.push(userId);
      prompt.likes += 1;

      // Remove dislike if exists
      if (hasDisliked) {
        prompt.dislikedBy = prompt.dislikedBy.filter(id => id.toString() !== userId);
        prompt.dislikes = Math.max(0, prompt.dislikes - 1);
      }
    }

    await prompt.save();

    return new Response(
      JSON.stringify({
        likes: prompt.likes,
        dislikes: prompt.dislikes,
        hasLiked: !hasLiked,
        hasDisliked: false,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Like error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to like prompt' }),
      { status: 500 }
    );
  }
};
