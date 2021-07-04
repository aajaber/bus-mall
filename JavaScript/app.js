
//=============================== Consts ===============
const imagesSection = document.getElementById('images-section');
const leftImage = document.getElementById('left-image');
const middleImage = document.getElementById('middle-image');
const rightImage = document.getElementById('right-image');
const resultsList = document.getElementById('results-list');
const selections = 25;

let counter = 0;
let leftImageIndex;
let rightImageIndex;
let middleImageIndex;
//================================= Constructor=========
function Product(name, sourcs) {
    this.name = name;
    this.sourcs = sourcs;
    this.selected = 0;
    this.shown = 0;
    Product.prodArray.push(this);
}
//========================= Objects Array ===============
Product.prodArray = [];
//========================== Created Objects =============
new Product('bag', '../images/bag.jpg');
new Product('banana', '../images/banana.jpg');
new Product('bathroom', '../images/bathroom.jpg');
new Product('boots', '../images/boots.jpg');
new Product('breakfast', '../images/breakfast.jpg');
new Product('bublegum', '../images/bubblegum.jpg');
new Product('chair', '../images/chair.jpg');
new Product('cthulhu', '../images/cthulhu.jpg');
new Product('dog-Duck', '../images/dog-duck.jpg');
new Product('dragon', '../images/dragon.jpg');
new Product('pen', '../images/pen.jpg');
new Product('pet-Sweep', '../images/pet-sweep.jpg');
new Product('scissors', '../images/scissors.jpg');
new Product('shark', '../images/shark.jpg');
new Product('sweep', '../images/sweep.png');
new Product('tauntaun', '../images/tauntaun.jpg');
new Product('unicorn', '../images/unicorn.jpg');
new Product('water-Can', '../images/water-can.jpg');
new Product('wine-Glass', '../images/wine-glass.jpg');

//   console.log(Product.prodArray);


function renderProducts() {
    leftImageIndex = generateRandomIndexNumber();
    middleImageIndex = generateRandomIndexNumber();
    rightImageIndex = generateRandomIndexNumber();

    // console.log(leftImageIndex);
    // console.log(middleImageIndex);
    // console.log(rightImageIndex);
    while (leftImageIndex === middleImageIndex || middleImageIndex === rightImageIndex || leftImageIndex === rightImageIndex) {
        leftImageIndex = generateRandomIndexNumber();
        middleImageIndex = generateRandomIndexNumber();
        rightImageIndex = generateRandomIndexNumber();
    }
    Product.prodArray[leftImageIndex].shown++;
    Product.prodArray[middleImageIndex].shown++;
    Product.prodArray[rightImageIndex].shown++;

    leftImage.src = Product.prodArray[leftImageIndex].sourcs;
    middleImage.src = Product.prodArray[middleImageIndex].sourcs;
    rightImage.src = Product.prodArray[rightImageIndex].sourcs;

    leftImage.alt = Product.prodArray[leftImageIndex].name;
    middleImage.alt = Product.prodArray[middleImageIndex].name;
    rightImage.alt = Product.prodArray[rightImageIndex].name;

    

}
renderProducts();

/*=====================Adding  a click listener==================*/

imagesSection.addEventListener('click', handler);

function handler(event) {
    counter++;

    console.log(event.target.id);
    if (selections >= counter) {
        if (event.target.id === 'left-image') {
            Product.prodArray[leftImageIndex].selected++;
        }
        else if (event.target.id === 'middle-image') {
            Product.prodArray[middleImageIndex].selected++;
        }
        else if (event.target.id === 'right-image') {
            Product.prodArray[rightImageIndex].selected++;
        }
        renderProducts();
    }
    else {
        showResults;
    }
}
//============================== Rendering result===================
function renderResult() {
    for (let i = 0; i < Product.prodArray.length; i++) {
        let listElement = document.createElement('li');
        resultsList.appendChild(listElement);
        listElement.textContent = `${Product.prodArray[i].name} had ${Product.prodArray[i].selected} and  was seen ${Product.prodArray[i].shown} times`
    }
    imagesSection.removeEventListener('click',handler);
    imagesSection.removeEventListener('click',handler);
}


function generateRandomIndexNumber() {
    return Math.floor(Math.random() * Product.prodArray.length);
}


function showResults(){
   renderResult();
  }