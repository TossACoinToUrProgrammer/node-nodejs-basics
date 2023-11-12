import { createReadStream, createWriteStream } from "fs"
import path from "path"
import { pipeline } from "stream/promises"
import { createUnzip } from "zlib"

import getDirname from "../helpers/dirname.js"

const decompress = async () => {
  // Write your code here
  const dirname = getDirname(import.meta.url)
  const compressedPath = path.resolve(dirname, "files", "archive.gz")
  const decompressedPath = path.resolve(dirname, "files", "fileToCompress.txt")

  const readStream = createReadStream(compressedPath)
  const writeStream = createWriteStream(decompressedPath)

  await pipeline(readStream, createUnzip(), writeStream)
}

await decompress()
