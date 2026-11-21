import { describe, it } from "vitest";
import { mergeSort } from "../algorithms/merge-sort.js";
import { expectSorted } from "../toolings/assert-sort.js";

describe("mergeSort", () => {
  it("sorts an unsorted array", () => {
    expectSorted(mergeSort, [3, 1, 4, 1, 5, 9, 2, 6], [
      1, 1, 2, 3, 4, 5, 6, 9,
    ]);
  });

  it("handles empty and single-element arrays", () => {
    expectSorted(mergeSort, [], []);
    expectSorted(mergeSort, [42], [42]);
  });

  it("sorts two elements", () => {
    expectSorted(mergeSort, [2, 1], [1, 2]);
  });

  it("leaves an already-sorted array unchanged", () => {
    expectSorted(mergeSort, [1, 2, 3], [1, 2, 3]);
  });

  it("sorts a reverse-sorted array", () => {
    expectSorted(mergeSort, [3, 2, 1], [1, 2, 3]);
  });

  it("handles all-equal elements", () => {
    expectSorted(mergeSort, [7, 7, 7], [7, 7, 7]);
  });

  it("handles duplicate values", () => {
    expectSorted(mergeSort, [2, 1, 2], [1, 2, 2]);
  });

  it("sorts negatives and zeros", () => {
    expectSorted(mergeSort, [-2, 0, -1, 3], [-2, -1, 0, 3]);
  });
});
