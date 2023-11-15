let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

let btnpromt1 = document.getElementById("btnpromt")
function prompt() {
   alert("login seccess full")
}

// Swiper for vehchile

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// swiper for Insurance Section & featured prodect section

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// swiper for review 
var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Json Featured Product

let featuredProduct = [
{
  img:"./bankImages/tpl.jpg",
  title:"TPL",
  para:"Insurance",
  modalid:"modaltpl.html"
},
{
  img:"./bankImages/ins1.png",
  title:"IGI",
  para:"Insurance",
  modalid:"modaligi.html"
},
{
  img:"./bankImages/alf.png",
  title:"ALFALAH",
  para:"Insurance",
  modalid:"modalalf.html"
},


] 
let featuredProduct2 = [
 
  {
    img:"./bankImages/adamjeeIns.png",
    title:"Adamjee Company ",
    para:"Insurance",
    modalid:"modaladamjee.html"
  },
  {
    img:"./bankImages/ubl.png",
    title:"UBL Insurance",
    para:"Limited",
    modalid:"modalubl.html"
  },
  {
    img:"./bankimages/askari.png",
    title:"ASKARI",
    para:"Insurance",
    modalid:"modalaask.html"
    },
  
  ] 
let featured = document.querySelector(".ars")
let featured2 = document.querySelector(".fea2")

for (let i = 0; i < featuredProduct.length; i++) {
 featured.innerHTML+= `
 

  <div class="swiper-slide box">
  <img src="${featuredProduct[i].img}" alt="">
  <div class="content">
      <h3>"${featuredProduct[i].title}" <p>"${featuredProduct[i].para}"</p></h3>
      <a href="${featuredProduct[i].modalid}" class="btn">GO</a>
  </div>
 </div>
  `
 
  
}
for (let i = 0; i < featuredProduct2.length; i++) {
  featured2.innerHTML+= `
  <div class="swiper-slide box">
  <img src="${featuredProduct2[i].img}" alt="">
  <div class="content">
      <h3>"${featuredProduct2[i].title}" <p>"${featuredProduct2[i].para}"</p></h3>
      <a href="modaligi.html" class="btn">GO</a>
  </div>
 </div>
  `
   
 }

// icon card apply Through Json
 let iconCards = [

  {
    h3:"100+",
    p:"Branches",
    i:"fas fa-home",
    },
  {
  h3:"3500+",
  p:"cars sold",
  i:"fas fa-car",
},
{
h3:"600+",
p:"happy clients",
i:"fas fa-users",
},
{
h3:"1300+",
p:"new cars",
i:"fas fa-car",
},

 ]

 let icon = document.querySelector(".icons-container")

 for (let i = 0; i < iconCards.length; i++) {
  icon.innerHTML+= `
  <div class="icons">
        <i class="${iconCards[i].i}"></i>
        <div class="content">
            <h3>${iconCards[i].h3}</h3>
            <p>${iconCards[i].p}</p>
        </div>
    </div>
  `
  
 }

 let carProducts = [
{
img:"./Civivc Car Images/car-6.png",
h3:"Honda Civic",
span:"620000pkr/- ",
condition:"Used",
model:"2022",
automatic:"Automatic",
enginetype:"petrol",
speed:"212kmph",
},
{
  img:"./Toyyota Car Imgaes/Corolla-X-Cars.jpg",
  h3:"Toyyota Corrolla",
  span:"530000pkr/-  ",
  condition:"Used",
  model:"2022",
  automatic:"Automatic",
  enginetype:"petrol",
  speed:"200kmph",
  },
  {
    img:"./Suzuki Car Images/suzuki-wagon-r-percent-smk-mojo-222-removebg-preview.png",
    h3:"Suzuki Wagon ",
   span:"250000pkr/-",
    condition:"Used",
    model:"2022",
    automatic:"Manual",
    enginetype:"petrol + CNG",
    speed:"150+",
    },
    {
      img:"./Suzuki Car Images/suzuki_swift-removebg-preview (1).png",
      h3:"Suzuki Swift",
      span:"320000pkr/- ",
      condition:"New",
      model:"2023",
      automatic:"Manual ",
      enginetype:"petrol",
      speed:"160+",
      },
      {
        img:"./Toyyota Car Imgaes/fartunure.png",
        h3:"Fortuner",
        span:"40000000pkr/- ",
        condition:"Used",
        model:"2023",
        automatic:"Automatic",
        enginetype:"petrol",
        speed:"200+",
        },
        {
          img:"./Ford Card Images/2020_Ford_Ranger.jpg",
          h3:"Ford",
          span:" 10230000pkr/-",
          condition:"Used",
          model:"2020",
          automatic:"Automatic",
          enginetype:"petrol",
          speed:"170+",
          },
 ]

let carSlider= document.querySelector(".carSlider")


// for (let j = 0; j < carProduct.length; j++) {
//   carSlider.innerHTML+=`
//   <div class="swiper-slide box">
//                 <img src="${carProduct[j].img}" alt="">
//                 <div class="content">
//                     <h3>${carProduct[j].h3}</h3>
//                     <div class="price"> <span>price : </span>${carProduct[j].span} </div>
//                     <p>
//                        <span> ${carProduct[j].condition} </span>
//                         <span class="fas fa-circle"></span> ${carProduct[j].model}
//                         <span class="fas fa-circle"></span> ${carProduct[j].automatic}
//                         <span class="fas fa-circle"></span> ${carProduct[j].enginetype}
//                         <span class="fas fa-circle"></span> ${carProduct[j].speed}
//                     </p>
                   
//                         <button class="btn"> <a href="./buy.html">Buy Now</a></button>
                    
//                 </div>
//             </div>
  
  
//   `
  
// }



let container = document.querySelector(".carSlider");
let searchBar = document.getElementById("searchBar");

function handleSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredcarProduct = carProducts.filter(carProduct => carProduct.h3.toLowerCase().includes(searchTerm));
    rendercarProduct(filteredcarProduct);
}

function rendercarProduct(carProducts) {
    container.innerHTML = ""; 

    for (let index = 0; index < carProducts.length; index++) {
        container.innerHTML += `
        <div class="swiper-slide box">
        <img src="${carProducts[index].img}" alt="">
        <div class="content">
            <h3>${carProducts[index].h3}</h3>
            <div class="price"> <span>price : </span>${carProducts[index].span} </div>
            <p>
               <span> ${carProducts[index].condition} </span>
                <span class="fas fa-circle"></span> ${carProducts[index].model}
                <span class="fas fa-circle"></span> ${carProducts[index].automatic}
                <span class="fas fa-circle"></span> ${carProducts[index].enginetype}
                <span class="fas fa-circle"></span> ${carProducts[index].speed}
            </p>
            <a class="btn" href="./location.html">Find Dealer</a>
                
            
        </div>
    </div>


`
    }
}

rendercarProduct(carProducts);







