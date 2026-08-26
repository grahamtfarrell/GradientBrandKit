import sharp from "sharp";
import fs from "fs";
import path from "path";

const src =
  process.env.SLIDES_SRC ||
  path.join(process.env.HOME || "", "Downloads/Gradient Brandkit");
const dst = path.join(process.cwd(), "public/slides");

fs.mkdirSync(dst, { recursive: true });

async function convert(i) {
  const inFile = path.join(src, `${i}.png`);
  const outFile = path.join(dst, `${String(i).padStart(2, "0")}.webp`);
  const info = await sharp(inFile)
    .webp({ quality: 95, effort: 5 })
    .toFile(outFile);
  console.log(
    `${String(i).padStart(2, "0")}.webp ${(info.size / 1024).toFixed(0)}KB`,
  );
}

(async () => {
  const concurrency = 4;
  const queue = Array.from({ length: 54 }, (_, i) => i + 1);
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (queue.length) {
        const i = queue.shift();
        if (i) await convert(i);
      }
    }),
  );
})();
