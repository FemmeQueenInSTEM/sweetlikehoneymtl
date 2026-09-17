import categories from "./categories.json";

const category_id =
  new URLSearchParams(document.location.search).get("id") ?? "";

const categoryNameEl = document.getElementById("categoryName");
categoryNameEl.innerHTML = categories[category_id].name;

let descriptionContent = "";
categories[category_id].description.forEach((stanza) => {
  descriptionContent += `<p>${stanza}</p>`;
});

const descriptionEl = document.getElementById("categoryDescription");
descriptionEl.innerHTML = descriptionContent;

let lookbookContent = "";
categories[category_id].lookbook.forEach((look) => {
  lookbookContent += `<img src="${look}"/>`;
});

const lookbookEl = document.getElementById("lookbook");
lookbookEl.innerHTML = lookbookContent;
