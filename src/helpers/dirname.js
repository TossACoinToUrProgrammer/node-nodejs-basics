import { fileURLToPath } from "url"
import path from "path"

const getDirname = (url) => {
  return path.dirname(fileURLToPath(url))
}

export default getDirname
