export const sleep = async (ms) => {
  /**
   * Sleep for given number of miliseconds
   */
  await new Promise((r) => setTimeout(r, ms));
};
