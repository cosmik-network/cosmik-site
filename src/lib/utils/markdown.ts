import fs from "fs";
import path from "path";

function getMDFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return rawContent;
}

function getMDData(dir: string) {
  const mdFiles = getMDFiles(dir);
  return mdFiles.map((file) => {
    const filePath = path.join(dir, file);
    const content = readMDFile(filePath);
    const slug = path.basename(file, path.extname(file));

    return {
      slug,
      content,
    };
  });
}

export function getContents(relativePath: string) {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "app",
    "content",
    relativePath
  );
  return getMDData(fullPath);
}
