// lib/loadImages.js
import fs from "fs";
import path from "path";

export const loadImages = (folder: any) => {
  const dir = path.join(process.cwd(), "public/images", folder);
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|svg)$/.test(file)) // Filter image files
    .map((file) => `/images/${folder}/${file}`);
};
