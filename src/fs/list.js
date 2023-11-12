import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const list = async () => {
  // Write your code here
  const filePath = path.resolve(getDirname(import.meta.url), "files")

  try {
    const list = await fs.readdir(filePath)
    console.log(list)
  } catch {
    throw new Error("FS operation failed")
  }
}

await list()
