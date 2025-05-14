import { ImageData } from "@/action/createCommunity";
import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { adminClient } from "../adminClient";
import { Subreddit } from "@/sanity.types";



export async function createSubreddit(
  name: string,
  moderatorId: string,
  imageData: ImageData | null,
  customSlug?: string,
  customDescription?: string
) {
    console.log(`Creating subreddit: ${name} with moderator: ${moderatorId}`);
    
    try {
        //Check if subreddit with this name already exist
        const checkExistingQuery = defineQuery(`
            *[_type == "subreddit" && title == $name][0] {
                _id
            }
            `);
        const existingSubreddit = await sanityFetch({
            query: checkExistingQuery,
            params: { name },
        });

        if (existingSubreddit.data) {
            console.log(`Subreddit "${name}" already exists`);
            return { error: "Subreddit already exists" };       
        }
        
        //Check if slug already exists if custom slug is provided
        if (customSlug) {
            const checkExistingSlugQuery = defineQuery(`
                *[_type == "subreddit" && slug.current == $slug][0] {
                    _id
                }
            `);
            const existingSlug = await sanityFetch({
                query: checkExistingSlugQuery,
                params: { slug: customSlug },
            });

            if (existingSlug.data) {
                console.log(`Slug "${customSlug}" already exists`);
                return { error: "Slug already exists" };
            }
        }

        //create slug from name or use custom slug
        const slug = customSlug || name.toLowerCase().replace(/\s+/g, "-");

        //Upload image if provided 
        let imageAsset;
        if (imageData){
            try {
                //Extract base64 data (remove data:image/jpeg;base64,part)
                const base64Data = imageData.base64.split(",")[1];

                //convert base64 to buffer 
                const buffer = Buffer.from(base64Data, "base64");

                //Upload image to Sanity
                imageAsset = await adminClient.assets.upload("image",buffer,{
                    filename: imageData.filename,
                    contentType: imageData.contentType,
                });

                console.log("Image uploaded successfully:", imageAsset);
                
            } catch (error) {
                console.log("Error uploading image:", error);
                //Continue without image if upload fails
                
                
            }
        }
        //create the subreddit
        const subredditDoc: Partial<Subreddit> = {
      _type: "subreddit",
      title: name,
      description: customDescription || `Welcome to r/${name}!`,
      slug: {
        current: slug,
        _type: "slug",
      },
      moderator: {
        _type: "reference",
        _ref: moderatorId,
      },
      createdAt: new Date().toISOString(),
    };
      // Add image if available
    if (imageAsset) {
      subredditDoc.image = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      };
    }

    const subreddit = await adminClient.create(subredditDoc as Subreddit);
      console.log(`Sunbreddit created successfully: ${subreddit._id}`);

      return {subreddit};
      


    } catch (error) {
        console.log("Error creating subreddit:", error);
        return { error: "Failed to create subreddit" };
        
    }


}