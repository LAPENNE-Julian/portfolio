const app = {
  
    init: function() {

      console.log("app.init() appelé");

      app.bindNavigationBurger();
      app.bindInteractiveProductcard();
    },
  
    // ---------------------------------------------------------
    // Binders
    // ---------------------------------------------------------
    bindNavigationBurger: function(){
        //Select bubble element
        const bubble = document.querySelector(".bubble");

        //Add event lister on click
        bubble.addEventListener("click", app.handleDisplayBurger);

        //Select navigation header
        const navHeader = document.querySelector(".navigation-header");

        //Add event listerner on click to close burger
        navHeader.addEventListener("click", app.handleUndisplayBurger);
    },

    bindCloseBurger: function(){
        //Select close element
        const closeBurger = document.querySelector(".navigation-menu-burger img");

        //Add event lister on click
        closeBurger.addEventListener("click", app.handleUndisplayBurger);
    },

    bindInteractiveProductcard: function() {
        //Select all production-card element
        const allProductCard = document.querySelectorAll(".production-card");

        for (productCard of allProductCard){
            //Add event on click
            productCard.addEventListener("click", app.handleInteractiveLink);
        }
    },

    // ---------------------------------------------------------
    // Handlers
    // ---------------------------------------------------------
    handleDisplayBurger: function() {
        //Display navigation burger
        app.displayNavigationBurger();

        //Select all links in navigation burger
        const links = document.querySelectorAll(".navigation-menu-burger li");

        for (link of links){
            //Add event to close menu burger on click
            link.addEventListener("click", app.handleUndisplayBurger);
        }

        //Add event listerner on close burger element
        app.bindCloseBurger();
    },

    handleUndisplayBurger: function() {
        //Cancel display navigation burger element
        app.undisplayNavigationBurger()
    },

    handleInteractiveLink: function() {

        //Select a element of production card
        const productCardLink = productCard.querySelector("a");
        //Get href attribute value of a element
        const productCardhref = productCardLink.getAttribute("href");
        
        //Open new page with url
        app.openNewPage(productCardhref);
    },

    // ---------------------------------------------------------
    // DOM
    // ---------------------------------------------------------
    undisplayNavigationBurger: function() {
        //Select navigation burger element
        const navBurger = document.querySelector(".navigation-menu-burger");
        //Cancel display element
        navBurger.setAttribute("style", "display: none;");
    },

    displayNavigationBurger: function() {
        //Select navigation burger element
        const navBurger = document.querySelector(".navigation-menu-burger");
        //Cancel display element
        navBurger.setAttribute("style", "display: flex;");
    },

    openNewPage: function(url){
        //Open new page with url
        window.open( url , "_blank");
    },
};

//Call app.init when DOM loaded
document.addEventListener("DOMContentLoaded", app.init);