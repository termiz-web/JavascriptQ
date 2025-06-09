// Question 2: E-commerce Product Catalog


const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
];


// a) Create a new array with prices converted to include a 10% tax
const Taxonproduct = products.map(function (product){
    return {
        ...product , 
        Tax : product.price + product.price * 0.10 
    }; 
})

console.log(Taxonproduct);

// b) Generate an array of product summaries in the format: "Product: [name] - $[price] ([category])"
const productSummaries = products.map(product => 
  `Product: ${product.name} - $${product.price} (${product.category})`
);

console.log(productSummaries);
// c) Create a new array where each product has a "discountPrice" property (20% off original price)

const DissProducts = products.map(function(product) {
  return {
    ...product,
    DiscountonProduct : product.price * 0.80
  };
});

console.log(DissProducts);
