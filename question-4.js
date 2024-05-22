// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
let minQuantity = inventory[0].quantity;

for  (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < minQuantity) {
    minQuantity = inventory[i].quantity;
    console.log (`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[i].name} ซึ่งมี ${inventory[i].quantity} ชิ้น`)
  }
}