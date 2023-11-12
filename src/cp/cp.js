import path from "path"

import getDirname from "../helpers/dirname.js"
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here
    const childPath = path.resolve(getDirname(import.meta.url), 'files', 'script.js')
    spawn('node', [childPath, ...args], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test', 'test2', 'test3']);
