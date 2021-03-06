var menus = []
var contents = []
var contentArea = document.getElementById("product-content-area");
var menuArea = document.getElementById("nav-button-area");
var elementNumber = 0;

function initGames() {
    menus = menuArea.getElementsByClassName("nav-button");
    contents = contentArea.getElementsByClassName("product-content");
}

function hideProductContent() {

    for (i = 0; i < menus.length; i++) {
        menus[i].classList.remove("active");
    }

    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
}

function selectMenu(x) {
    hideProductContent();
    menus[x].classList.add("active");
    contents[x].style.display = "block";
}

function addGame(name, gDescription, tDescription) {
    var menuTemp = `<div class="nav-button" onmouseover="selectMenu(${elementNumber})">${name}</div>`
    menuArea.innerHTML += menuTemp;

    var contentTemp =
    `
        <div class="product-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6"><div class="button">Letöltés</div></div>
                    <div class="col-sm-6"><div class="button">Forráskód</div></div>
                </div>
            </div>
            <p id="game-description">${gDescription}</p>
            <p id="technical-description">${tDescription}</p>
        </div>
    `

    contentArea.innerHTML += contentTemp;
    elementNumber++;
}
