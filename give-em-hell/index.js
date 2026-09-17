import categories from "./categories.json";

let content = "";

Object.entries(categories).forEach(([category_id, category]) => {
  content += `<a href="./category?id=${category_id}">${category.name}</a>`;
});

document.getElementById("categoryLinks").innerHTML = content;

function scrollToCategories() {
  const categoryArea = document.getElementById("categories");
  categoryArea.scrollIntoView({ behavior: "smooth" });
}

document
  .getElementById("descendButton")
  .addEventListener("click", scrollToCategories);
