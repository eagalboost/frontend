import axios from "axios";

const uploadImage = async (imageFile) => {
  if (!imageFile) return null; 

  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "digital"); 

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dib5ameb0/image/upload",
      formData
    );
    return response.data.secure_url; 
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error("Image upload failed");
  }
};

export default uploadImage;
