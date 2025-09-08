

// const caragori = () => {
//     fetch("https://openapi.programming-hero.com/api/categories") // promise of responsive
//         .then(res = res => res.json()) // promise of json data
//         // .then(json => console.log(json))
//         .then(json => displayC(json));
// };


// const displayC = (dCatagori) => {
//     // console.log(dCatagori);-----------------------

//     // 1. get the container & empty
//     const categoriContainer = document.getElementById("catarori-container")
//     categoriContainer.innerHTML = '';

//     // 2. get into every dCatagori
//     for (let catarori of dCatagori) {
//         console.log(caragori);

//         //         3. create Element 
//         const pTag = document.createElement("p");
//         pTag.innerHTML = ` <p> ${caragori.categories} </p> `

//         //         4. append into container
//         categoriContainer.append()

//     };

// }


// caragori();


const cataroriContainer = document.getElementById('cataroriContainer')


const loadCategori = () => {

    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.categories)

            const categories = data.categories;
            categories.forEach(cat => {
                console.log(cat.category_name)

                cataroriContainer.innerHTML += `
                    <button class="pl-2 py-1 text-start hover:text-white focus:text-white hover:bg-[#19b151] focus:bg-[#15803D] rounded-md cursor-pointer transition-all">${cat.category_name}</button>
                
                `

            });
        })

        .catch((err) => console.log(err))

};

loadCategori()



/*
// Alternet calling function 
const loadCategori = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/categories');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

loadCategori()
*/









