const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItemOne = document.querySelector("nav a:nth-of-type(1)");
let navItemTwo = document.querySelector("nav a:nth-of-type(2)");
let navItemThree = document.querySelector("nav a:nth-of-type(3)");
let navItemFour = document.querySelector("nav a:nth-of-type(4)");
let navItemFive = document.querySelector("nav a:nth-of-type(5)");
let navItemSix = document.querySelector("nav a:nth-of-type(6)");

navItemOne.textContent = siteContent.nav["nav-item-1"];
navItemTwo.textContent = siteContent.nav["nav-item-2"];
navItemThree.textContent = siteContent.nav["nav-item-3"];
navItemFour.textContent = siteContent.nav["nav-item-4"];
navItemFive.textContent = siteContent.nav["nav-item-5"];
navItemSix.textContent = siteContent.nav["nav-item-6"];

// Color Green
navItemOne.style.color = 'green';
navItemTwo.style.color = 'green';
navItemThree.style.color = 'green';
navItemFour.style.color = 'green';
navItemFive.style.color = 'green';
navItemSix.style.color = 'green';

let navItemSeven = document.createElement("a");
navItemSeven.text = "Secret Button";
navItemSeven.style.color = 'green';

let navItemEight = document.createElement("a");
navItemEight.text = "Not So Secret Button";
navItemEight.style.color = 'green';

document.querySelector("header nav").append(navItemSeven);
document.querySelector("header nav").prepend(navItemEight);

let ctaH1 = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");

ctaH1.textContent = siteContent.cta['h1'];
ctaButton.textContent = siteContent.cta['button'];
ctaImg.src = siteContent.cta['img-src'];

let featuresH4 = document.querySelectorAll(".top-content .text-content h4");
let featuresContent = document.querySelectorAll(".top-content .text-content p");
for(let i in featuresH4){
  let x = featuresH4[i]
  x.textContent = siteContent["main-content"]["features-h4"];
}
for(let i in featuresContent){
  let x = featuresContent[i]
  x.textContent = siteContent["main-content"]["features-content"];
}

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productH4.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector('.contact h4');
let contactAddress = document.querySelector('.contact p:nth-of-type(1)');
let contactPhone = document.querySelector('.contact p:nth-of-type(2)');
let contactEmail = document.querySelector('.contact p:nth-of-type(3)');

contactH4.textContent = siteContent.contact["contact-h4"];
contactAddress.textContent = siteContent.contact["address"];
contactPhone.textContent = siteContent.contact["phone"];
contactEmail.textContent = siteContent.contact["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;


// Stretch
document.querySelector(".cta-text button").addEventListener("click", () => {
  document.querySelector('#cta-img').src = "https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
})