const container = document.querySelector('.container');
let selectedRating;
// this is a comment
const options = document.querySelectorAll('.option');
options.forEach((option) => { // Add event listener for each option
  option.addEventListener('click', (e) => {
    options.forEach((option) => {
      if (option.classList.contains('selected')) {
        option.classList.remove('selected');
      }
    });
    e.target.classList.toggle('selected');
    selectedRating = parseInt(e.target.textContent);
  });
});

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  if (selectedRating != null) { // Only submits if rating selected
    while (container.firstChild) { // Remove all children
      container.removeChild(container.firstChild);
    }
    
    // Display submitted state
    container.style.textAlign = "center";
    
    // illustration-thank-you.svg
    const thankyouPic = document.createElement('img');
    thankyouPic.setAttribute('src', 'https://drive.google.com/uc?export=view&id=1fPNRccQx49RP2pgwPjubREXevtNVPRfI');
    thankyouPic.classList.add('thank-you-img');
    
    // "You selected [rating] out of 5"
    const selectedMessage = document.createElement('p');
    selectedMessage.classList.add('selected-message');
    selectedMessage.textContent = `You selected ${selectedRating}   out of 5`;
    
    // Thank you!
    const h1 = document.createElement('h1');
    h1.textContent = 'Thank you!';
    
    // We appreciate you taking the time...
    const p = document.createElement('p');
    p.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    p.classList.add('feedbackPTag');
    
    // Add all elements to the DOM
    container.appendChild(thankyouPic);
    container.appendChild(selectedMessage);
    container.appendChild(h1);
    container.appendChild(p);
  }
  
});