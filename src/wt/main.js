import { Worker } from "worker_threads"
import path from "path"
import os from "os"

import getDirname from "../helpers/dirname.js"

const performCalculations = async () => {
  // Write your code here
  const workerPath = path.resolve(getDirname(import.meta.url), "worker.js")

  const coresNumber = os.cpus().length
  const results = []
  let responsesNumber = 0

  for (let i = 0; i < coresNumber; i++) {
    const worker = new Worker(workerPath, {
      workerData: 10 + i,
    })

    worker.on("message", (data) => {
      results[i] = {
        status: "resolved",
        data,
      }
      responsesUpdate()
    })

    worker.on("error", () => {
      results[i] = {
        status: "error",
        data: null,
      }
      responsesUpdate()
    })
  }

  const responsesUpdate = () => {
    responsesNumber++
    if (responsesNumber === coresNumber) {
      console.log(results)
    }
  }
}

await performCalculations()
