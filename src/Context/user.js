const user = JSON.parse(localStorage.getItem("user")) || null;

export const reUser = (state = user, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export const acUser = (user) => ({ type: "LOGIN", payload: user });
