import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function loadYamlData<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return yaml.load(fileContents) as T;
}
