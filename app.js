//Local Data
const menu = [
  {
    id: 1,
    title: "Pancake",
    category: "breakfast",
    price: "$15",
    img: "./images/breakfast/pancake.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 2,
    title: "Fried Egg",
    category: "breakfast",
    price: "$10",
    img: "./images/breakfast/fried-egg.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 3,
    title: "French Toast",
    category: "breakfast",
    price: "$12.5",
    img: "./images/breakfast/french-toast.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 4,
    title: "Burger",
    category: "lunch",
    price: "$19.99",
    img: "./images/lunch/burger.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 5,
    title: "Sandwich",
    category: "lunch",
    price: "$14",
    img: "./images/lunch/sandwich.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 6,
    title: "Macaroni and Cheese",
    category: "lunch",
    price: "$21.5",
    img: "./images/lunch/macaroni.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 7,
    title: "Spagetti",
    category: "dinner",
    price: "$17.99",
    img: "./images/dinner/spagetti.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 8,
    title: "Steak",
    category: "dinner",
    price: "$32.5",
    img: "./images/dinner/steak.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 9,
    title: "Sushi",
    category: "dinner",
    price: "$27.5",
    img: "./images/dinner/sushi.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 10,
    title: "Ice Cream",
    category: "dessert",
    price: "$13.99",
    img: "./images/dessert/icecream.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 11,
    title: "Cheesecake",
    category: "dessert",
    price: "$14.5",
    img: "./images/dessert/cheesecake.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
  {
    id: 12,
    title: "Chocolate Cake",
    category: "dessert",
    price: "$20",
    img: "./images/dessert/c-cake.jpg",
    desc: "lorem ipsum dolor sit amet consectetur consectetur adip ex ea commodo consequ velit sed diam nonumy eirmod tempor inviduer",
  },
];

//SELECT ITEM
const menuAll = document.querySelector(".section-center");

//btns
const filterBtns = document.querySelectorAll(".filter-btn");

//datamızda map ile alıyoruz ve gerekli yerleri replace ediyoruz
//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    //htmldeki datayı çek
    const categories = e.currentTarget.dataset.category;
    //filter methodu ile category(arraydeki) data-category ie aynıysa getirmek
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === categories) {
        return menuItem;
      }
    });
    //categoriese göre ekranımıza istenilenleri getir
    if (categories === "all") {
      //hepsi yani btün arrayimiz
      displayMenuItems(menu);
      //belirli yani filter yaptığımız array
    } else {
      displayMenuItems(menuCategory);
    }

    btnsCategoryClick(e);
  });
});

//kategori neyse o buton yansın
function btnsCategoryClick(btnClick) {
  filterBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  //kategoriye göre buton active kalsın
  btnClick.currentTarget.classList.add("active");
}

//load all item for DOMContentLoaded
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
                <img src=${item.img}
                    class="photo" alt="">
                <div class="item-info">
                    <header>
                        <h4 class="item-name">${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
  });
  //join one string
  displayMenu = displayMenu.join(""); //iki article arasındaki virgülleri kaldırdık
  //added our date (parent)
  menuAll.innerHTML = displayMenu;
}
