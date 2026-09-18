import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Deletes an image from Cloudinary using its public ID.
 * @param publicId - The public ID of the asset in Cloudinary
 */
export async function deleteCloudinaryImage(publicId: string): Promise<boolean> {
  if (!publicId) return false;
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(`Cloudinary destroy result for ${publicId}:`, result);
    return result.result === 'ok';
  } catch (error) {
    console.error(`Failed to delete Cloudinary image (${publicId}):`, error);
    return false;
  }
}

export default cloudinary;
