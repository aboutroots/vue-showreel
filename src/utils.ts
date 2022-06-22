export const sleep = async (ms: number): Promise<void> => {
  /**
   * Sleep for given number of miliseconds
   */
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, ms));
};
