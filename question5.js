// Section C: Reduction and Aggregation
// Question 5: Shopping Cart Calculations

const cartItems = [
  { name: "T-shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];



// a) Calculate the total cost of all items
const totalcost = cartItems.reduce((sum , current)=>{
      return sum + current.price; 
}, 0 )
console.log(totalcost);

// b) Find the most expensive single item
const mostExpensiveItem = cartItems.reduce(function (max, item) {
  if (item.price > max.price) {
    return item;
  } else {
    return max;
  }
});

console.log("Most Expensive Item:", mostExpensiveItem);

// c) Count the total number of items in the cart

const totalitems = cartItems.reduce((sum, item)=>{
    return sum + item.quantity; 
}, 0 )

console.log(totalitems);

// d) Create a summary object with totalItems, totalCost, and averageItemPrice

const summary = cartItems.reduce(function (total, item) {
  total.items = total.items + item.quantity;
  total.cost = total.cost + (item.price * item.quantity);
  return total;
}, { items: 0, cost: 0 });

summary.average = summary.cost / summary.items;

console.log(summary);

// e) Find the item with the highest total value (price × quantity)

const hightotal = cartItems.reduce((total,item)=>{

      return total = item.price * item.quantity; 
}, 0 )

console.log(hightotal);