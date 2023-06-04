import { isCompositeComponent } from "react-dom/test-utils";

function getCategories(products) {
    let allCategories = {}
    if (products !== undefined) {
        for(let i of products) {
            if (allCategories[i.categories[0].id] === undefined) {
                allCategories[i.categories[0].id] = i.categories[0];
            }
        }
 }
    return allCategories;
}




function sortCategoriesAndProducts(products) {
    if (products !== undefined) {
    let allCategories =  getCategories(products);
    for(let i of Object.keys(allCategories)) {
        let temp = allCategories[i];
        allCategories[i] = {};
        allCategories[i].category = temp;
        allCategories[i].products = [];
    }
    let categoryAndProducts = allCategories;
    for(let i =0; i<products.length; i++) {
        categoryAndProducts[products[i].categories[0].id].products.push(products[i])
        
    } 
   
    return categoryAndProducts;
  }

}

function objectToArray(object) {
    let array = []
    for(let i of Object.keys(object)) {
        array.push(object[i]);
    }
    return array;
}


const SortHelpers = {
    getCategories,
    sortCategoriesAndProducts,
    objectToArray
}
export default SortHelpers;