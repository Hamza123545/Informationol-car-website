var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  }, {
    "id": 1,
    "title": "Mercedes Benz",
    "price": 12000000,
    "description": "Mercedes-Benz A-Class (subcompact executive hatchbacks and sedans) Mercedes-Benz B-Class (subcompact executive Tourers) Mercedes-Benz C-Class (compact executive car) Mercedes-Benz E-Class (executive car) Mercedes-Benz S-Class (full-size luxury sedan)",
    "brand": "Mercedes Benz",
    "image": "./Civivc Car Images/mercedes.jpeg"
  }, {
    "id": 2,
    "title": "Honda Civic",
    "price": 560000,
    "description": "The Honda Civic (Japanese: ホンダ・シビック, Hepburn: Honda Shibikku) is a series of automobiles manufactured by Honda since 1972. As of 2023, the Civic is positioned between the Honda Fit/City and Honda Accord in Honda's global car line-up. Honda Civic. Eleventh-generation Civic hatchback.",
    "brand": "Honda",
    "image": "./Civivc Car Images/ciciv new.webp"
  }, {
    "id": 3,
    "title": "Ford",
    "price": 10200000,
    "description": "The price of Ford F 150 in Pakistan ranges from PKR 14,500,000 to PKR 35,000,000 for a used Ford F 150. These prices of Ford F 150 in Pakistan vary on model year, mileage, variant and overall condition of the car.",
    "brand": "Ford",
    "image": "./Ford Card Images/Ford-F-150-XL-2021.jpg"
  },  {
    "id": 5,
    "title": "Suzuki Cultus",
    "price": 600000,
    "description": "Suzuki Cultus car was first unveiled in 'Auto Expo 2014' in India and later on, it made its way into 'Geneva Motor Show' in 2014. Pak Suzuki launched Cultus (1000cc car) considering the need of fuel-efficient family car and growing trend of imported hatchbacks in the country.",
    "brand": "Suzuki",
    "image": "./Suzuki Car Images/cults 2007.jpg"
  }, {
    "id": 6,
    "title": "Fartunure",
    "price": 7000000,
    "description": "Furniture consists of large objects such as tables, chairs, or beds that are used in a room for sitting or lying on or for putting things on or in. Each piece of furniture in their home suited the style of the house. Synonyms: household goods, furnishings, fittings, house fittings More Synonyms of furniture.",
    "brand": "Toyota",
    "image": "./Toyyota Car Imgaes/fartunure.png"
  }, {
    "id": 7,
    "title": "Corrola",
    "price": 6000000,
    "description": "The 2024 Corolla brings back the Nightshade Edition after a brief hiatus. This eye-catching appearance package builds on the SE trim level and gives you striking bronze wheels and dark badging. Nightshade Corolla hatchbacks will come with a black roof and a vented sport wing.",
    "brand": "Toyota",
    "image": "./Toyyota Car Imgaes/comming soon.png"
  }, {
    "id": 8,
    "title": "Vagon R",
    "price": 32999,
    "description": "Wagon R is available in 2 transmission option(s) i.e Manual & Automatic. The Wagon R car has a fuel average of 14 - 16 KM/L with a fuel tank capacity of 35L. With the dimensions of 3600 mm in length, 1475 mm in width, and 1670 mm in height ,the Wagon R has a seating capacity of 5 persons.",
    "brand": "Suzuki",
    "image": "./vagon r car images/Wagon-R new.jpg"
  }, ]

for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
  }
  
  function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "PKR " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
  
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""
  
    }
  }
  function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "PKR " + product[a].price
        document.getElementById("desc2").innerHTML = product[a].description
        document.getElementById("brand2").innerHTML = product[a].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
  
    }
  }