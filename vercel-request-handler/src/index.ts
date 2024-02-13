import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
    accessKeyId: "c4ffb33c385412abf3fe0255c56b1632",
    secretAccessKey: "584bf9d5754a902d7f855ebdafdc0c01abe10fdcf71d4466f29c34b2b5e5b790",
    endpoint: "https://7a5aeb89a34de9310cd9648184cc4b94.r2.cloudflarestorage.com"
})

const app = express();

app.get("/*", async (req, res) => {
    // id.100xdevs.com
    const host = req.hostname;

    const id = host.split(".")[0];
    const filePath = req.path;

    const contents = await s3.getObject({
        Bucket: "vercel",
        Key: `dist/${id}${filePath}`
    }).promise();
    
    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);

    res.send(contents.Body);
})

