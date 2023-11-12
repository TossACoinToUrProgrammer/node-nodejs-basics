import { createGzip } from "zlib"
import path from "path"
import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"

import getDirname from "../helpers/dirname.js"

const compress = async () => {
  // Write your code here
  const dirname = getDirname(import.meta.url)
  const filePath = path.resolve(dirname, "files", "fileToCompress.txt")
  const compressedPath = path.resolve(dirname, "files", "archive.gz")

  const readStream = createReadStream(filePath)
  const writeStream = createWriteStream(compressedPath)

  await pipeline(readStream, createGzip(), writeStream)
}

await compress()
