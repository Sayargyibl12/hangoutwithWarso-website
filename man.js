const container = document.querySelector("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const heading = document.getElementById("heading")

// function change(){
// 	document.getElementById("heading").
// 	innerText = "Yayy Thanks you for Accepting"
// }

// function getRandomNumber(min, max){
// 	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// 	return randomNumber;
// }

// btnNo.addEventListener("mouseover", (e) => {
// 	const containerHeight = container.getBoundingClientRect().height;  
// 	const containerwidth = container.getBoundingClientRect().width;
// 	const btnHeight = btnNo.getBoundingClientRect().height;
// 	const btnWidth = btnNo.getBoundingClientRect().width;
// 	const btnTop = btnNo.getBoundingClientRect().top;
// 	const btnLeft = container.getBoundingClientRect().left;

// 	let newTop = btnTop;
// 	let newLeft = btnLeft;

// 	while(Math.abs(newTop - btnTop) < containerHeight / 3){
// 		newTop = getRandomNumber(0, containerHeight - btnHeight);
// 	}

// 	while(Math.abs(newLeft - btnLeft) < containerWidth / 3){
// 		newLeft = getRandomNumber(0, containerwidth - btnWidth);
// 	}

// 	btnNo.style.top = Math.floor(newTop) + "px";
// 	btnNo.style.left = Math.floor(newLeft) + "px";
// });

btnYes.addEventListener("click", (e) => {
	const element = document.getElementById("id01");
element.innerHTML = "Yayy Thanks for Accepting";
    noButton.classList.add("hide");
	imageOne.classList.add("hide");
	imageTwo.classList.remove("hide");

   
   
	
});

// const debounce = function (fn, t = 1000) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => fn(...args), t);
//     }
// };
function moveButton() {
    const x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth - 200);
    const y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    
}