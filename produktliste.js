window.addEventListener("DOMContentLoaded", henData);



const url = `https://kea-alt-del.dk/t7/api/products?limit=15`;
const skabelon = document.querySelector("template")
const container = document.querySelector("main")





function henData(){
fetch(url)
.then((res) => res.json())
.then((products) => showProducts(products));

}

function showProducts (products){
products.forEach ((product) => {
    console.log(product);
    const copy = skabelon.cloneNode(true);
    copy.querySelector("img").scr = `https://kea-alt-del.dk/t7/images/webp/640/$(product.id).webp`;
}
)
}




function showProducts (product){
    console.log(product);
    //fang template
const template = document.querySelector("#smallProductTemplate").contet;

    //lav en kopi
const copy = template.cloneNode(true)
    copy.querySelector("h2").textcontet=product.productdisplayname;
document.querySelector("main ").appendChild(copy);

if(product.udsolgt) {
    copy.querySelector("section").classlist.add(copy);
}

if(product.nedsat) {
    copy.querySelector("section").classlist.add(copy);
    copy.querySelector(".nedsat p ").textContet = Math.round(product.price - (product.price * product.nedsat) / 100);
    copy.querySelector(".nedsat p").textContet = product.nedsat;


}

copy.querySelector(".read-more").setAttribute("href" ,`product.html?id=` )
    //appende
    }
    
