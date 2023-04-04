let label = document.getElementById("label");

let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <div class="cart-container">
          <div class="cart-item-img">
            <img style="width:100%;" src=${search.img} alt="" />
          </div>
          <div class="details-cart">
            <div class="title-price-x">
                <h5 style="padding:0;">
                  <p style="padding:0;">${search.name}</p>
                  <p style="padding:0;" class="cart-item-price">${numbWithComma(search.price)} đ</p>
                </h5>              
            </div>
            <div style="display:flex; flex-direction: column; justify-content:center;">
              <div class="buttons" style="align-items: center; justify-content: end">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
              <div style="min-width: 30%; display:flex; align-items: center; justify-content: end; text-align:right;">
                <h4 style="padding:0; white-space:nowrap">
                  ${numbWithComma(item * search.price)} đ
                </h4>
              </div>         
            </div>
          </div>
        </div>
        <div style="display: flex; min-width:10%; align-items: center; justify-content: center;">
          <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>        
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Giỏ hàng trống</h2>
    <a href="./home.html">
      <button class="HomeBtn">Về trang chủ</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <div style="display:flex; justify-content:center; flex-wrap:wrap;">
      <h2 style="white-space:nowrap;">Tổng đơn hàng : </h2>
      <h2 style="white-space:nowrap;">${numbWithComma(amount)} đ</h2>
    </div>
    <button class="checkout">Thanh toán</button>
    <button onclick="clearCart()" class="removeAll">Xóa giỏ hàng</button>
    `;
  } else return;
};

TotalAmount();