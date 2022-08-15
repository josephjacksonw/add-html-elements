// we need to build a ul with 2 lis, an h2, and an a
window.addEventListener("load", function() {
//const body = document.querySelectior.body
console.log(document.body)
const header = document.querySelector("h1");
header.remove();
//console.log("hi tv");
const h1Element = document.createElement("h1");
h1Element.append("Webpage Recreation Practice");
console.log(h1Element)
document.body.append(h1Element);

const p1 = document.createElement("p");
p1.append("The HTML of this webpage was created with JavaScript.");
document.body.append(p1)

const img = document.createElement("img");
img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
img.style = "width:50%";
document.body.append(img);

const h1Element2 = document.createElement("h1");
h1Element2.append("Facts about the Multicolored Tanager");
document.body.append(h1Element2);

//ul goes here
const ul = document.createElement("ul");

const liOne = document.createElement("li");
const liTwo = document.createElement("li");
liOne.append("It is endemic to the mountains of Colombia.")
liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
ul.append(liOne, liTwo);
document.body.append(ul);






//h2 goes here
const h2Element = document.createElement("h2");
h2Element.append("Source");
document.body.append(h2Element);



// a goes here
const a = this.document.createElement("a");
a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
a.innerText = "Wikipedia"
document.body.append(a)
})