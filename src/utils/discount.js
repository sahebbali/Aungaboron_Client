export const discount = (price, discount) => {
  console.log(price);
  console.log(discount);
    const percentage = discount / 100;
   const dis = price - price * percentage;
    console.log(dis);
    return dis;
  };