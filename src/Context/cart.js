const cart = JSON.parse(localStorage.getItem("cart")) || [];

export const reCaret = (state = cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const data = JSON.parse(JSON.stringify(state));
      const product = JSON.parse(JSON.stringify(action.payload));
      const index = data.findIndex((item) => item.id === product.id);
      if (index === -1) data.push(product);
      else data[index].quantity += product.quantity;
      localStorage.setItem("cart", JSON.stringify(data));
      return data;

    case "REMOVE_FROM_CART":
      const newData = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newData));
      return newData;

    case "INCREASE_QUANTITY":
      const newData2 = JSON.parse(JSON.stringify(state));
      const index2 = newData2.findIndex((item) => item.id === action.payload);
      newData2[index2].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(newData2));
      return newData2;

    case "DECREASE_QUANTITY":
      const newData3 = JSON.parse(JSON.stringify(state));
      const index3 = newData3.findIndex((item) => item.id === action.payload);
      if (newData3[index3].quantity > 1) newData3[index3].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(newData3));
      return newData3;

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return [];

    default:
      return state;
  }
};
