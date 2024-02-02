"use server"
import fsPromises from "fs/promises"
import path from "path"

export const getLocalData = async (type) => {
  const filePath = path.join(process.cwd(), "assets/data.json")
  const jsonData = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(jsonData)
  return objectData[type]
}
