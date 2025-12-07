import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { uploadImage } from "@utils/cloudinary";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const { id } = await params;
        const prompt = await Prompt.findById(id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    try {
        const contentType = request.headers.get('content-type');
        let prompt, tag, imageUrl = undefined;

        if (contentType?.includes('multipart/form-data')) {
            const formData = await request.formData();
            prompt = formData.get('prompt');
            tag = formData.get('tag');
            const imageFile = formData.get('image');

            if (imageFile && imageFile.size > 0) {
                const bytes = await imageFile.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
                
                const uploadResult = await uploadImage(base64Image);
                imageUrl = uploadResult.url;
            }
        } else {
            const jsonData = await request.json();
            prompt = jsonData.prompt;
            tag = jsonData.tag;
            
            if (jsonData.image) {
                const uploadResult = await uploadImage(jsonData.image);
                imageUrl = uploadResult.url;
            }
        }

        await connectToDB();

        const { id } = await params;
        const existingPrompt = await Prompt.findById(id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        if (imageUrl !== undefined) {
            existingPrompt.imageUrl = imageUrl;
        }

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        console.error('Update prompt error:', error);
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        const { id } = await params;
        await Prompt.findByIdAndDelete(id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};
