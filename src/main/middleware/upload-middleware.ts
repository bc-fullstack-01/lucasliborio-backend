import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";

const multerConfig = {
  directory: path.resolve(__dirname, '..', 'uploads'),
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'uploads'),
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  })
}
const upload = multer(multerConfig)

function uploadMiddleware(){
  return (req: Request, res: Response, next: NextFunction) => {

  }

}

