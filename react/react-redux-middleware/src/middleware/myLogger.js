const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("prev : \t", store.getState());
  const result = next(action);
  console.log("Next : \t", store.getState());
  return result;
};

export default myLogger;
