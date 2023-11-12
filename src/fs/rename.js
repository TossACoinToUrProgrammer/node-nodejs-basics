import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const rename = async () => {
  // Write your code here
  const __dirname = getDirname(import.meta.url)
  const filePath = path.resolve(__dirname, "files", "wrongFilename.txt")
  const newPath = path.resolve(__dirname, "files", "properFilename.md")

  try {
    // check if newPath exists
    await fs.access(newPath, fs.constants.F_OK)
  } catch {
    // rename file only if newPath doesn't already exists
    try {
      await fs.rename(filePath, newPath)
    } catch {
      throw new Error("FS operation failed")
    }
    return
  }

  throw new Error("FS operation failed")
}

await rename()
