

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
const template = document.querySelector("#smallProductTemplate").content;
    //lav en kopi
const copy = template.cloneNode(true)
    //ændre indhold
    copy.querySelector("h2").textcontet=product.productdisplayname;
document.querySelector("main .product-grid").appendChild(copy);
if(product.soldout) {
    copy.querySelector("section").classlist.add(copy);
}

copy.querySelector(".read-more").setAttribute("href" ,`product.html?id=` )
    //appende
    }
    
