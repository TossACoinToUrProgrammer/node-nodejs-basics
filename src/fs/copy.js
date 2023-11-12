import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const copy = async () => {
  // Write your code here
  const __dirname = getDirname(import.meta.url)
  const folderPath = path.resolve(__dirname, "files")
  const destinationPath = path.resolve(__dirname, "files_copy")

  try {
    await fs.cp(folderPath, destinationPath, { recursive: true, errorOnExist: true, force: false  })
  } catch {
    throw new Error("FS operation failed")
  }
}

await copy()
