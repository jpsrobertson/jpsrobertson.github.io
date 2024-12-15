#!/usr/bin/env -S deno run -A --watch=static/,routes/

import { join } from "$std/path/mod.ts";
import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

// Check if we're in build mode
if (Deno.args.includes("build")) {
  const process = new Deno.Command("deno", {
    args: [
      "run",
      "-A",
      "--no-check",
      join(".", "main.ts"),
      "build",
    ],
    stdout: "inherit",
    stderr: "inherit",
  });

  const status = await process.output();
  
  if (!status.success) {
    throw new Error("Build failed");
  }
} else {
  await dev(import.meta.url, "./main.ts", config);
}
