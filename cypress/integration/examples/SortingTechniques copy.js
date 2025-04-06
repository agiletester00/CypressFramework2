// Sorting Techniques in JavaScript

// Bubble Sort
describe('Sorting Techniques Test', () => {
    it('Bubble Sort Test', () => {
        function bubbleSort(arr) {
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // Swap elements
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }

        // Example Usage
        let array = [64, 34, 25, 12, 22, 11, 90];
        let sortedArray = bubbleSort([...array]);
        expect(sortedArray).to.deep.equal([11, 12, 22, 25, 34, 64, 90]);
    });
});

// Selection Sort
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Insertion Sort
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = arr.filter((el) => el < pivot);
    let right = arr.filter((el) => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort([...array]));
console.log("Selection Sort:", selectionSort([...array]));
console.log("Insertion Sort:", insertionSort([...array]));
console.log("Quick Sort:", quickSort([...array]));