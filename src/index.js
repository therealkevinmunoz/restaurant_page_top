"use strict";

import './styles.css';
import {default as createMenu} from './menu.js';
import {default as createContact} from './contact.js';

window.addEventListener("load", function()
{
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");
    document.body.appendChild(contentDiv);
    const openWebpage = HomePage();
    openWebpage.addNavigation();
})

const HomePage = function()
{
    /* Navigation will be present for all pages*/
    const contentDivHTML = document.getElementById("content"); 

    const navHTML = document.createElement("nav");
    navHTML.innerHTML = 
    `<ul>
        <li id="home-nav">Home</li>
        <li id="menu-nav">Menu</li>
        <li id="contact-nav">Contact</li>
    </ul>`;

    contentDivHTML.appendChild(navHTML);
  

    const createHomePage = function()
    {
        const homeMainHTML = document.createElement("main");
        homeMainHTML.setAttribute("id", "home-page");

        homeMainHTML.innerHTML = 
        `<div id="store-banner-img"></div>
            <div id="store-intro-container">
                <h1>Heavenly Zhen Zhu</h1>
                <p>Our boba tea is one of the most premier shops in the Los Angeles area. Famous for the bounciness and chewy goodness of our tapioca pearls. Our team perfectly compliments any and all tastebuds.</p>
                <button id="cta-primary">Drink Boba</button>
            </div>
            <div class="page-divide"></div>
            <div id="store-hours-container">
                <h3>Hours</h3>
                <ul>
                    <li>Mon: 9am-9pm</li>
                    <li>Tues: 9am-9pm</li>
                    <li>Wed: 9am-9pm</li>
                    <li>Thurs: 9am-9pm</li>
                    <li>Fri: 9am-9pm</li>
                    <li>Sat: 9am-9pm</li>
                    <li>Sun: Closed</li>
                </ul>
            </div>`

           return homeMainHTML;
    }

    /* Initialize the home page when the object is first called */
    contentDivHTML.appendChild(createHomePage());

    const addNavigation = function()
    {
        const homeNav = document.getElementById("home-nav");
        const menuNav = document.getElementById("menu-nav");
        const contactNav = document.getElementById("contact-nav");
        let drinkBobaButton = document.getElementById("cta-primary");
            

        homeNav.addEventListener("click", function()
        {
            let currentMainHTML = document.querySelector("main");
            contentDivHTML.removeChild(currentMainHTML);
            contentDivHTML.appendChild(createHomePage());

            let drinkBobaButton = document.getElementById("cta-primary");
            drinkBobaButton.addEventListener("click", function()
            {
                let currentMainHTML = document.querySelector("main");
                contentDivHTML.removeChild(currentMainHTML);
                contentDivHTML.appendChild(createMenu());
            });
        });

        menuNav.addEventListener("click", function()
        {
            let currentMainHTML = document.querySelector("main");
            contentDivHTML.removeChild(currentMainHTML);
            contentDivHTML.appendChild(createMenu());
        });

        drinkBobaButton.addEventListener("click", function()
        {
            let currentMainHTML = document.querySelector("main");
            contentDivHTML.removeChild(currentMainHTML);
            contentDivHTML.appendChild(createMenu());
        });

        contactNav.addEventListener("click", function()
        {
            let currentMainHTML = document.querySelector("main");
            contentDivHTML.removeChild(currentMainHTML);
            contentDivHTML.appendChild(createContact());
        });
    }
    
    return {createHomePage, addNavigation}
};



