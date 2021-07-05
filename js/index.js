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

// Nav

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const navEl1 = document.querySelectorAll('nav');
navEl1.href = siteContent["nav"]["nav-item-1"];

// Top Section

const ctaImg = document.querySelector('.cta img');
ctaImg.src = './img/header-img.png';

const headline = document.querySelector('.cta-text h1');
headline.textContent = 'DOM IS AWESOME';

const buttonName = document.querySelector('.cta-text button');
buttonName.textContent = 'Get Started';


// Above the Mid-Photo Content

const textContentEl = document.querySelector('.text-content h4:nth-child(1)');
textContentEl.textContent = 'Features';


const writtenContent = document.querySelector('.text-content p');
writtenContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const topContent = document.querySelector('.top-content');
topContent.style.display = 'flex';
topContent.style.flexWrap = 'wrap';
topContent.style.width = '100%';

// const secondContent = document.querySelector('.text-content h4:nth-child(2)');
// secondContent.textContent = 'About';

// Below the Mid-Photo Content 

const middleImg = document.querySelector('.main-content img');
middleImg.src = './img/mid-page-accent.jpg';

// const thirdContent = document.querySelector('.text-content h4:nth-child(3)');
// thirdContent.textContent = 'Services';


// Contact Section 

const contactInfo = document.querySelector('.contact');
contactInfo.setAttribute('h4', siteContent["contact"]["contact-h4"]);
contactInfo.setAttribute('p:nth-child(1)', siteContent["contact"]["address"]);
contactInfo.setAttribute('p:nth-child(2)', siteContent["contact"]["phone"]);
contactInfo.setAttribute('p:nth-child(3)', siteContent["contact"]["email"]);