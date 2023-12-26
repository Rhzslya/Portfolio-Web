// Catch Margin header Nav

function isAnimationSpan() {
  const titleNav = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Project",
    },
    {
      title: "My Services",
    },
    {
      title: "Contact",
    },
  ];

  const navbarContainer = document.querySelector(".ul-header-nav");
  titleNav.forEach((t) => {
    const navbarNav = document.createElement("li");
    navbarNav.className = "navbar-nav";
    navbarNav.innerHTML = `<a href="#container-${t.title.toLowerCase()}" class="nav-link-active">${
      t.title
    }</a>`;
    navbarContainer.appendChild(navbarNav);
  });

  const navbarNavLink = document.querySelectorAll(".navbar-nav a");
  const headerNav = document.querySelector(".header-nav");
  const contentContainer = document.querySelector(".content-container");
  const rect = headerNav.getBoundingClientRect();
  contentContainer.style.marginTop = rect.height + "px";
  navbarNavLink.forEach((n) => {
    n.style.height = rect.height + "px";
    n.style.setProperty("--set-line-height", rect.height + "px");
  });
  let showSpan = "";
  navbarNavLink.forEach((navItem, navIndex) => {
    showSpan = showSpanWave();

    const spanWave = document.createElement("span");
    spanWave.innerHTML = showSpan;
    navItem.parentNode.appendChild(spanWave);
    spanWave.style.setProperty("--set-opacity-span-title", 0);
    if (navIndex === 0) {
      spanWave.style.setProperty("--set-opacity-span-title", 1);
    }
    navItem.addEventListener("click", function () {
      navbarNavLink.forEach((otheNavItem) => {
        const otherSpanWave = otheNavItem.nextElementSibling;
        otherSpanWave.style.setProperty("--set-opacity-span-title", 0);
      });

      this.nextElementSibling.style.setProperty("--set-opacity-span-title", 1);
    });
  });
}
const showSpanWave = function () {
  return `<span class="wave-header-animations">
              <i class="i-1"></i>
              <i class="i-2"></i>
              <i class="i-3"></i>
              <i class="i-4"></i>
              <i class="i-5"></i>
              <i class="i-6"></i>
              <i class="i-7"></i>
            </span>`;
};
isAnimationSpan();

// Ukuran Background Sub-Nav
const itemNav = document.querySelectorAll(".btn-header-item-nav-content");
const itemNavContent = document.querySelectorAll(
  ".btn-header-sub-item-nav-content"
);
const buttonTextContent = document.querySelectorAll(".button-text-content a");

navContentWidth = () => {
  itemNavContent.forEach((element, index) => {
    const indexItemNav = itemNav;
    const widthItemNav = indexItemNav[index].clientWidth;
    const heightItemNav = itemNavContent[index].clientHeight;
    const thisBottom = (widthItemNav + heightItemNav) * -0.08;
    console.log(widthItemNav);

    if (index === 0) {
    } else if (index === 1) {
      element.style.width = "102.48px";
    } else {
      element.style.width = "100.69px";
    }
    element.style.setProperty("--set-bottom-item-nav", `${thisBottom}px`);
  });
};
navContentWidth();

//Cek Padding Right
itemNav.forEach(function (element) {
  let isText = element.textContent;
  let isTextLength = isText.length;
  let isPadding = 13;
  const isChevronRight = document.querySelectorAll(".chevron");

  isChevronRight.forEach(function (elem, index) {
    if (index === 3) {
      elem.style.marginLeft = "100px";
    }
  });

  element.addEventListener("mouseover", function (e) {
    e.target.style.paddingRight = isTextLength - isPadding + "px";
    e.target.classList.add("active");
  });
  element.addEventListener("mouseout", function (e) {
    e.target.style.paddingRight = "0px";
    e.target.classList.remove("active");
  });
});

let firstItemNav = null;
itemNav.forEach(function (clickItemNav) {
  document.addEventListener("click", function (e) {
    if (!clickItemNav.contains(e.target)) {
      clickItemNav.classList.remove("active-first-item-nav");
    }
  });
});

// Cek Hover Link Sosial Media
const linkSocialMedia = document.querySelectorAll(".social-media-link img");
linkSocialMedia.forEach(function (img) {
  const thisImg = img.src;

  img.addEventListener("mouseover", function () {
    hoverImg = this.src.replace(".png", " Hover.png");
    this.src = hoverImg;
  });
  img.addEventListener("mouseout", function () {
    hoverImg = this.src.replace(" Hover.png", ".png");
    this.src = thisImg;
  });
});

// Check Animation Slide Profesion
const dynamicTextContent = document.querySelector(".dynamic-txt-content");
const textWord = ["Game Enthusiast", "Junior Programmer", "Freelancer"];
let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = textWord[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicTextContent.textContent = currentChar;
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % textWord.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

const contentStats = [
  {
    value: 100,
    title: "Project~",
  },
  {
    value: 200,
    title: "User~",
  },
  {
    value: 700,
    title: "Cerificate~",
  },
];
// Stats Counting
function statProject() {
  const statsCounting = document.querySelector(".stats-counting");

  function showStats(show) {
    return `<div class="stats-counting-content">
              <h1 class="count-up">0</h1>
              <span>${show.title}</span>
            </div>`;
  }

  let card = "";
  contentStats.forEach((show) => {
    card += showStats(show);
    statsCounting.innerHTML = card;
  });

  const countUp = document.querySelectorAll(".count-up");

  countUp.forEach((element, index) => {
    animateValue(element, 0, contentStats[index].value, 100);
  });

  function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor((duration / range) * 10));
    let currentValue = start;

    function updateValue() {
      element.textContent = currentValue;
      currentValue += increment;
      if (
        (increment > 0 && currentValue <= end) ||
        (increment < 0 && currentValue >= end)
      ) {
        setTimeout(updateValue, stepTime);
      }
    }

    updateValue();
  }
}
statProject();

// Cek button text content
const buttonText = document.querySelectorAll(".button-text-content a");
const arrowTextEmail = document.querySelector(".arrow-right-email-button");
// buttonTextPos = () => {
//   buttonText.forEach((element, index) => {
//     element.addEventListener("mouseover", function () {
//       element.classList.add("active-button");
//       // arrowTextEmail.style.right = '-5';
//     });
//     element.addEventListener("mouseout", function () {
//       element.classList.remove("active-button");
//       // arrowTextEmail.style.right = '20';
//     });
//     console.log(element);

//     if (index === 0) {
//       element.style.setProperty("--set-left-before", "-100%");
//       element.classList.add("active");
//       element.style.backgroundColor = "transparent";
//       element.style.boxShadow = "none";
//       element.style.color = "black";
//     } else {
//       element.classList.add("active");
//     }
//   });
// };
// buttonTextPos();

// Navigasi Skill
const cSkillBtn = document.querySelectorAll(".item-skills-content li button");
const cSubNavSkill = document.querySelector(".subnav-item-skills");
const styleLeft = document.querySelector(".slide-left");
const activeSubnav = document.querySelector(".active-subnav-item-skills");
const cSubNavSkillContent = document.querySelectorAll(
  ".subnav-item-skills-content"
);

// Cek Tinggi Element

// Kondisi
cSkillBtn.forEach((element, index) => {
  let subNavIndex = [];
  let subNavIndex2 = [];
  cSubNavSkillContent.forEach((subNav) => {
    const computedStyle = getComputedStyle(subNav);

    let subNavSkillContentHeightWithPadding =
      subNav.clientHeight + parseFloat(computedStyle.marginBottom);

    let subNavSkillContentHeight = subNav.clientHeight;

    subNavIndex.push(subNavSkillContentHeightWithPadding);
    subNavIndex2.push(subNavSkillContentHeight);

    console.log(subNavIndex[0]);
  });

  if (index === 0) {
    element.style.backgroundColor = "red";
  }
  element.addEventListener("click", function () {
    cSkillBtn.forEach((btn) => {
      btn.style.backgroundColor = "";
    });

    // Menambahkan warna merah pada elemen yang diklik
    element.style.backgroundColor = "red";

    // Menghapus Class Animasi (Jika Ada)
    cSubNavSkill.classList.remove("puff-in-ver");

    let totalSubNav = subNavIndex[0] + subNavIndex[1];
    let min = "-";
    if (index === 0) {
      cSubNavSkill.style.top = "0";
      activeSubnav.style.height = subNavIndex2[0] + "px";
    } else if (index === 1) {
      cSubNavSkill.style.top = min + subNavIndex[0] + "px";
      activeSubnav.style.height = subNavIndex2[1] + "px";
    } else {
      cSubNavSkill.style.top = min + totalSubNav + "px";
      activeSubnav.style.height = subNavIndex2[2] + "px";
    }

    // Menambahkan Class Animasi
    setTimeout(() => {
      cSubNavSkill.classList.add("puff-in-ver");
    }, 300);
  });
});

// box animation
const boxAnimation = document.querySelectorAll(".animation-box");

boxAnimation.forEach((element, index) => {
  element.classList.add("box-animation");

  if (index == 0) {
    element.style.setProperty("--set-rotate", "rotate(15deg)");
  } else if (index == 1) {
    element.style.setProperty("--set-rotate", "rotate(-20deg)");
    element.style.setProperty("--set-time", `1.2s`);
  } else if (index == 2) {
    element.style.setProperty("--set-rotate", "rotate(25deg)");
    element.style.setProperty("--set-time", `1.4s`);
  } else if (index == 3) {
    element.style.setProperty("--set-rotate", "rotate(5deg)");
    element.style.setProperty("--set-time", `1.6s`);
  } else if (index == 4) {
    element.style.setProperty("--set-rotate", "rotate(-15deg)");
    element.style.setProperty("--set-time", `1.8s`);
  } else {
    element.style.setProperty("--set-rotate", "rotate(15deg)");
    element.style.setProperty("--set-time", `2s`);
  }
});

// fungsi button text content start
const btnTextContent = document.querySelectorAll(".button-text");
const btnTxt = document.querySelectorAll(".btn-txt");

btnTextContent.forEach((element, index) => {
  if (index > 0) {
    element.style.setProperty("--set-margin-button", "0 0 0 0.5rem");
  }
});

btnTxt.forEach((element) => {
  const spanFirst = document.querySelectorAll(".span-first");
  const spanSec = document.querySelectorAll(".span-sec");
  const isSpanFirst = element.nextElementSibling;
  const isSpanSecond = isSpanFirst.nextElementSibling;

  element.addEventListener("mouseover", function () {
    isSpanFirst.classList.add("active-span");
    isSpanSecond.classList.add("active-span");
    isSpanFirst.style.setProperty("--is-opacity", 1);
    isSpanSecond.style.setProperty("--is-opacity", 1);
    this.classList.add("active-btn");
  });
  element.addEventListener("mouseout", function () {
    isSpanFirst.classList.remove("active-span");
    isSpanSecond.classList.remove("active-span");
    isSpanFirst.style.setProperty("--is-opacity", 0);
    isSpanSecond.style.setProperty("--is-opacity", 0);
    this.classList.remove("active-btn");
  });
});

// fungsi button text content end
// Title Project Animation
const titleProject = document.querySelector(".title-project");
const spreadChar = [...titleProject.textContent]
  .map((t) => `<span class='span-title-project'>${t}</span>`)
  .join("");
titleProject.innerHTML = spreadChar;
const spanTitleProject = document.querySelectorAll(".span-title-project");

function animateColors(index) {
  if (index < spanTitleProject.length) {
    setTimeout(() => {
      spanTitleProject[index].classList.add("active-color");
      animateColors(index + 1);
    }, 200);
  } else {
    // Start the restoredColor function after a delay
    setTimeout(() => {
      restoredColor(spanTitleProject.length - 1);
    }, 200);
  }
}

function restoredColor(index) {
  if (index >= 0) {
    setTimeout(() => {
      spanTitleProject[index].style.color = "white";
      spanTitleProject[index].classList.remove("active-color");

      restoredColor(index - 1);
    }, 200);
  } else {
    // Start the animateColors function after a delay
    setTimeout(() => {
      animateColors(0);
    }, 200);
  }
}

animateColors(0);

// Fungsi Button Experience Start
const buttonSkils = document.querySelectorAll(".button-skils button");
const contentSkil = document.querySelectorAll(
  ".content-skils .content-skils-box"
);
const spanButtonSkilsFirst = document.querySelectorAll(".span-button-1");
const spanButtonSkilsSecond = document.querySelectorAll(".span-button-2");
const arrayContentSkils = Array.from(contentSkil);

const intFirstArray = arrayContentSkils[0].innerHTML;
const intSecondArray = arrayContentSkils[1].innerHTML;
const intThirdArray = arrayContentSkils[2].innerHTML;

function buttonClick(index) {
  const isFirstArray = intFirstArray;
  const isSecondArray = intSecondArray;
  const isThirdArray = intThirdArray;

  arrayContentSkils[1].style.opacity = 0;
  arrayContentSkils[2].style.opacity = 0;

  return function () {
    if (index == 1) {
      arrayContentSkils[0].innerHTML = isSecondArray;
      arrayContentSkils[1].innerHTML = isThirdArray;
      arrayContentSkils[2].innerHTML = isFirstArray;
    } else if (index == 2) {
      arrayContentSkils[0].innerHTML = isThirdArray;
      arrayContentSkils[1].innerHTML = isFirstArray;
      arrayContentSkils[2].innerHTML = isSecondArray;
    } else {
      arrayContentSkils[0].innerHTML = isFirstArray;
      arrayContentSkils[1].innerHTML = isSecondArray;
      arrayContentSkils[2].innerHTML = isThirdArray;
    }
  };
}

buttonSkils.forEach((e, i) => {
  const isSpanFirst = e.nextElementSibling;
  const isSpanSecond = isSpanFirst.nextElementSibling;
  if (i == 0) {
    isSpanFirst.classList.add("active-span-button");
    isSpanSecond.classList.add("active-span-button");
    isSpanFirst.style.setProperty("--set-span-button-opacity", 1);
    isSpanSecond.style.setProperty("--set-span-button-opacity", 1);
  }
  e.addEventListener("click", buttonClick(i));
  e.addEventListener("click", function () {
    isSpanFirst.classList.add("active-span-button");
    isSpanSecond.classList.add("active-span-button");
    isSpanFirst.style.setProperty("--set-span-button-opacity", 1);
    isSpanSecond.style.setProperty("--set-span-button-opacity", 1);

    spanButtonSkilsFirst.forEach((span, index) => {
      if (index !== i) {
        span.style.opacity = 0;
      } else {
        span.style.opacity = 1;
      }
    });
    spanButtonSkilsSecond.forEach((span, index) => {
      if (index !== i) {
        span.style.opacity = 0;
      } else {
        span.style.opacity = 1;
      }
    });
  });
});
// Fungsi Button Experience End

// Project Object Start
const bodyProject = document.querySelector(".container-content-project");
let card = "";

const isContentProject = [
  {
    image: "Asset/Project-Image.png",
    title: `Web Development`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              aspernatur`,
  },
  {
    image: `Asset/Project-Image.png`,
    title: `Javascript`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              aspernatur.`,
  },
  {
    image: `Asset/Project-Image.png`,
    title: `UI UX`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              aspernatur.`,
  },
];

isContentProject.forEach((m) => {
  card += showContentProject(m);
  bodyProject.innerHTML = card;
});

function showContentProject(m) {
  return ` <div class="container-box-project">
            <div class="box-project">
              <div class="project-link">
                <img src="${m.image}" id="isImgProject" class="img-project" alt="" />
              </div>
              <div class="content-project">
                <h1>${m.title}</h1>
                <span
                  >${m.description}</span
                >
              </div>
            </div>
          </div>`;
}

const thisContentProject = document.querySelectorAll(".content-project");
const imgProject = document.querySelectorAll(".img-project");

const imgMouseover = function () {
  imgProject.forEach((img, index) => {
    img.addEventListener("mouseover", function () {
      thisContentProject.forEach((content, contentIndex) => {
        const topValue = contentIndex === index ? 0 : "100%";
        content.style.top = topValue;

        // window.addEventListener("scroll", () => {
        //   // content.style.top = "100%";
        //   const scrollHeight = window.scrollY;
        //   console.log(scrollHeight);
        // });
      });
    });
  });
};

imgMouseover();
