

window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    
    /*-----Page Loader------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});

/* ---------Toggle NavBar------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSelection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSelection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavBar(){
    document.querySelector(".header").classList.toggle("active");
}

/* ---------Active Section------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");

        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavBar();
        }
        else{
            hideSelection();
            document.body.classList.add("hide-scrolling");
        }

        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

/* ---------About Tabs------------*/

function changeEduClass(){
    document.getElementById("btnExp").className = "tab-item";
    document.getElementById("experience").className = "tab-content";

    document.getElementById("btnEdu").className = "tab-item active";
    document.getElementById("education").className = "tab-content active";
}

function changeExpClass(){
    document.getElementById("btnEdu").className = "tab-item";
    document.getElementById("education").className = "tab-content";
    
    document.getElementById("btnExp").className = "tab-item active";
    document.getElementById("experience").className = "tab-content active";
}

/* ---------Portfolio Item Details Popup------------*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})

//Hide popup when clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}



