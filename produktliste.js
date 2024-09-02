


const skabelon = document.querySelector("template").content;
const container = document.querySelector("main").content;


    fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
.then(showProducts)


function showProducts (products){
//Looper og kalder showProduct
products.forEach(showProducts)
}
function showProducts (product){
    console.log(product);
    //fang template
const template = document.querySelector("smallProductTemplate").content;
    //lav en kopi
const copy = template.cloneNode(true)
    //ændre indhold
    copy.querySelector("h3").textcontet=product.productdisplayname;
document.querySelector("main").appendChild(copy);
if(product.soldout) {
    copy.querySelector("arcticle").classlist.add(copy);
}
    //appende
    }
    
