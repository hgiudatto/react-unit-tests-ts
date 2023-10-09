const rickMortys: Array<any> = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 17,
    name: "Annie",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
];

const wait = (cb: () => void, ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms)).then(cb);
};

const indexedObjectsArray = async (arr: Array<string>) => {
  arr.map(async (rm, index) => {
    console.log(`Element: ${index + JSON.stringify(rm)} will run first.`);
    await wait(
      () =>
        console.log(
          `Element: ${
            index + JSON.stringify(rm)
          } will run second after three secs.`
        ),
      3000
    );
    console.log(`Element: ${index + JSON.stringify(rm)} will run third.`);
  });
};
indexedObjectsArray(rickMortys);
