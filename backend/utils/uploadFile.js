import multer from "multer";
import { unlinkSync } from "fs";
import { v2 as cloudinary } from "cloudinary";

const uploadFile = (thumbnail) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `brocade`);
    },
    filename: function (req, file, cb) {
      let name = file.originalname.split(".").pop();
      cb(null, new Date().toISOString().replace(/:/g, "-") + "." + name);
    },
  });

  const upload = multer({ storage: storage });
  let upfile = upload.single(thumbnail);

  return upfile;
};

const uploadMultipleFile = (thumbnail, image1, image2, image3, image4, image5) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `brocade`);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  return upload.fields([
    { name: thumbnail, maxCount: 1 },
    { name: image1, maxCount: 1 },
    { name: image2, maxCount: 1 },
    { name: image3, maxCount: 1 },
    { name: image4, maxCount: 1 },
    { name: image5, maxCount: 1 },
  ]);
};

const uploadTocloudinary = async (localpath) => {
  let config = {
    cloud_name: "dyof6o0ul",
    api_key: "943579715357941",
    api_secret: "fFY3ZIIZAsSKF5lJw9CDVYHmpLQ",
    folder: "brocade",
    use_filename: true,
    unique_filename: false,
  };
  await cloudinary.uploader.upload(localpath, { ...config });
  unlinkSync(localpath);
};

export { uploadFile, uploadMultipleFile, uploadTocloudinary };
