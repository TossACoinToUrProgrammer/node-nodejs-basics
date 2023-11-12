import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"


const read = async () => {
    // Write your code here 

    const filePath = path.resolve(getDirname(import.meta.url), "files", "fileToRead.txt")

    try {
      const content = await fs.readFile(filePath, "utf8")
      console.log(content)
    } catch {
      throw new Error("FS operation failed")
    }
};

await read();