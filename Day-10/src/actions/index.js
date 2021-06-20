export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const multNumber = () => {
  return {
    type: "MULTIPLICATION",
  };
};

export const divNumber = () => {
  return {
    type: "DIVISION",
  };
};
