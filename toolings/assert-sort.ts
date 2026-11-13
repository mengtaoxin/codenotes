import { expect } from "vitest";

function formatArray(arr: readonly unknown[]): string {
  return `[${arr.map((v) => JSON.stringify(v)).join(", ")}]`;
}

function findDiffs(
  actual: readonly unknown[],
  expected: readonly unknown[],
): { index: number; expected: unknown; actual: unknown }[] {
  const len = Math.max(actual.length, expected.length);
  const diffs: { index: number; expected: unknown; actual: unknown }[] = [];
  for (let i = 0; i < len; i++) {
    if (!Object.is(actual[i], expected[i])) {
      diffs.push({
        index: i,
        expected: i < expected.length ? expected[i] : "(越界/缺失)",
        actual: i < actual.length ? actual[i] : "(越界/缺失)",
      });
    }
  }
  return diffs;
}

function formatSortMismatch(opts: {
  label?: string;
  input: readonly unknown[];
  expected: readonly unknown[];
  actual: readonly unknown[];
}): string {
  const { label, input, expected, actual } = opts;
  const diffs = findDiffs(actual, expected);
  const lines = [
    label ?? "排序结果不符合预期",
    "",
    `输入（调用前）: ${formatArray(input)}`,
    `期望输出:       ${formatArray(expected)}`,
    `实际输出:       ${formatArray(actual)}`,
  ];

  if (actual.length !== expected.length) {
    lines.push(
      `长度:           期望 ${expected.length}，实际 ${actual.length}`,
    );
  }

  if (diffs.length > 0) {
    const first = diffs[0]!;
    lines.push(
      `首个差异下标:   ${first.index}（期望 ${JSON.stringify(first.expected)}，实际 ${JSON.stringify(first.actual)}）`,
      "全部差异:",
      ...diffs.map(
        (d) =>
          `  [${d.index}] 期望 ${JSON.stringify(d.expected)} ≠ 实际 ${JSON.stringify(d.actual)}`,
      ),
    );
  }

  return lines.join("\n");
}

/** Assert a sort function turns `input` into `expected`, with a readable failure. */
export function expectSorted(
  sort: (arr: number[]) => number[],
  input: number[],
  expected: number[],
  label?: string,
): number[] {
  const snapshot = [...input];
  const actual = sort(input);

  const same =
    actual.length === expected.length &&
    actual.every((v, i) => Object.is(v, expected[i]));

  if (!same) {
    expect.fail(
      formatSortMismatch({ label, input: snapshot, expected, actual }),
    );
  }

  return actual;
}
