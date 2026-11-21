/**
 * Heap sort — unstable, O(n log n) average/worst/best.
 * Returns a new sorted array; does not mutate the input.
 */
export function heapSort(arr: number[]): number[] {
  for (let heapSize = arr.length; heapSize > 0; heapSize--) {
    buildMaxHeap(arr, heapSize)

    if (arr[0] > arr[heapSize - 1]) {
      exchange(arr, 0, heapSize - 1)
    }

  }

  return arr;
}

function buildMaxHeap(arr: number[], heapSize: number) {
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, heapSize);
  }
}

function maxHeapify(arr: number[], i: number, heapSize: number) {
  let l = left(i);
  let r = right(i);
  let largest = i;

  if (l < heapSize && arr[l] > arr[i]) {
    largest = l;
  }
  if (r < heapSize && arr[r] > arr[i]) {
    largest = r;
  }

  if (largest !== i) {
    exchange(arr, i, largest)
    maxHeapify(arr, i, largest)
  }
}

function exchange(arr: number[], i: number, j: number) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}


function parent(i: number) {
  return Math.floor(i / 2);
}

function left(i: number) {
  return 2 * i + 1;
}

function right(i: number) {
  return 2 * i + 2;
}