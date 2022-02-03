const listRef = document.querySelector('#categories');
const categoriesList = [...listRef.children];
const categoryAmount = categoriesList.length;

const categoryName = category => category.firstElementChild.textContent;
const categoryElementsQuantity = category =>
  category.lastElementChild.children.length;

const categoryLog = category => {
  console.log(`Category: ${categoryName(category)}`);
  console.log(`Elements: ${categoryElementsQuantity(category)}`);
};

console.log(`Number of categories: ${categoryAmount}`);
categoriesList.forEach(categoryLog);
