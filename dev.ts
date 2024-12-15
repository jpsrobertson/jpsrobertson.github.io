#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

// Check if we're in build mode
if (Deno.args.includes("build")) {
  const buildCmd = new Deno.Command(Deno.execPath(), {
    args: [
      "run",
      "-A",
      "https://deno.land/x/fresh@1.5.4/src/dev/mod.ts",
      "build",
    ],
  });
  const { success } = await buildCmd.output();
  if (!success) {
    throw new Error("Build failed");
  }
} else {
  await dev(import.meta.url, "./main.ts", config);
}
