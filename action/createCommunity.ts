'use server'

import { createSubreddit } from "@/sanity/lib/subreddits/createSubreddit";
import { getUser } from "@/sanity/lib/user/getUser";

export type ImageData = {
    base64: string;
    filename: string;
    contentType: string;
} | null;

export async function createCommunity(
    name : string,
    imageBase64: string | null | undefined,
    imageFilename: string | null| undefined,
    inamgeContentType: string | null | undefined,
    slug?: string,
    description?: string
)
{
    try {

        const user = await getUser();

        if("error" in user) {
            return {error: user.error};
        }

        //Prepare the image data
        let imageData: ImageData = null;
        if (imageBase64 && imageFilename && inamgeContentType) {
            imageData = {
                base64: imageBase64,
                filename: imageFilename,
                contentType: inamgeContentType,
            };
        }
            const result = await createSubreddit(
      name,
      user._id,
      imageData,
      slug,
      description
    );

    return result;
        
    } catch (error) {
        console.error("Error creating community:", error);
        throw new Error("Failed to create community");
    }
}