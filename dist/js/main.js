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

var isAutomatic = false;
var isBase = false;
var isDecorative = false;
var isAlmoahilla = false;

function modelSelect() {
    const price = document.getElementById('form__price');
    const selectModel = document.getElementById('form__select-model');
    let modelValue = selectModel.options[selectModel.selectedIndex].value;
    switch (modelValue) {
        case 'default':
            price.value = 0;
            break;
        case '12x30g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 100;
            break;
        case '15x40g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 100;
            break;
        case '18x46g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 100;
            break;
        case '24x61g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 100;
            break;
        case '12x30':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 230;
            break;
        case '15x40a':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 230;
            break;
        case '18x46':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 260;
            break;
        case '24x61':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 365;
            break;
        case '29x61':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 390;
            break;
        case '40x60':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 500;
            break;
        case '10x50':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 180;
            break;
        case '10x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 120;
            break;
        case '15x40b':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 180;
            break;
        case '20x50':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 200;
            break;
        case '10x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 220;
            break;
        case '20x80':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 280;
            break;
        case '25x70':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 280;
            break;
        case '30x30':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 250;
            break;
        case '30x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 280;
            break;
        case '40x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 280;
            break;
        case '40x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 350;
            break;
        case '40x35':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 280;
            break;
        case '55x55':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 420;
            break;
        case '60x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 350;
            break;
        case '90x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 450;
            break;
        case '90x85':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 700;
            break;
        case '18x47':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            price.value = 300;
            break;
        case 'd40x40':
            isDecorative = true;
            isAutomatic = false;
            isBase = false;
            isAlmoahilla = false;
            price.value = 240;
            break;
        case 'a2000':
            isDecorative = false;
            isAutomatic = false;
            isBase = false;
            isAlmoahilla = true;
            price.value = 80;
            break;
        case 'a2002':
            isDecorative = false;
            isAutomatic = false;
            isBase = false;
            isAlmoahilla = true;
            price.value = 90;
            break;
        case 'a2003':
            isDecorative = false;
            isAutomatic = false;
            isBase = false;
            isAlmoahilla = true;
            price.value = 105;
            break;
    }
}

var previousValue = '';

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
        const lineD = document.getElementById('form__lineD');

        const selectLines = document.getElementById('form__select-lines');
        let linesValue = selectLines.options[selectLines.selectedIndex].value;

        switch (linesValue) {
            case '1':
            case 'default':
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '2':
                            price.value = parseInt(price.value) - 40;
                            break;
                        case '3':
                            price.value = parseInt(price.value) - 80;
                            break;
                        case '4':
                            price.value = parseInt(price.value) - 120;
                            break;
                        case '5':
                            price.value = parseInt(price.value) - 160;
                            break;
                        case '6':
                            price.value = parseInt(price.value) - 200;
                            break;
                        default:
                            break;
                    }
                }
                previousValue = linesValue;
                try {
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
                } catch { }
                break;
            case '2':
                if (modelValue == 'default') {
                    selectLines.selectedIndex = '0';
                    window.alert('Elija un modelo para continuar.');
                    return false;
                }
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '1':
                        case 'default':
                        case '':
                            price.value = parseInt(price.value) + 40;
                            break;
                        case '3':
                            price.value = parseInt(price.value) - 40;
                            break;
                        case '4':
                            price.value = parseInt(price.value) - 80;
                            break;
                        case '5':
                            price.value = parseInt(price.value) - 120;
                            break;
                        case '6':
                            price.value = parseInt(price.value) - 160;
                            break;
                        default:
                            break;
                    }
                }
                line2.style.display = 'block';

                line2.setAttribute('required', '');
                line3.setAttribute('required', '');
                line4.setAttribute('required', '');
                line5.setAttribute('required', '');
                line6.setAttribute('required', '');
                previousValue = linesValue;
                try {
                    line3.style.display = 'none';
                    line4.style.display = 'none';
                    line5.style.display = 'none';
                    line6.style.display = 'none';

                    line3.removeAttribute('required', '');
                    line4.removeAttribute('required', '');
                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch { }
                break;
            case '3':
                if (modelValue == 'default') {
                    selectLines.selectedIndex = '0';
                    window.alert('Elija un modelo para continuar.');
                    return false;
                }
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '1':
                        case 'default':
                        case '':
                            price.value = parseInt(price.value) + 80;
                            break;
                        case '2':
                            price.value = parseInt(price.value) + 40;
                            break;
                        case '4':
                            price.value = parseInt(price.value) - 40;
                            break;
                        case '5':
                            price.value = parseInt(price.value) - 80;
                            break;
                        case '6':
                            price.value = parseInt(price.value) - 120;
                            break;
                        default:
                            break;
                    }

                }
                line2.style.display = 'block';
                line3.style.display = 'block';

                line2.setAttribute('required', '');
                line3.setAttribute('required', '');
                line4.setAttribute('required', '');
                line5.setAttribute('required', '');
                line6.setAttribute('required', '');
                previousValue = linesValue;
                try {
                    line4.style.display = 'none';
                    line5.style.display = 'none';
                    line6.style.display = 'none';

                    line4.removeAttribute('required', '');
                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch { }
                break;
            case '4':
                if (modelValue == 'default') {
                    selectLines.selectedIndex = '0';
                    window.alert('Elija un modelo para continuar.');
                    return false;
                }
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '1':
                        case 'default':
                        case '':
                            price.value = parseInt(price.value) + 120;
                            break;
                        case '2':
                            price.value = parseInt(price.value) + 80;
                            break;
                        case '3':
                            price.value = parseInt(price.value) + 40;
                            break;
                        case '5':
                            price.value = parseInt(price.value) - 40;
                            break;
                        case '6':
                            price.value = parseInt(price.value) - 80;
                            break;
                        default:
                            break;
                    }
                }
                line2.style.display = 'block';
                line3.style.display = 'block';
                line4.style.display = 'block';

                line2.setAttribute('required', '');
                line3.setAttribute('required', '');
                line4.setAttribute('required', '');
                line5.setAttribute('required', '');
                line6.setAttribute('required', '');
                previousValue = linesValue;
                try {
                    line5.style.display = 'none';
                    line6.style.display = 'none';

                    line5.removeAttribute('required', '');
                    line6.removeAttribute('required', '');
                } catch { }
                break;
            case '5':
                if (modelValue == 'default') {
                    selectLines.selectedIndex = '0';
                    window.alert('Elija un modelo para continuar.');
                    return false;
                }
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '1':
                        case 'default':
                        case '':
                            price.value = parseInt(price.value) + 160;
                            break;
                        case '2':
                            price.value = parseInt(price.value) + 120;
                            break;
                        case '3':
                            price.value = parseInt(price.value) + 80;
                            break;
                        case '4':
                            price.value = parseInt(price.value) + 40;
                            break;
                        case '6':
                            price.value = parseInt(price.value) - 40;
                            break;
                        default:
                            break;
                    }
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
                previousValue = linesValue;
                try {
                    line6.style.display = 'none';

                    line6.removeAttribute('required', '');
                } catch { }
                break;
            case '6':
                if (modelValue == 'default') {
                    selectLines.selectedIndex = '0';
                    window.alert('Elija un modelo para continuar.');
                    return false;
                }
                if (isAutomatic === true && parseInt(price.value) > 0) {
                    switch (previousValue) {
                        case '1':
                        case 'default':
                        case '':
                            price.value = parseInt(price.value) + 200;
                            break;
                        case '2':
                            price.value = parseInt(price.value) + 160;
                            break;
                        case '3':
                            price.value = parseInt(price.value) + 120;
                            break;
                        case '4':
                            price.value = parseInt(price.value) + 80;
                            break;
                        case '5':
                            price.value = parseInt(price.value) + 40;
                            break;
                        default:
                            break;
                    }
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
                previousValue = linesValue;
                break;
        }
    } catch{ }
}

function drawSelect() {
    try {
        const price = document.getElementById('form__price');
        const drawInput = document.getElementById('form__lineD');
        const drawSelect = document.getElementById('form__select-drawing');
        const formDrawing = document.querySelector('.form__drawing');
        let drawSelectValue = drawSelect.options[drawSelect.selectedIndex].value;
        if (drawSelectValue == 'true') {
            if (parseInt(price.value) > 0 && price.value != '') {
                price.value = parseInt(price.value) + 70;
            }
            drawInput.style.display = 'block';
            formDrawing.style.display = 'block';
        } else if (drawSelectValue == 'false') {
            if (parseInt(price.value) > 0 && price.value != '') {
                price.value = parseInt(price.value) - 70;
            }
            drawInput.style.display = 'none';
            formDrawing.style.display = 'none';
        }
    } catch{ }
}

function submitData() {
    const price = document.getElementById('form__price');
    localStorage.setItem('price', price.value);
}