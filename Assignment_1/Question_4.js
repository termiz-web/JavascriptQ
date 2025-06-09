// Question 4: Sales Data Analysis


const salesData = [
  { month: "Jan", sales: 15000, region: "North" },
  { month: "Feb", sales: 18000, region: "South" },
  { month: "Mar", sales: 22000, region: "North" },
  { month: "Apr", sales: 19000, region: "East" },
  { month: "May", sales: 25000, region: "West" },
  { month: "Jun", sales: 21000, region: "South" }
];


// a) Filter months where sales exceeded $20,000
const salesfilter = salesData.filter((data)=>{
    return data.sales>20000; 
}).map((data)=>{
    return data.month; 
})

console.log(salesfilter);


// b) Find the first month where sales were below $20,000
const salesfilter2 = salesData.find((data)=>{
    return data.sales<20000; 
})

console.log(salesfilter2);

// c) Check if any region had sales above $24,000
const regioncheck = salesData.some((data)=>{
    return data.sales>24000 ; 
})

console.log(regioncheck);
// d) Verify if all months had sales above $10,000

const allsalescheck = salesData.every((data)=>{
   return data.sales>10000; 
})
console.log(allsalescheck);