import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { uploadImage } from "@utils/cloudinary";

export const POST = async (request) => {
    try {
        const contentType = request.headers.get('content-type');
        let userId, prompt, tag, imageUrl = null;

        if (contentType?.includes('multipart/form-data')) {
            // Handle form data with image
            const formData = await request.formData();
            userId = formData.get('userId');
            prompt = formData.get('prompt');
            tag = formData.get('tag');
            const imageFile = formData.get('image');

            if (imageFile && imageFile.size > 0) {
                // Convert file to base64 for Cloudinary upload
                const bytes = await imageFile.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
                
                const uploadResult = await uploadImage(base64Image);
                imageUrl = uploadResult.url;
            }
        } else {
            // Handle JSON data (backward compatibility)
            const jsonData = await request.json();
            userId = jsonData.userId;
            prompt = jsonData.prompt;
            tag = jsonData.tag;
            
            // Handle base64 image if provided
            if (jsonData.image) {
                const uploadResult = await uploadImage(jsonData.image);
                imageUrl = uploadResult.url;
            }
        }

        await connectToDB();
        const newPrompt = new Prompt({ 
            creator: userId, 
            prompt, 
            tag,
            imageUrl,
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error('Create prompt error:', error);
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
