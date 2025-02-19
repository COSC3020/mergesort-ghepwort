function mergesort(arr) {
    // Computes the size of the subarrays starting with size 1,
    // then doubles in size every loop until it is the size of the array
    for (let size = 1; size < arr.length; size = 2 * size) {
        // Splits the arrays into chunks and merges them
        for (let left = 0; left < arr.length - 1; left += 2 * size) {
            let mid = Math.min(left + size - 1, arr.length - 1);
            let right = Math.min(left + 2 * size - 1, arr.length - 1);
            merge(arr, left, mid, right);
        }
    }
    return arr;
}

function merge(arr, left, mid, end) {
    // Two "pointers" to keep track of array indexes
    let leftPointer = left;
    let rightPointer = mid + 1;

    // Makes sure there are arrays to sort
    while (leftPointer <= mid && rightPointer <= end) {
        // If left <= right
        if (arr[leftPointer] <= arr[rightPointer]) {
            leftPointer++;
        // If left > right
        } else {
            // Store the value and index of the rightPointer
            let value = arr[rightPointer];
            let index = rightPointer;

            // Shift all the elements between the left element and right element, right by 1
            while (index !== leftPointer) {
                arr[index] = arr[index - 1];
                index--;
            }

            // Put the value of rightPointer back in
            arr[leftPointer] = value;

            // Update all the pointers
            leftPointer++;
            mid++;
            rightPointer++;
        }
    }
}
