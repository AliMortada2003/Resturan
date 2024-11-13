const activeNav = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section"); // assuming each section has a unique id matching navbar links

// Function to update the active class on click
activeNav.forEach((link) => {
  link.onclick = function () {
    activeNav.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  };
});

// Function to update active class based on scroll position
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150; // adjust offset as needed

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      activeNav.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === section.id) {
          link.classList.add("active");
        }
      });
    }
  });
});


let head = document.getElementById("header");
window.onscroll=function(){
  if(window.scrollY>=692){
    head.classList.add("bgAbout");
    head.classList.remove("bg-dark");
  }
  else{
    head.classList.add("bg-dark");
    head.classList.remove("bgAbout");
  }
  if(window.scrollY>=2785){
    head.classList.add("ourMenu");
    head.classList.remove("bgAbout");
  }
  else{
    head.classList.add("bgAbout");
    head.classList.remove("ourMenu");
  }
  
}


let tab = document.querySelector(".tab-content");
console.log(tab);
const our_dishes = [
    {
      name: "Classic Margherita Pizza",
      description: "A timeless Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
      image: "images/menu/1.jpg",
      price: 12.99,
    },
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection with a side of seasonal vegetables.",
      image: "images/menu/6.jpg",
      price: 18.99,
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan.",
      image: "images/menu/2.jpg",
      price: 8.99,
    },
    {
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, and cheese on a toasted bun.",
      image: "images/menu/3.jpg",
      price: 10.99,
    },
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan.",
      image: "images/menu/4.jpg",
      price: 14.99,
    },
    {
      name: "Chicken Alfredo",
      description: "Grilled chicken breast over fettuccine pasta in a creamy Alfredo sauce.",
      image: "images/menu/5.jpg",
      price: 15.99,
    },
    {
      name: "Margarita Cocktail",
      description: "Refreshing cocktail with tequila, lime juice, and a salted rim.",
      image: "images/menu/7.jpg",
      price: 7.99,
    },
    {
      name: "Filet Mignon",
      description: "Tender, juicy filet mignon cooked to your preference.",
      image: "images/menu/8.jpg",
      price: 24.99,
    },
    {
      name: "Vegetable Stir-Fry",
      description: "A vibrant mix of seasonal vegetables stir-fried with soy sauce and ginger.",
      image: "images/menu/9.jpg",
      price: 11.99,
    },
    {
      name: "Tandoori Chicken",
      description: "Indian-spiced chicken grilled to perfection, served with naan and raita.",
      image: "images/menu/10.jpg",
      price: 13.99,
    },
    {
      name: "Shrimp Scampi",
      description: "Sautéed shrimp in a garlic and butter sauce over linguine.",
      image: "images/menu/11.jpg",
      price: 16.99,
    },
    {
      name: "Avocado Toast",
      description: "Smashed avocado on toasted sourdough, topped with cherry tomatoes and chili flakes.",
      image: "images/menu/12.jpg",
      price: 6.99,
    },
    {
      name: "BBQ Ribs",
      description: "Slow-cooked ribs smothered in BBQ sauce, served with fries.",
      image: "images/menu/13.jpg",
      price: 19.99,
    },
    {
      name: "French Onion Soup",
      description: "Rich, savory onion soup topped with a layer of melted Gruyère cheese.",
      image: "images/menu/14.jpg",
      price: 7.99,
    },
    {
      name: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a warm, gooey center, served with vanilla ice cream.",
      image: "images/menu/15.jpg",
      price: 8.99,
    },
    {
      name: "Pesto Pasta",
      description: "Penne pasta tossed in a homemade basil pesto sauce with pine nuts.",
      image: "images/menu/16.jpg",
      price: 13.99,
    },
    {
      name: "Greek Salad",
      description: "Fresh cucumbers, tomatoes, olives, and feta cheese with a tangy vinaigrette.",
      image: "images/menu/17.jpg",
      price: 9.99,
    },
    {
      name: "Chicken Tikka Masala",
      description: "Tender chicken in a creamy, spiced tomato sauce with basmati rice.",
      image: "images/menu/18.jpg",
      price: 14.99,
    },
    {
      name: "Seafood Paella",
      description: "A traditional Spanish rice dish with shrimp, mussels, and saffron.",
      image: "images/menu/19.jpg",
      price: 21.99,
    },
    {
      name: "Caprese Sandwich",
      description: "Mozzarella, tomatoes, and basil on ciabatta bread with balsamic glaze.",
      image: "images/menu/20.jpg",
      price: 8.99,
    },
    {
      name: "Beef Tacos",
      description: "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      image: "images/menu/21.jpg",
      price: 9.99,
    },
    {
      name: "Lobster Bisque",
      description: "Rich and creamy lobster soup with a hint of sherry.",
      image: "images/menu/22.jpg",
      price: 12.99,
    },
    {
      name: "Eggplant Parmesan",
      description: "Layers of breaded eggplant, marinara sauce, and melted mozzarella.",
      image: "images/menu/23.jpg",
      price: 11.99,
    },
    {
      name: "Steak Frites",
      description: "Grilled steak served with crispy French fries and herb butter.",
      image: "images/menu/24.jpg",
      price: 22.99,
    },
    {
      name: "Banh Mi",
      description: "Vietnamese sandwich with pork, pickled vegetables, and cilantro on a baguette.",
      image: "images/menu/25.jpg",
      price: 8.99,
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with a variety of mushrooms and Parmesan cheese.",
      image: "images/menu/26.jpg",
      price: 14.99,
    },
    {
      name: "Korean BBQ Chicken Wings",
      description: "Crispy wings coated in a sweet and spicy Korean BBQ sauce.",
      image: "images/menu/27.jpg",
      price: 10.99,
    },
    {
      name: "Pad Thai",
      description: "Thai stir-fried noodles with shrimp, tofu, bean sprouts, and peanuts.",
      image: "images/menu/28.jpg",
      price: 13.99,
    },
    {
      name: "Vegetarian Burrito",
      description: "A flour tortilla filled with rice, beans, veggies, and guacamole.",
      image: "images/menu/29.jpg",
      price: 9.99,
    },
    {
      name: "Cheesecake",
      description: "Classic New York-style cheesecake with a graham cracker crust.",
      image: "images/menu/30.jpg",
      price: 7.99,
    },
  ];
create_new_item=(name,discription,image,price)=>{
    return`
        <div class="col-lg-6 col-md-12 ">
          <div class="d-flex align-items-center ">
              <img class="flex-shrink-0 img-fluid rounded anim" src="${image}" alt="" style="width: 80px;">
              <div class="w-100 d-flex flex-column text-start ps-4">
                  <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span >${name}</span>
                      <span class="text-warning anim">${price}$</span>
                  </h5>
                  <small class="fst-italic">${discription}</small>
              </div>
          </div>
      </div>
    `
}
our_dishes.map((ele)=>{
    tab.innerHTML+=create_new_item(ele.name,ele.description,ele.image,ele.price);
})



// animation using scroll reval 
ScrollReveal().reveal('.anim', {
  duration: 1000,  // Animation duration in ms
  origin: 'top', // The starting point (top, bottom, left, right)
  distance: '100px', // How far the element will move during the animation
  easing: 'ease-in-out', // Animation easing
  reset:true // Choose whether animations should reset when scrolling back
});

ScrollReveal().reveal('.heading-section ', {
  duration: 1000,
  origin: 'left', // Start from the left
  distance: '100px', // Move 100px from the left
  easing: 'ease-out',
  reset : true,
});
ScrollReveal().reveal('.leftAnim', {
  duration: 1000,
  origin: 'left', // Start from the left
  distance: '60px', // Move 100px from the left
  easing: 'ease-out',
  reset : true,
});
ScrollReveal().reveal('.righAnim', {
  duration: 1000,
  origin: 'right', // Start from the left
  distance: '50px', // Move 100px from the left
  easing: 'ease-out',
  reset : true,
});
ScrollReveal().reveal('.topanim', {
  duration: 1000,
  origin: 'top', // Start from the left
  distance: '50px', // Move 100px from the left
  easing: 'ease-out',
  reset : true,
});
