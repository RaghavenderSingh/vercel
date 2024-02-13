import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: "c4ffb33c385412abf3fe0255c56b1632",
    secretAccessKey: "584bf9d5754a902d7f855ebdafdc0c01abe10fdcf71d4466f29c34b2b5e5b790",
    endpoint: "https://7a5aeb89a34de9310cd9648184cc4b94.r2.cloudflarestorage.com"
})


export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName,
    }).promise();
    console.log(response);
}

//Token value:TQfIP5NCLcJrFtxy74DdwzO5EKOQGbwxy6K-n67a
//Access Key ID:c4ffb33c385412abf3fe0255c56b1632
//Secret Access Key:584bf9d5754a902d7f855ebdafdc0c01abe10fdcf71d4466f29c34b2b5e5b790
//Use jurisdiction-specific endpoints for S3 clients:https://7a5aeb89a34de9310cd9648184cc4b94.r2.cloudflarestorage.com