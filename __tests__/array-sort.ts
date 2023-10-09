const toBeSorted = [5, 2, 9, 3, 6, 1, 8, 7];

const showSortedAsc = (arr: Array<number>) => {
  console.log(
    `Sorted array: `,
    arr.sort((a: number, b: number) => {
      return a - b;
    })
  );
};

showSortedAsc(toBeSorted);
