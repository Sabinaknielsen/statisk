window.addEventListener("DOMContentLoaded", henData);

const url = `https://kea-alt-del.dk/t7/api/products?limit=15`;
const skabelon = document.querySelector("template").content;
const container = document.querySelector("main")


function henData(){
fetch(url)
.then((res) => res.json())
.then((products) => showProducts(products));
}

function showProducts (products){
products.forEach ((product) => {
    const copy = skabelon.cloneNode(true)
    console.log(copy);

    copy.querySelector("h2").textcontet=product.productdisplayname;
    copy.querySelector("img").scr = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    
    if(product.udsolgt) {
        copy.querySelector("section").classlist.add(copy);
    }
    
    if(product.nedsat) {
        copy.querySelector("section").classlist.add(copy);
        copy.querySelector(".nedsat p ").textContet = Math.round(product.price - (product.price * product.nedsat) / 100);
        copy.querySelector(".nedsat p").textContet = product.nedsat;
        
        
    }
    
    copy.querySelector("a").setAttribute("href" ,`product.html?id=${product.id}` )
    //appende
    document.querySelector(".product-card").appendChild(copy);
}
)
}


