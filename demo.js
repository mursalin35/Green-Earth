const cataroriContainer = document.getElementById('cataroriContainer')


const loadCategori = () => {

    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.categories)

           
            showCategori(data.categories)

        })

        .catch((err) => console.log(err))

};

const showCategori = () => {
    categories.forEach(cat => {
        console.log(cat.category_name)

        cataroriContainer.innerHTML += `
                    <button class="pl-2 py-1 text-start hover:text-white focus:text-white hover:bg-[#19b151] focus:bg-[#15803D] rounded-md cursor-pointer transition-all">${cat.category_name}</button>
                
                `
    });
}

loadCategori()
