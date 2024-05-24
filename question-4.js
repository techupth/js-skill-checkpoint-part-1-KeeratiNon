// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
let minQuantity = Infinity;
let nameOfMinQuantity = ""

for  (let key in inventory) {
  // console.log(inventory[key]);
  if (inventory[key].quantity < minQuantity) {
    minQuantity = inventory[key].quantity;
    nameOfMinQuantity = inventory[key].name;
  }
}
console.log (`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameOfMinQuantity} ซึ่งมี ${minQuantity} ชิ้น`)