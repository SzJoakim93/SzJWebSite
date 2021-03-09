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

function addData(data) {

    var menuTemp = `<div class="nav-button" onmouseover="selectMenu(${elementNumber})">${data.name}</div>`

    $(`#${data.container} > .container > .nav-button-area`).append(menuTemp);

    var contentTemp = 
    `
        <div class="product-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6"><div class="button">Letöltés</div></div>
                    <div class="col-sm-6"><div class="button">Forráskód</div></div>
                </div>
            </div>
            <p>${data.gameDescription}</p>
            <p>${data.technicalDescription}</p>
        </div>
    `
    $(`#${data.container} > .container > .nav-button-area`).append(contentTemp);
    console.log($(`#${data.container} > .container > .nav-button-area`));
    elementNumber++;
}

var ChangeMenuView = function (e) {

    let id = $(e).attr('id');
    $('#home').removeClass('active');
    $('#myPages').removeClass('active');
    $('#myGames').removeClass('active');
    $("#home-content").hide();
    $("#myGames-content").hide();
    $(`#${id}`).addClass('active');

    switch (id) {
        case "home":
            $("#home-content").slideDown(800);
            break;
        case "myPages":
            $(".myPages-content").slideDown(800);
            break;
        case "myGames":
            $("#myGames-content").slideDown(800);
            break;
    }
};