import { describe, it } from "vitest";
import { heapSort } from "../algorithms/heap-sort.js";
import { expectSorted } from "../toolings/assert-sort.js";

describe("heapSort", () => {
  it("sorts an unsorted array", () => {
    expectSorted(heapSort, [3, 1, 4, 1, 5, 9, 2, 6], [
      1, 1, 2, 3, 4, 5, 6, 9,
    ]);
  });

  it("handles empty and single-element arrays", () => {
    expectSorted(heapSort, [], []);
    expectSorted(heapSort, [42], [42]);
  });

  it("sorts two elements", () => {
    expectSorted(heapSort, [2, 1], [1, 2]);
  });

  it("leaves an already-sorted array unchanged", () => {
    expectSorted(heapSort, [1, 2, 3], [1, 2, 3]);
  });

  it("sorts a reverse-sorted array", () => {
    expectSorted(heapSort, [3, 2, 1], [1, 2, 3]);
  });

  it("handles all-equal elements", () => {
    expectSorted(heapSort, [7, 7, 7], [7, 7, 7]);
  });

  it("handles duplicate values", () => {
    expectSorted(heapSort, [2, 1, 2], [1, 2, 2]);
  });

  it("sorts negatives and zeros", () => {
    expectSorted(heapSort, [-2, 0, -1, 3], [-2, -1, 0, 3]);
  });
});
