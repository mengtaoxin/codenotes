import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["algorithms-tests/**/*.test.ts"],
    // One failure at a time: stop after the first failed test.
    bail: 1,
    // Run test files one by one (not in parallel).
    fileParallelism: false,
    sequence: {
      // Within a file, run tests in order (not concurrent).
      concurrent: false,
    },
  },
});
