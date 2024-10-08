const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
-

function getProduct(){
    fetch(url)
    .then((res) => res.json())
    .then (showProduct)
}

/*
.then(Response=>Response.json())
.then(data=>showProduct(data));
*/
function showProduct(product) {
console.log(product);
document.querySelector(".productdetail h2").textContent=product.productdisplayname;
document.querySelector(".productdetail .brand").textContent=product.brandname;
document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

/*
Få skrevet færdig*/

getProduct ();

/*
"id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "basecolour": "Blue",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "parsed": 1,
  "soldout": 0,
  "relid": 1163,
  "price": 895,
  "discount": null,
  "variantname": "Roundneck Jersey",
  "brandname": "Nike",
  "brandbio": "Nike, creating experiences for today’s athlete",
  "brandimage": "http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg",
  "agegroup": "Adults-Men",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": "\u003Cp\u003E100% polyester\u003Cbr\u003EMachine wash\u003C/p\u003E",
  "sizefitdesc": null,
  "description": "\u003Cp\u003EBlue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest\u003Cbr\u003E\u003Cbr\u003EWarranty for manufacturing defects: 6 months (not valid on products with more than 20% discount)\u003Cbr\u003E\u003C/p\u003E",
  "styledesc": "\u003Cp\u003ECheer for the Indian cricket team on and off the fields in this blue polo neck jersey from Nike. "
