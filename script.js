'use strict';
const sideBarLinks = document.querySelectorAll('.side-bar-link');
const sideBarH5 = document.querySelectorAll('.side-bar-link h5');
const insightCalendarDiv = document.querySelectorAll('.insight-calendar div');
const insightCalendarH5 = document.querySelectorAll('.insight-calendar div h5');

// Highlighting active side bar link
sideBarLinks.forEach((sideBarLink, index) => {
  sideBarLink.addEventListener('click', () => {
    sideBarH5.forEach((h5, index2) => {
      if (index2 === index) {
        h5.parentElement.classList.add('active');
      } else {
        h5.parentElement.classList.remove('active');
      }
    });
  });
});
// sideBarH5.forEach((h5, index) => {
//   h5.addEventListener('click', () => {
//     sideBarLinks.forEach((sideBarLink, index2) => {
//       if (index2 === index) {
//         sideBarLink.classList.add('active');
//       } else {
//         sideBarLink.classList.remove('active');
//       }
//     });
//   });
// });

// Highlighting active side bar link
insightCalendarDiv.forEach((div, index) => {
  div.addEventListener('click', () => {
    insightCalendarH5.forEach((h5, index2) => {
      if (index2 === index) {
        h5.parentElement.classList.add('insight-calendar-active');
      } else {
        h5.parentElement.classList.remove('insight-calendar-active');
      }
    });
  });
});
