const parseArgs = () => {
  // Write your code here
  const args = process.argv
  const result = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      result[args[i]] = args[i + 1]
      i++
    }
  }

  const resultString = Object.keys(result)
    .map((key) => `${key.slice(2)} is ${result[key]}`)
    .join(", ")

  console.log(resultString)
}

parseArgs()
