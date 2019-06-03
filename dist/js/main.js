const header = document.getElementById("header");
const closeBtn = document.getElementsByClassName("header__btn-close");
const title = document.getElementsByClassName("header__title");
const buttons = document.getElementsByClassName("header__buttons");
const headerImg = document.getElementsByClassName("header__img");

const mobile = window.matchMedia("(max-width: 468px)");
const tablet = window.matchMedia("(max-width: 768px)");
const notebook = window.matchMedia("(max-width: 1899px)");
const desktop = window.matchMedia("(min-width: 1900px)");


window.onload = function () {

    try {
        document.getElementById("payment__button").href = '';
        document.getElementById("payment__button").style.backgroundColor = 'grey';
    } catch {
        console.log('No "payment__button" in this page.');
    }

    try {
        if (mobile.matches) {
            headerImg[0].src = "https://www.officemax.co.nz/Images/ProductImages/2182149.jpg";
        }

        else if (tablet.matches) {
            headerImg[0].src = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62066741%2F287897607331%2F1%2Foriginal.20190510-154016?w=1000&auto=compress&rect=0%2C226%2C900%2C450&s=48a8763469aa24c6e0bf6dc493e92a0d";
        }

        else if (desktop.matches || notebook.matches) {
            headerImg[0].src = "https://tb2cdn.schoolwebmasters.com/accnt_171650/site_171651/Graphics/graphic_header_AboutUs.jpg";
        }
    } catch {
        console.log('No header__img in this page.');
    }
}

window.onresize = function () {

    try {
        if (mobile.matches) {
            headerImg[0].src = "https://www.officemax.co.nz/Images/ProductImages/2182149.jpg";
        }

        else if (tablet.matches) {
            headerImg[0].src = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62066741%2F287897607331%2F1%2Foriginal.20190510-154016?w=1000&auto=compress&rect=0%2C226%2C900%2C450&s=48a8763469aa24c6e0bf6dc493e92a0d";
        }

        else if (desktop.matches || notebook.matches) {
            headerImg[0].src = "https://tb2cdn.schoolwebmasters.com/accnt_171650/site_171651/Graphics/graphic_header_AboutUs.jpg";
        }
    } catch {
        console.log('No header__img in this page.');
    }
}

function openNav() {
    document.getElementById("nav--side").style.width = "250px";
    document.getElementById("nav--side").style.borderLeft = "5px solid #132a5c";
}

function closeNav() {
    document.getElementById("nav--side").style.width = "0px";
    document.getElementById("nav--side").style.borderLeft = "0px";
}

function headerIn() {

    closeBtn[0].style.opacity = '1';
    closeBtn[0].style.top = '10px';

    title[0].style.opacity = '1';

    buttons[0].style.opacity = '1';
    if (mobile.matches) {
        buttons[0].style.bottom = '30px';
    }

    else if (tablet.matches) {
        buttons[0].style.bottom = '30px';
    }

    else if (notebook.matches) {
        buttons[0].style.bottom = '20px';
    }

    else if (desktop.matches) {
        buttons[0].style.bottom = '40px';
    }


    headerImg[0].style.opacity = '0.3';

}

function headerOut() {

    closeBtn[0].style.top = '0px';
    closeBtn[0].style.opacity = '0';

    title[0].style.opacity = '0';

    buttons[0].style.bottom = '0px';
    buttons[0].style.opacity = '0';

    headerImg[0].style.opacity = '1';
}

function unlockBtn() {
    try {
        document.getElementById("payment__button").href = "https://www.mercadopago.com/mla/checkout/start?pref_id=146908791-e6619a38-10f7-473c-a1a7-221d0cc6e146";
        document.getElementById("payment__button").style.backgroundColor = '#132a5c';
    } catch {
        console.log('No header__img in this page.');
    }
}