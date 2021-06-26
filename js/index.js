// ITERATION 1

function updateSubtotal(product) {
  /*console.log('Calculating subtotal, yey!');*/

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');
  console.log("functionWorking")

  const priceValue = priceElement.innerText;
  const quantityValue = quantityElement.value;

  const subtotal = priceValue * quantityValue;

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const allProductsElements = document.querySelectorAll(".product");
  console.dir(allProductsElements);
  /*for (let i = 0; i < allProductsElements.length -1; i++ ){
    updateSubtotal(allProductsElements[i])*/
    let subtotal = 0;
    allProductsElements.forEach((product) => {
      subtotal += updateSubtotal(product)
    });
  console.log(subtotal);

  // ITERATION 3
  //... your code goes here
  const allSubtotalElements = document.querySelectorAll(".subtotal");
  const allTotalElement = document.querySelector ("#total-value span") 
  /*let total = 0;
   total += allSubtotalElements;
   return total;*/
   allTotalElement.innerText = subtotal;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
