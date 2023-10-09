const sleep = (ms: number): Promise<void> => {
  console.log("Kindly remember to remove sleep");
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default sleep;
