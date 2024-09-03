window.addEventListener("DOMContentLoaded", henData);



const url = `https://kea-alt-del.dk/t7/api/products?limit=15`;
const skabelon = document.querySelector("template")
const container = document.querySelector("main")



    fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
.then(showProducts)

function henData(){
fetch(url)
.then((res) => res.json())
.then((products)) => visProdukter(products));
}
function showProducts (products){
//Looper og kalder showProduct
products.forEach(showProducts)
}



function showProducts (product){
    console.log(product);
    //fang template
const template = document.querySelector("#smallProductTemplate").content;

    //lav en kopi
const copy = template.cloneNode(true)
    copy.querySelector("h2").textcontet=product.productdisplayname;
document.querySelector("main ").appendChild(copy);
if(product.soldout) {
    copy.querySelector("section").classlist.add(copy);
}

copy.querySelector(".read-more").setAttribute("href" ,`product.html?id=` )
    //appende
    }
    
