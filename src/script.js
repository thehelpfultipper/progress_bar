///// Animated Hamburger Menu /////

// Grab the menu from the DOM
const menu = document.querySelector('#hbg-menu');

// Get list of all spans
const bars = document.querySelectorAll('span');

// Detect click event on hamburger menu
menu.addEventListener('click', () => {
  // Loop through the bars list
  bars.forEach( (bar, i) => {
    i === 0 && bar.classList.toggle('top-center'); 
    i === 2 && bar.classList.toggle('bottom-center');
    i === 1 && bar.classList.toggle('turn-90');
    
  });
  menu.classList.toggle('turn-45');
});

/////////////////////////////////////////////

///// Progress Bar /////
const main = document.querySelector('main'),
  progressBar = document.querySelector('#progress');

document.addEventListener('scroll', () => {
  // console.log({
  //   docClient: document.body.clientHeight,
  //   docScroll: document.body.scrollHeight,
  //   window: window.scrollY
  // });   // docScroll - docClient = window

  let totalHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ),
      clientHeight = document.body.clientHeight,
      userScroll = window.scrollY,
      pctScrolled = Math.round((userScroll / (totalHeight - clientHeight)) * 100);
  
  progressBar.style.width = pctScrolled + '%';

});