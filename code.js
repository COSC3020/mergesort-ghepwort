function mergesort(arr) {
    // Computes the size of the  subarrays starting with size 1, 
    // then doubles in size every loop until it is the size of the array
    for (var size = 1; size < arr.length; size = 2 * size) {
        // Splits the arrays into chunks and merges them
        for (var left = 0; left < arr.length - 1; left += 2 * size) {
            var mid = Math.min(left + size - 1, arr.length - 1);
            var right = Math.min(left + 2 * size - 1, arr.length - 1);
            merge(arr, left, mid, right);
        }
    }
    return arr;
}

function merge(arr, left, mid, end) {
    // Two "pointers" to keep track of array indexes
    var LeftPointer = left;
    var RightPointer = mid + 1;

    // Makes sure there are arrays to sort
    while (LeftPointer <= mid && RightPointer <= end) {
        // If left <= right
        if (arr[LeftPointer] <= arr[RightPointer]) {
            LeftPointer++;
        // If left > right
        } else {
            // Store the value and index of the RightPointer
            var value = arr[RightPointer];
            var index = RightPointer;

            // Shift all the elements between the left element and right element, right by 1
            while (index != LeftPointer) {
                arr[index] = arr[index - 1];
                index--;
            }

            // Put the value of RightPointer back in
            arr[LeftPointer] = value;

            // Update all the pointers
            LeftPointer++;
            mid++;
            RightPointer++;
        }
    }
}