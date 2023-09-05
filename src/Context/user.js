const user = JSON.parse(localStorage.getItem("user")) || null;

export const reUser = (state = user, action) => {
  switch (action.type) {
    case "SIGNIN":
      return action.payload;
    default:
      return state;
  }
};

export const acUser = (user) => ({ type: "SIGNIN", payload: user });
