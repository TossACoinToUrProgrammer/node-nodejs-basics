import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const remove = async () => {
  // Write your code here
  const filePath = path.resolve(
    getDirname(import.meta.url),
    "files",
    "fileToRemove.txt"
  )

  try {
    await fs.rm(filePath)
  } catch {
    throw new Error("FS operation failed")
  }
}

await remove()
