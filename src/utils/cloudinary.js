// import {v2 as cloudinary} from 'cloudinary'
const fs = require('fs')
const v2 = require('cloudinary')

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (loaclFilePath) => {
    try {
        if(!loaclFilePath) return null

        const responce = await cloudinary.uploader.upload(loaclFilePath, {
            resource_type : auto
        })

        console.log('file is uploaded in cloudinary' , responce.url);
        return Response;
    } catch (error) {
        fs.unlinkSync(loaclFilePath)
        return null
    }
}


cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

export {uploadOnCloudinary}