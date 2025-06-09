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
console.log("Total cost of all items : " , totalcost);


// b) Find the most expensive single item
const mostexpensive = cartItems.reduce((sum , item)=>{
    if(sum.price > item.price){
      return sum ; 
    }
    else{
      return item ; 
    }
})

console.log(`Most Expensive Item : ${mostexpensive.name} --> ${mostexpensive.price}`);


// c) Count the total number of items in the cart
const totalitems = cartItems.reduce((sum, item)=>{
    return sum + item.quantity; 
}, 0 )

console.log(`Total number of items in cart : ${totalitems}`);

// d) Create a summary object with totalItems, totalCost, and averageItemPrice
const summary = cartItems.reduce(function (total, item) {
  total.items = total.items + item.quantity;
  total.cost = total.cost + (item.price * item.quantity);
  return total;
}, { items: 0, cost: 0 });

summary.average = summary.cost / summary.items;

console.log(summary);


// e) Find the item with the highest total value (price × quantity)
const highestValueItem = cartItems.reduce((maxItem, currentItem) => {
  const maxValue = maxItem.price * maxItem.quantity;
  const currentValue = currentItem.price * currentItem.quantity;

  if (currentValue > maxValue) {
    return currentItem;
  } else {
    return maxItem;
  }
});

console.log("Item with highest total value:", highestValueItem);
