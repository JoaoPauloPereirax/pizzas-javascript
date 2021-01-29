const selec = (el) => document.querySelector(el);
const selecAll = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = selec(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.closest(".pizza-item").getAttribute("data-key");

    selec(".pizzaBig img").src = pizzaJson[key].img;
    selec(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    selec(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    selec(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[
      key
    ].price.toFixed(2)}`;

    selecAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    selec(".pizzaWindowArea").style.opacity = 0;
    selec(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      selec(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  selec(".pizza-area").append(pizzaItem);
});
