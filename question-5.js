// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
const calculateTotalPrice = (product,promotionCode) => {
  let arrayPrice = [];
  for (let i =0; i < product.length; i++) {
    totalPrice = product[i].price * product[i].quantity
    // console.log(totalPrice)
    arrayPrice.push(totalPrice)
  }
  allPrice = arrayPrice.reduce((acc,curr)=>acc+curr)
  if (promotionCode === "") {
    return allPrice;
  } else if (promotionCode === "SALE20") {
    return allPrice * 80 / 100
  } else if (promotionCode === "SALE50") {
    return allPrice * 50 / 100
  } else {
    return "Can't calculate"
  }
}

console.log(calculateTotalPrice(products,""))
console.log(calculateTotalPrice(products,"SALE20"))
console.log(calculateTotalPrice(products,"SALE50"))
