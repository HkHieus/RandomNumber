var randomNum = document.querySelector('.wrapper__body');

function result() {
    var valueFrom = +document.querySelector('.wrapper__header--from').value;
    var valueTo =  +document.querySelector('.wrapper__header--to').value;
    randomNum.innerText = Math.floor(Math.random()*(valueTo - valueFrom + 1)) + valueFrom ;
}

// rain animation 

let hrElement;
  let counter = 100;
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    
      hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 3 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
   
    document.body.appendChild(hrElement);
  }

  //source https://www.foolishdeveloper.com/