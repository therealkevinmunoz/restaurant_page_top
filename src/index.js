import './styles.css';
import pageBanner from './images/Restaurant_Page_Banner.png';

console.log("hi");

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = pageBanner;
 
   element.appendChild(myIcon);
 
    return element;
  }
 
  document.body.appendChild(component());