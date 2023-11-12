import crypto from "crypto"
import fs from "fs/promises"
import path from "path"

import getDirname from "../helpers/dirname.js"

const calculateHash = async () => {
  // Write your code here
  const filePath = path.resolve(
    getDirname(import.meta.url),
    "files",
    "fileToCalculateHashFor.txt"
  )

  const fileBuffer = await fs.readFile(filePath)
  const hash = crypto.createHash("sha256").update(fileBuffer)

  const hex = hash.digest('hex');
  console.log(hex)
}

await calculateHash()
