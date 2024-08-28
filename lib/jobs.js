import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("jobs.db");

export async function getJobs() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM jobs").all();
}

export function getJob(slug) {
  return db.prepare("SELECT * FROM jobs WHERE slug = ?").get(slug);
}

export async function saveJob(jobs) {
  jobs["slug"] = slugify(jobs.title, { lower: true });
  jobs.instructions = xss(jobs.instructions);

  const extension = jobs.image.name.split(".").pop();
  const fileName = `${jobs.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await jobs.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed!");
    }
  });

  jobs.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO jobs
      (slug,title,image, summary, responsibilities,requirements, poster, poster_email )
    VALUES (
    @slug,
         @title,
         @image,
         @summary,
         @responsibilities,
          @requirements,
         @poster,
         @poster_email
    )
  `
  ).run(jobs);
}
