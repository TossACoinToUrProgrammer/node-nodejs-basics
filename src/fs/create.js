import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const create = async () => {
  // Write your code here
  const filePath = path.resolve(
    getDirname(import.meta.url),
    "files",
    "fresh.txt"
  )

  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" })
  } catch {
    throw new Error("FS operation failed")
  }
}

await create()
