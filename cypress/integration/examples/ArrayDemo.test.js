describe('Arrays Demo', () => {
    it('Arrays Demo', () => {

        let a = [1, 5, 2, 6, 3, 4, 8, 9, 7, 6];

        // Custom bubble sort function
        function bubbleSort(arr) {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // Swap arr[j] and arr[j+1]
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }

        // Separate even and odd numbers
        let even = a.filter((num) => num % 2 == 0);
        let odd = a.filter((num) => num % 2 != 0);

        // Sort even and odd arrays using the custom sort function
        let sortedEven = bubbleSort([...even]);
        let sortedOdd = bubbleSort([...odd]);

        // Log the sorted arrays
        cy.log("Sorted Even Array");
        sortedEven.forEach(num => cy.log(num));

        cy.log("Sorted Odd Array");
        sortedOdd.forEach(num => cy.log(num));
    });
});