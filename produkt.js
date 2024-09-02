fetch("https://kea-alt-del.dk/t7/api/products/1163")
.then(Response=>Response.json())
.then(data=>showProduct(data));


function showProduct(product){
console.log(product);


}