import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";


export const educationalmediaUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: "/mentalheath-api/educationals/*"
    }),
    preservePath: true
});

export const userAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: "/mentalhealth-api/users/*"
    }),
    preservePath: true
});