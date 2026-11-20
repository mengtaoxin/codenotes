/**
 * Merge sort — stable, O(n log n) average/worst/best.
 * Returns a new sorted array; does not mutate the input.
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const arrs = split(arr)
  const left = arrs[0]
  const right = arrs[1]
  return merge(mergeSort(left), mergeSort(right))
}

function merge(sortedArr1: number[], sortedArr2: number[]): number[] {
  let result = [];

  let i = 0;
  let j = 0;
  while (i < sortedArr1.length || j < sortedArr2.length) {
    if (i === sortedArr1.length) {
      result.push(sortedArr2[j])
      j++;
      continue;
    } else if (j === sortedArr2.length) {
      result.push(sortedArr1[i])
      i++;
      continue;
    }

    if (sortedArr1[i] < sortedArr2[j]) {
      result.push(sortedArr1[i])
      i++;
    } else {
      result.push(sortedArr2[j])
      j++;
    }
  }

  return result;
}

function split(arr: number[]) {
  const left = subarr(arr, 0, Math.floor(arr.length / 2));
  const right = subarr(arr, Math.floor(arr.length / 2), arr.length)
  return [left, right]
}

function subarr(arr: number[], start: number, end: number) {
  let result = []
  while (start < arr.length && start < end) {
    result.push(arr[start])
    start++;
  }

  return result;
}
