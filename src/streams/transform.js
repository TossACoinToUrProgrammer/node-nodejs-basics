import { Transform } from "stream"

const transform = async () => {
  // Write your code here

  const reversed = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""))
    },
  })

  process.stdin.pipe(reversed).pipe(process.stdout)
}

await transform()
