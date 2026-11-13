import { describe, expect, it } from "vitest";
import { insertSort } from "../algorithms/insert-sort.js";
import { expectSorted } from "../toolings/assert-sort.js";

describe("insertSort", () => {
  it("sorts an unsorted array", () => {
    expectSorted(insertSort, [3, 1, 4, 1, 5, 9, 2, 6], [
      1, 1, 2, 3, 4, 5, 6, 9,
    ]);
  });

  it("handles empty and single-element arrays", () => {
    expectSorted(insertSort, [], []);
    expectSorted(insertSort, [42], [42]);
  });

  it("sorts two elements", () => {
    expectSorted(insertSort, [2, 1], [1, 2]);
  });

  it("leaves an already-sorted array unchanged", () => {
    expectSorted(insertSort, [1, 2, 3], [1, 2, 3]);
  });

  it("sorts a reverse-sorted array", () => {
    expectSorted(insertSort, [3, 2, 1], [1, 2, 3]);
  });

  it("handles all-equal elements", () => {
    expectSorted(insertSort, [7, 7, 7], [7, 7, 7]);
  });

  it("handles duplicate values", () => {
    expectSorted(insertSort, [2, 1, 2], [1, 2, 2]);
  });

  it("sorts negatives and zeros", () => {
    expectSorted(insertSort, [-2, 0, -1, 3], [-2, -1, 0, 3]);
  });

  it("does not mutate the input array", () => {
    const input = [3, 1, 2];
    const snapshot = [...input];
    insertSort(input);
    expect(input).toEqual(snapshot);
  });
});
