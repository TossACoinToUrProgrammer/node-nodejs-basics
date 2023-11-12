import path from "path"
import { createReadStream } from "fs"

import getDirname from "../helpers/dirname.js"

const read = async () => {
  // Write your code here

  const filePath = path.resolve(
    getDirname(import.meta.url),
    "files",
    "fileToRead.txt"
  )

  const readStream = createReadStream(filePath)
  readStream.pipe(process.stdout)
}

await read()
