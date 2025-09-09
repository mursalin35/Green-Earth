const allCategori = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => displayAllTrees(data.categories));
};
// Spinner
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("all-card").classList.add("hidden");
    } else {
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("all-card").classList.remove("hidden");
    }
};

// Remove Active
const removeActive = () => {
    const categoriesBtns = document.querySelectorAll(".categoriesBtn");
    categoriesBtns.forEach((btn) => btn.classList.remove("active"));
};

//  Click Button Active
const clickBtn = (id) => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            removeActive();
            const clickBtn = document.getElementById(`category-btn-${id}`);
            // console.log(clickBtn)
            clickBtn.classList.add("active");
            displayCategories(json.plants);
        });
};

// popup massage show 
function popup() {
    alert("Calling tree has been added to the cart")
}



// lodeTreeDetail Card Details
const lodeTreeDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayDetails(details.plants);
};
// Display Card Details
const displayDetails = (detail) => {
    // console.log(detail)
    const detailsBox = document.getElementById("detail-container");
    detailsBox.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-white p-4 rounded-lg text-[0.8rem]">
          <h1 class="text-xl font-bold mb-2">${detail.name}</h1>
                 <div class="my-5">
                    <img src="${detail.image}" class="rounded-lg h-[220px] w-full object-cover mx-auto" alt="">
                 </div>
                 <h1 class="border-none text-[#15803D] font-semibold mt-2"><span class="text-base font-bold text-black">Category : </span>${detail.category}</h1>
                 <p class="text-sm mt-2"><span class="text-base font-bold">Price :</span> ৳ ${detail.price}</p>
                 <div class="space-y-2 mt-2">
                    <p><span class="text-base font-bold">Description : </span>${detail.description}</p>
                 </div>
            </div>
        `;
    detailsBox.appendChild(div);

    document.getElementById("my_modal_5").showModal();
};

// Click ALl Categories Card 1 by 1
const displayCategories = (plants) => {
    const plantsCard = document.getElementById("allCards");
    plantsCard.innerHTML = "";
    plants.forEach((plant) => {
        // console.log(plant);
        const div = document.createElement("div");
        div.innerHTML = `

   <div class=" call bg-white rounded-xl shadow-md p-6 md:p-4 h-full">
          <div class=" rounded-lg mb-3">
            <img src="${plant.image}" class="rounded-lg h-48 md:h-40  w-full  object-cover mx-auto" alt="">
          </div>

          <div>
            <button class="cursor-pointer font-bold text-lg md:text-sm text-gray-800 hover:text-green-700"
                  onclick="lodeTreeDetail(${plant.id})">${plant.name}
              </button>
                <p class="opacity-70 mt-1 md:text-[0.7rem]">${plant.description}</p>
          </div>

     
          <div class="flex items-center justify-between mt-3 md:mt-2 ">
            <button
              class="btn text-base bg-green-100 text-green-700 px-4 md:px-3 h-7 md:h-5 rounded-full md:text-[0.7rem]">
                  ${plant.category}
            </button>

              <p class="text-gray-800 font-semibold  text-base md:text-[0.8rem]">৳ <span>${plant.price}</span>
              </p>
          </div>

            <button  onclick="lodePrice('${plant.name}', ${plant.price}), popup()" 
              class="btn w-full md:text-sm bg-green-600 hover:bg-green-700 text-white h-9 md:h-7 mt-5 md:mt-3 rounded-full transition text-base md:text-[0.7rem] font-semibold"> Add to Cart
            </button>

    </div>
    
        `;
        plantsCard.appendChild(div);
    });
    manageSpinner(false);
};

//

const displayAllTrees = (trees) => {
    const treesCard = document.getElementById("categotis");
    treesCard.innerHTML = "";
    trees.forEach((tree) => {
        // console.log(tree)
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="category-btn-${tree.id}" onclick="clickBtn(${tree.id})" class="categoriesBtn w-full pl-2 py-1 text-start text-sm text-[0.8rem] font-semibold hover:text-white hover:bg-[#19b151] rounded-md cursor-pointer transition-all">${tree.category_name}</button>
        `;
        treesCard.appendChild(div);
    });
};
allCategori();



// ALlCards
const allCards = () => {
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((json) => displayAllCards(json.plants));
};



// AllCards Full


const displayAllCards = (plants) => {
    const plantsCard = document.getElementById("allCards");
    plantsCard.innerHTML = "";
    plants.forEach((plant) => {
        // console.log(plant);
        const div = document.createElement("div");
        div.innerHTML = `
    
        <div class=" call bg-white rounded-xl shadow-md p-6 md:p-4 h-full">
          <div class=" rounded-lg mb-3">
            <img src="${plant.image}" class="rounded-lg h-48 md:h-40  w-full  object-cover mx-auto" alt="">
          </div>

          <div>
            <button class="cursor-pointer font-bold text-lg md:text-sm text-gray-800 hover:text-green-700"
                  onclick="lodeTreeDetail(${plant.id})">${plant.name}
              </button>
                <p class="opacity-70 mt-1 md:text-[0.7rem]">${plant.description}</p>
          </div>

     
          <div class="flex items-center justify-between mt-3 md:mt-2 ">
            <button
              class="btn text-base bg-green-100 text-green-700 px-4 md:px-3 h-7 md:h-5 rounded-full md:text-[0.7rem]">
                  ${plant.category}
            </button>

              <p class="text-gray-800 font-semibold  text-base md:text-[0.8rem]">৳ <span>${plant.price}</span>
              </p>
          </div>

            <button  onclick="lodePrice('${plant.name}', ${plant.price}), popup()" 
              class="btn w-full md:text-sm bg-green-600 hover:bg-green-700 text-white h-9 md:h-7 mt-5 md:mt-3 rounded-full transition text-base md:text-[0.7rem] font-semibold"> Add to Cart
            </button>

    </div>

        `;



        plantsCard.appendChild(div);
    });
    manageSpinner(false);
};
const allTreesBtn = () => {
    removeActive();
    allCards();
    const categoriesBtn = document.getElementById("categoriesBtn");
    categoriesBtn.classList.add("active");
};

// Total calculate Card
let total = 0;
const lodePrice = (name, price) => {
    const yourCard = document.getElementById("yourCard");
    const spanTotal = document.getElementById("spnTotal");
    const div = document.createElement("div");
    // alert("Add Cart");
    div.innerHTML = `
    <div class="bg-[#F0FDF4] flex justify-between  md:text-[0.7rem] lg:p-1.5 px-4 py-2  rounded-md border-[0.5px] border-gray-100 items-center  md:mt-2 mt-3">
      <div>
        <h4 class="font-semibold">${name}</h4>
        <p class="mt-2 text-gray-400">৳<span id="itemPrice"> ${price}</span> × 1</p>
      </div>

      <div class="opacity-70 text-gray-500 hover:text-red-500 cursor-pointer">
        <i class="fa-solid fa-xmark"></i>
      </div>
          
  </div>

    `;
    // Total add price
    total += price;
    spanTotal.innerText = total;
    div.querySelector("i").addEventListener("click", function () {
        div.remove();
        // total remove
        total -= price;
        spanTotal.innerText = total;
    });
    yourCard.appendChild(div);
    // console.log(name)
};

allCards();
