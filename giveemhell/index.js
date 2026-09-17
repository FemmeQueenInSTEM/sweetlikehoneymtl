import categories from "./categories.json";

let content = "";

Object.entries(categories).forEach(([category_id, category]) => {
  content += `<a href="./category?id=${category_id}">${category.name}</a>`;
});

document.getElementById("categoryLinks").innerHTML = content;
