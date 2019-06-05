const header = document.getElementById("header");
const closeBtn = document.getElementsByClassName("header__btn-close");
const title = document.getElementsByClassName("header__title");
const buttons = document.getElementsByClassName("header__buttons");
const headerImg = document.getElementsByClassName("header__img");

const mobile = window.matchMedia("(max-width: 468px)");
const tablet = window.matchMedia("(max-width: 768px)");
const notebook = window.matchMedia("(max-width: 1899px)");
const desktop = window.matchMedia("(min-width: 1600px)");


window.onload = function () {

    try {
        if (desktop.matches) {
            document.getElementById('footerServices').style.position = 'absolute';
            document.getElementById('footerServices').style.bottom = '0';
        }
    } catch {
        
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
        if (desktop.matches) {
            document.getElementById('footerServices').style.position = 'absolute';
            document.getElementById('footerServices').style.bottom = '0';
        } else if (notebook.matches || tablet.matches || mobile.matches){
            document.getElementById('footerServices').style.position = "static";
        }
    } catch {
        
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

function lineSelect(){
    try {
        const line1 = document.getElementById('form__line1');
        const line2 = document.getElementById('form__line2');
        const line3 = document.getElementById('form__line3');
        const line4 = document.getElementById('form__line4');
        const line5 = document.getElementById('form__line5');
        const line6 = document.getElementById('form__line6');

        const selectLines = document.getElementById('form__select-lines');
        let linesValue = selectLines.options[selectLines.selectedIndex].value;

        if (linesValue == 1) {
            line2.style.display = 'none';
            line3.style.display = 'none';
            line4.style.display = 'none';
            line5.style.display = 'none';
            line6.style.display = 'none';
        } else if (linesValue == 2){
            line2.style.display = 'block';
        } else if (linesValue == 3){
            line2.style.display = 'block';
            line3.style.display = 'block';
        } else if (linesValue == 4){
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
        } else if (linesValue == 5){
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
            line5.style.display = 'block';
        } else if (linesValue == 6){
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
            line5.style.display = 'block';
            line6.style.display = 'block';
        }
    } catch {
            
    }
}

function drawSelect(){
    try{
        const drawInput = document.getElementById('form__lineD');
        const drawSelect = document.getElementById('form__select-drawing');
        let drawSelectValue = drawSelect.options[drawSelect.selectedIndex].value;
        if (drawSelectValue == 'true') {
            drawInput.style.display = 'block';
        } else {
            drawInput.style.display = 'none';
        }
    } catch{}
}