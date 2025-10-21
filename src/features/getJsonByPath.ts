import fs from "node:fs"

export const getJsonByPath = (path: string) => {
  if (fs.existsSync(path)) {
    try {
      const fileContents = fs.readFileSync(path, "utf8")

      return JSON.parse(fileContents)
    } catch (error) {
      return null
    }
  } else {
    console.log("JSON file does not exist.")
    return null
  }
}
