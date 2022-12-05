
/*
 * Define Global Variables
*/
const sections = document.querySelectorAll("section");
const navBar = document.querySelector('#navbar_list');
/*
 * End Global Variables
*/
// build the nav dynamically
for(section of sections){
  navBar.innerHTML +=`<li><a href= #${section.id} class="menu_link">${section.dataset.nav}</li>`
 }
 

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
  for (let i=0; i<sections.length; i++) {
      if (sections[i].getBoundingClientRect().top < 200 && sections[i].getBoundingClientRect().bottom > 200 ) {
        sections[i].classList.add('your-active-class');
      } else {sections[i].classList.remove('your-active-class')};
    }
  }
)

// Scroll to anchor ID using scrollIntoView event
navBar.addEventListener("click" ,(e) =>{
  e.preventDefault();
// I used slice to avoid the "#"
let secId = e.target.getAttribute("href").slice(1)
document.getElementById(secId).scrollIntoView({behavior: "smooth"});
})

//Make the nav bar active when the section is viewed
window.onscroll = ()=>{
  const links = Array.from(document.querySelectorAll("li"));
  for (let i=0; i<sections.length; i++) {
  if (links[i].textContent === sections[i].getAttribute("data-nav") ){
  for (let j=0; j<links.length; j++) {
    if (sections[j].getBoundingClientRect().top < 200 && sections[j].getBoundingClientRect().bottom > 200 )
     {
        links[j].classList.add('active_link');
      } else {links[j].classList.remove('active_link')};
        }
      }
    }
  }