/**
 * Insertion sort — stable, O(n²) average/worst, O(n) best (already sorted).
 * Mutates and returns the same array.
 */
export function insertSort(arr: number[]): number[] {
  let res = [...arr];

  for (let i = 1; i < res.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (res[j + 1] < res[j]) {
        let mid = res[j + 1];
        res[j + 1] = res[j];
        res[j] = mid;
      }
    }
  }
  return res;
}
