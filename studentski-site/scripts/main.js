/* main.js
   author: Bri Drennan
*/

// Hello world example
/* var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

/*document.querySelector('img').onclick = function () {
	alert('This is the Studentski Dir logo!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/StudentskiDirLogo.jpg') {
		myImage.setAttribute ('src', 'images/FokusLogo.jpg')
	} else {
		myImage.setAttribute ('src', 'images/StudentskiDirLogo.jpg')
	}
}