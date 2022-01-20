import axios from "axios";

export const uploadImage = async (file) => {
    const timestamp = Date.now()/1000;

    const formData = new FormData();
    formData.append("api_key",'771865865795784');
    formData.append("file", file);
    formData.append("upload_preset", "twitter_files");
    formData.append("timestamp",  (Date.now() / 1000) | 0);
    
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post("https://api.cloudinary.com/v1_1/df0iybjrp/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      return fileURL;
    })
}