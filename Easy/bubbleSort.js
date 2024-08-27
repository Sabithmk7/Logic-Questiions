// Bubble Sort Implementation in JavaScript
// This repository contains a simple implementation of the Bubble Sort algorithm in JavaScript. Bubble Sort is a comparison-based sorting algorithm that iteratively steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

// Logic Behind the Algorithm:
// Initialization:

// A swapped variable is used to keep track of whether any elements were swapped during a pass through the array.
// A temp variable temporarily holds the value of an element during a swap operation.
// Outer Loop (do...while):

// The outer loop ensures that the sorting process continues until no elements are swapped during a complete pass through the array, indicating that the array is sorted.
// Initially, swapped is set to false at the beginning of each pass.
// Inner Loop (for):

// The inner loop iterates through the array, comparing each pair of adjacent elements.
// If an element is greater than its adjacent neighbor, the elements are swapped.
// After each swap, swapped is set to true to indicate that the array may still be unsorted.
// Completion:

// Once a complete pass through the array is made without any swaps, the loop exits, and the sorted array is returned.
// Big O Notation:
// Time Complexity:

// Worst-Case Performance: O(n²) — This occurs when the array is sorted in reverse order, requiring the maximum number of swaps.
// Best-Case Performance: O(n) — This occurs when the array is already sorted, requiring only a single pass through the array.
// Average-Case Performance: O(n²) — On average, Bubble Sort requires O(n²) time due to the nested loops that compare and swap elements.
// Space Complexity:

// O(1) — Bubble Sort is an in-place sorting algorithm, meaning it requires only a constant amount of additional memory space.
// Usage:
// This implementation is suitable for educational purposes or when dealing with small datasets. However, for large datasets, more efficient sorting algorithms like Quick Sort or Merge Sort are generally preferred due to Bubble Sort's O(n²) time complexity.


function a(n) {
    let swapped;
    let temp;
    do {
        swapped = false;
        for (i = 0; i < n.length - 1; i++) {
            if (n[i] > n[i + 1]) {
                let temp = n[i];
                n[i] = n[i + 1];
                n[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return n;
}
