import path from "path"
import { createWriteStream } from "fs"

import getDirname from "../helpers/dirname.js"

const write = async () => {
  // Write your code here
  const filePath = path.resolve(getDirname(import.meta.url), "files", "fileToWrite.txt")

  const writeStream = createWriteStream(filePath)

  process.stdin.on("data", (data) => {
    writeStream.write(data)
    process.exit()
  })
}

await write()
