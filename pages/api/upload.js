import multer from "multer";
import nc from "next-connect";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc();

const imageStorage = multer.diskStorage({
    destination: 'uploads', 
      filename: (req, file, cb) => {
          cb(null, 'img_' + Date.now() 
             + path.extname(file.originalname));
    }
  });
  
const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
            return cb(new Error('Please upload a Image'));
        }
        cb(undefined, true)
    }
}) 

handler.use(imageUpload.single("image")).post(async (req, res) => {


});


export default handler;


