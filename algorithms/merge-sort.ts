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

function merge(arr1: number[], arr2: number[]): number[] {
  let result = [];

  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length || i2 < arr2.length) {
    if (i1 === arr1.length) {
      result.push(arr2[i2])
      i2++;
      continue;
    } else if (i2 === arr2.length) {
      result.push(arr1[i1])
      i1++;
      continue;
    }

    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1])
      i1++;
    } else {
      result.push(arr2[i2])
      i2++;
    }
  }

  return result;
}

function split(arr: number[]) {
  const i = Math.floor(arr.length / 2);
  const left = sub(arr, 0, i);
  const right = sub(arr, i, arr.length)
  return [left, right]
}

function sub(arr: number[], start: number, end: number) {
  let result = []
  while (start < arr.length && start < end) {
    result.push(arr[start])
    start++;
  }

  return result;
}
