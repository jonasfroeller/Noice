// Timeout-Show Page:
function timeout() {
  setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}
/*-----------------*/

// Hamburger:
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navbar-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

let navLink = document.querySelectorAll(".navbar-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
/*-----------------*/

// Scroll Position
document.addEventListener("scroll", () => {
  document.documentElement.dataset.scroll = window.scrollY;
});

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

storeScroll();

/*-----------------*/

// Gigs and Date Storage

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

let dates = {
  list: [],
};

let gigDate0 = "17.09.2021"; // document.getElement... => put in HTML
let gigDate00 = gigDate0.split(".");
let date0 = {
  gigDate: gigDate0,
  dd: gigDate00[0],
  mm: gigDate00[1],
  yyyy: gigDate00[2],
};

let gigDate1 = "26.11.2021";
let gigDate11 = gigDate1.split(".");
let date1 = {
  gigDate: gigDate1,
  dd: gigDate11[0],
  mm: gigDate11[1],
  yyyy: gigDate11[2],
};

let gigDate2 = "13.05.2022";
let gigDate22 = gigDate2.split(".");
let date2 = {
  gigDate: gigDate2,
  dd: gigDate22[0],
  mm: gigDate22[1],
  yyyy: gigDate22[2],
};

/*
let gigDateX = "xx.xx.xxxx";
let gigDateXX = gigDate1.split(".");
let dateX = {
    "gigDate": gigDate2,
    "dd": gigDate22[0],
    "mm": gigDate22[1],
    "yyyy": gigDate22[2],
};
*/

dates.list.push(date0);
dates.list.push(date1);
dates.list.push(date2);
// dates.list.push(date3);

let clockStyle = document.getElementsByClassName("gig-clock");

if (document.getElementById("gigs-box")) {
  document.getElementById("gigs-box").innerHTML = `
<div class="gigs-content">
<h1> ${gigDate2} in Wieselburg (Kulturhof Aigner) <sup> [21:00] 
    <span class="material-icons gig-clock">
        schedule
    </span></h1> </sup>
<button class="buyTickets">
    <a class="classicAnker"
        href="https://www.oeticket.com/event/querbeet-open-sesame-noice-und-absolut-blech-kulturhof-aigner-15064334/">
        Tickets kaufen
    </a>
</button>
</div>
<div class="gigs-content">
<h1> ${gigDate1} in Wieselburg (Ballonwirt Aigner) <sup> [20:00] 
    <span class="material-icons gig-clock">
        schedule
    </span></h1> </sup>
<button class="buyTickets">
    <a class="classicAnker"
        href="https://www.oeticket.com/">
        Tickets kaufen
    </a>
</button>
</div>
<div class="gigs-content">
<h1> ${gigDate0} in Purgstall an der Erlauf (Kirchenplatz) <sup> [22:30]
    <span class="material-icons gig-clock">
        schedule
    </span></h1> </sup>
<button class="buyTickets">
    <a class="classicAnker"
        href="https://www.oeticket.com/">
        Tickets kaufen
    </a>
</button>
</div>
`;

  today = mm + "-" + dd + "-" + yyyy;
  console.log("Todays Date: " + today);
  for (let i = 0; i < dates.list.length; i++) {
    let checkDate = new Date();
    checkDate.setDate(dates.list[i].dd);
    checkDate.setMonth(dates.list[i].mm);
    checkDate.setFullYear(dates.list[i].yyyy);
    console.log(
      "To check: " +
        checkDate.getDate() +
        "-" +
        checkDate.getMonth() +
        "-" +
        checkDate.getFullYear()
    );

    if (new Date(`${yyyy}-${mm}-${dd}`) < checkDate) {
      clockStyle[i].style.color = "rgb(0, 150, 0)"; // future-gigs
      document.getElementsByClassName("buyTickets")[i].style.display = "block";
    } else {
      clockStyle[i].style.color = "rgb(255, 75, 75)"; // past-gigs
      document.getElementsByClassName("buyTickets")[i].style.display = "none";
    }
  }
}

/*-----------------*/

// Copyright Update
document.getElementById("copyright").innerHTML = `© ${yyyy} Noice Band`;

// Darkmode
function darkmode() {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });
}
