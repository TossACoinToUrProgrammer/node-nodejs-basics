const parseEnv = () => {
    // Write your code here 
    const rssKeys = Object.keys(process.env).filter(key => key.startsWith("RSS_"))
    const resultString = rssKeys.map(key => `${key}=${process.env[key]}`).join('; ')
    console.log(resultString)
};

parseEnv();