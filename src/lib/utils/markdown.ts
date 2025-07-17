import fs from "fs";
import path from "path";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return rawContent;
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const filePath = path.join(dir, file);
    const content = readMDXFile(filePath);
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
  return getMDXData(fullPath).map((content) => content.content);
}
