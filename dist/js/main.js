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
        } else if (notebook.matches || tablet.matches || mobile.matches) {
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

function modelSelect() {
    const price = document.getElementById('form__price');
    const selectModel = document.getElementById('form__select-model');
    let modelValue = selectModel.options[selectModel.selectedIndex].value;
    switch (modelValue) {
        case 'default':
            price.innerHTML = 0;
            break;
        case '12x30g':
            price.innerHTML = 100;
            break;
        case '15x40g':
            price.innerHTML = 100;
            break;
        case '18x46g':
            price.innerHTML = 100;
            break;
        case '24x61g':
            price.innerHTML = 100;
            break;
        case '12x30':
            price.innerHTML = 230;
            break;
        case '15x40a':
            price.innerHTML = 230;
            break;
        case '18x46':
            price.innerHTML = 260;
            break;
        case '24x61':
            price.innerHTML = 365;
            break;
        case '29x61':
            price.innerHTML = 390;
            break;
        case '40x60':
            price.innerHTML = 500;
            break;
        case '10x50':
            price.innerHTML = 180;
            break;
        case '10x40':
            price.innerHTML = 120;
            break;
        case '15x40b':
            price.innerHTML = 180;
            break;
        case '20x50':
            price.innerHTML = 200;
            break;
        case '10x60':
            price.innerHTML = 220;
            break;
        case '20x80':
            price.innerHTML = 280;
            break;
        case '25x70':
            price.innerHTML = 280;
            break;
        case '30x30':
            price.innerHTML = 250;
            break;
        case '30x60':
            price.innerHTML = 280;
            break;
        case '40x40':
            price.innerHTML = 280;
            break;
        case '40x60':
            price.innerHTML = 350;
            break;
        case '40x35':
            price.innerHTML = 280;
            break;
        case '55x55':
            price.innerHTML = 420;
            break;
        case '60x40':
            price.innerHTML = 350;
            break;
        case '90x40':
            price.innerHTML = 450;
            break;
        case '90x85':
            price.innerHTML = 700;
            break;
        case '18x47':
            price.innerHTML = 300;
            break;
        case 'd40x40':
            price.innerHTML = 240;
            break;
        case 'a2000':
            price.innerHTML = 80;
            break;
        case 'a2002':
            price.innerHTML = 90;
            break;
        case 'a2003':
            price.innerHTML = 105;
            break;
    }
}

function lineSelect() {
    try {
        const price = document.getElementById('form__price');
        const selectModel = document.getElementById('form__select-model');
        let modelValue = selectModel.options[selectModel.selectedIndex].value;

        const line2 = document.getElementById('form__line2');
        const line3 = document.getElementById('form__line3');
        const line4 = document.getElementById('form__line4');
        const line5 = document.getElementById('form__line5');
        const line6 = document.getElementById('form__line6');

        const selectLines = document.getElementById('form__select-lines');
        let linesValue = selectLines.options[selectLines.selectedIndex].value;

        if (linesValue == 1) {
            try{
            line2.style.display = 'none';
            line3.style.display = 'none';
            line4.style.display = 'none';
            line5.style.display = 'none';
            line6.style.display = 'none';
            
                line2.removeAttribute('required', '');
                line3.removeAttribute('required', '');
                line4.removeAttribute('required', '');
                line5.removeAttribute('required', '');
                line6.removeAttribute('required', '');
            } catch {}
        } else if (linesValue == 2) {
            if (price.innerHTML != ''){
            price.innerHTML = parseInt(price.innerHTML) + 40;
        }
            line2.style.display = 'block';
            
            line2.setAttribute('required', '');
            line3.setAttribute('required', '');
            line4.setAttribute('required', '');
            line5.setAttribute('required', '');
            line6.setAttribute('required', '');
            try{
                line3.style.display = 'none';
                line4.style.display = 'none';
                line5.style.display = 'none';
                line6.style.display = 'none';
                
                    line3.removeAttribute('required', '');
                    line4.removeAttribute('required', '');
                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch {}
        } else if (linesValue == 3) {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) + 80;
            }
            line2.style.display = 'block';
            line3.style.display = 'block';
            
            line2.setAttribute('required', '');
            line3.setAttribute('required', '');
            line4.setAttribute('required', '');
            line5.setAttribute('required', '');
            line6.setAttribute('required', '');
            try{
                line4.style.display = 'none';
                line5.style.display = 'none';
                line6.style.display = 'none';
                
                    line4.removeAttribute('required', '');
                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch {}
        } else if (linesValue == 4) {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) + 120;
            }
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
            
            line2.setAttribute('required', '');
            line3.setAttribute('required', '');
            line4.setAttribute('required', '');
            line5.setAttribute('required', '');
            line6.setAttribute('required', '');
            try{
                line5.style.display = 'none';
                line6.style.display = 'none';

                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch {}
        } else if (linesValue == 5) {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) + 160;
            }
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
            line5.style.display = 'block';
            
            line2.setAttribute('required', '');
            line3.setAttribute('required', '');
            line4.setAttribute('required', '');
            line5.setAttribute('required', '');
            line6.setAttribute('required', '');
            try{
                line6.style.display = 'none';

                    line6.removeAttribute('required', '');
                } catch {}
        } else if (linesValue == 6) {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) + 200;
            }
            line2.style.display = 'block';
            line3.style.display = 'block';
            line4.style.display = 'block';
            line5.style.display = 'block';
            line6.style.display = 'block';

            line2.setAttribute('required', '');
            line3.setAttribute('required', '');
            line4.setAttribute('required', '');
            line5.setAttribute('required', '');
            line6.setAttribute('required', '');
        }  else if (linesValue == 'reset') {
            price.innerHTML = '';
        }
    } catch {

    }
}

function drawSelect() {
    try {
        const price = document.getElementById('form__price');
        const drawInput = document.getElementById('form__lineD');
        const drawSelect = document.getElementById('form__select-drawing');
        let drawSelectValue = drawSelect.options[drawSelect.selectedIndex].value;
        if (drawSelectValue == 'true') {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) + 70;
            }
            drawInput.style.display = 'block';
        } else {
            if (price.innerHTML != ''){
                price.innerHTML = parseInt(price.innerHTML) - 70;
            }
            drawInput.style.display = 'none';
        }
    } catch{ }
}