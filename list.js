document.addEventListener("DOMContentLoaded", () => {
    const addItemButton = document.querySelector(".btn.btn-primary");
    const removeItemsButton = document.querySelector(".btn.btn-light");
    const itemList = document.getElementById("my-list");
    const template = document.getElementById("list-template");

    if (addItemButton) {
        addItemButton.addEventListener("click", event => {
            const total = itemList.childElementCount + 1;
            const clone = template.content.cloneNode(true);
            clone.querySelector("[data-id='number']").textContent = `${total}`;
            clone.querySelector("[data-id='title']").textContent = "Product";
            clone.querySelector("[data-id='content']").textContent = "It's a new item";
            itemList.appendChild(clone);
        });
    }

    if (removeItemsButton) {
        removeItemsButton.addEventListener("click", event => {
            itemList.replaceChildren();
        });
    }
});
