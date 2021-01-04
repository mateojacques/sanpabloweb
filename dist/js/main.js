const header = document.getElementById("header");
const closeBtn = document.getElementsByClassName("header__btn-close");
const title = document.getElementsByClassName("header__title");
const buttons = document.getElementsByClassName("header__buttons");
const headerImg = document.getElementsByClassName("header__img");

const mobile = window.matchMedia("(max-width: 468px)");
const tablet = window.matchMedia("(max-width: 850px)");
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
            headerImg[0].src = "https://i.imgur.com/oZevzX2.jpg";
        }

        else if (tablet.matches) {
            headerImg[0].src = "https://i.imgur.com/3t2A8Aj.jpg";
        }

        else if (desktop.matches || notebook.matches) {
            headerImg[0].src = "https://i.imgur.com/zEvi0p4.jpg";
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
            headerImg[0].src = "https://i.imgur.com/oZevzX2.jpg";
        }

        else if (tablet.matches) {
            headerImg[0].src = "https://i.imgur.com/3t2A8Aj.jpg";
        }

        else if (desktop.matches || notebook.matches) {
            headerImg[0].src = "https://i.imgur.com/zEvi0p4.jpg";
        }
    } catch {
        console.log('No header__img in this page.');
    }
}

/*
FOTOS LIBRERIA

header desktop = https://i.imgur.com/zEvi0p4.jpg;
header tablet = https://i.imgur.com/3t2A8Aj.jpg;
header phone = https://i.imgur.com/oZevzX2.jpg;
*/

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
        buttons[0].style.bottom = '40px';
    }

    else if (desktop.matches) {
        buttons[0].style.bottom = '60px';
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
    const selectLines = document.getElementById('form__select-lines');
    const orientation = document.getElementById('form__orientation');

    switch (modelValue) {
        case 'default':
            price.value = 0;
            orientation.style.display = 'none';
            break;
        case '12x30g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            orientation.style.display = 'none';
            price.value = 100;
            break;
        case '15x40g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            orientation.style.display = 'none';
            price.value = 100;
            orientation.style.display = 'initial';
            break;
        case '18x46g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            orientation.style.display = 'none';
            price.value = 100;
            break;
        case '24x61g':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 100;
            orientation.style.display = 'none';
            break;
        case '12x30':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 230;
            orientation.style.display = 'none';
            break;
        case '15x40a':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 230;
            orientation.style.display = 'initial';
            break;
        case '18x46':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 260;
            orientation.style.display = 'none';
            break;
        case '24x61':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 365;
            orientation.style.display = 'none';
            break;
        case '29x61':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 390;
            orientation.style.display = 'none';
            break;
        case '40x60':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 500;
            orientation.style.display = 'none';
            break;
        case '10x50':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 180;
            orientation.style.display = 'none';
            break;
        case '10x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 120;
            orientation.style.display = 'none';
            break;
        case '15x40b':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 180;
            orientation.style.display = 'none';
            break;
        case '20x50':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 200;
            orientation.style.display = 'none';
            break;
        case '10x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 220;
            orientation.style.display = 'none';
            break;
        case '20x80':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 280;
            orientation.style.display = 'none';
            break;
        case '25x70':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 280;
            orientation.style.display = 'none';
            break;
        case '30x30':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 250;
            orientation.style.display = 'none';
            break;
        case '30x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 280;
            orientation.style.display = 'none';
            break;
        case '40x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            orientation.style.display = 'none';
            price.value = 280;
            break;
        case '40x60':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 350;
            orientation.style.display = 'none';
            break;
        case '40x35':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 280;
            orientation.style.display = 'none';
            break;
        case '55x55':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 420;
            orientation.style.display = 'none';
            break;
        case '60x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 350;
            orientation.style.display = 'none';
            break;
        case '90x40':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 450;
            orientation.style.display = 'none';
            break;
        case '90x85':
            isBase = true;
            isAutomatic = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 700;
            orientation.style.display = 'none';
            break;
        case '18x47':
            isAutomatic = true;
            isBase = false;
            isDecorative = false;
            isAlmoahilla = false;
            selectLines.selectedIndex = '0';
            price.value = 300;
            orientation.style.display = 'initial';
            break;
        case 'd40x40':
            isDecorative = true;
            isAutomatic = false;
            isBase = false;
            isAlmoahilla = false;
            price.value = 240;
            orientation.style.display = 'none';
            break;
    }
}

var previousValue = '';

function lineSelect() {
    try {
        const price = document.getElementById('form__price');
        const selectModel = document.getElementById('form__select-model');
        let modelValue = selectModel.options[selectModel.selectedIndex].value;

        const line1 = document.getElementById('form__line1');
        const line2 = document.getElementById('form__line2');
        const line3 = document.getElementById('form__line3');
        const line4 = document.getElementById('form__line4');
        const line5 = document.getElementById('form__line5');
        const line6 = document.getElementById('form__line6');

        const line2d = document.getElementById('form__div__line2');
        const line3d = document.getElementById('form__div__line3');
        const line4d = document.getElementById('form__div__line4');
        const line5d = document.getElementById('form__div__line5');
        const line6d = document.getElementById('form__div__line6');

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

                    line2d.style.display = 'none';
                    line3d.style.display = 'none';
                    line4d.style.display = 'none';
                    line5d.style.display = 'none';
                    line6d.style.display = 'none';

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

                line2d.style.display = 'grid';

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

                    line3d.style.display = 'none';
                    line4d.style.display = 'none';
                    line5d.style.display = 'none';
                    line6d.style.display = 'none';

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

                line2d.style.display = 'grid';
                line3d.style.display = 'grid';

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

                    line4d.style.display = 'none';
                    line5d.style.display = 'none';
                    line6d.style.display = 'none';

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

                line2d.style.display = 'grid';
                line3d.style.display = 'grid';
                line4d.style.display = 'grid';

                line2.setAttribute('required', '');
                line3.setAttribute('required', '');
                line4.setAttribute('required', '');
                line5.setAttribute('required', '');
                line6.setAttribute('required', '');
                previousValue = linesValue;
                try {
                    line5.style.display = 'none';
                    line6.style.display = 'none';

                    line5d.style.display = 'none';
                    line6d.style.display = 'none';

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

                line2d.style.display = 'grid';
                line3d.style.display = 'grid';
                line4d.style.display = 'grid';
                line5d.style.display = 'grid';

                line2.setAttribute('required', '');
                line3.setAttribute('required', '');
                line4.setAttribute('required', '');
                line5.setAttribute('required', '');
                line6.setAttribute('required', '');
                previousValue = linesValue;
                try {
                    line6.style.display = 'none';

                    line6d.style.display = 'none';

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

                line2d.style.display = 'grid';
                line3d.style.display = 'grid';
                line4d.style.display = 'grid';
                line5d.style.display = 'grid';
                line6d.style.display = 'grid';

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

function fontSelect() {

    const line1 = document.getElementById('form__line1');
    const line2 = document.getElementById('form__line2');
    const line3 = document.getElementById('form__line3');
    const line4 = document.getElementById('form__line4');
    const line5 = document.getElementById('form__line5');
    const line6 = document.getElementById('form__line6');

    const selectFont1 = document.getElementById('form__line__font1');
    const selectFont2 = document.getElementById('form__line__font2');
    const selectFont3 = document.getElementById('form__line__font3');
    const selectFont4 = document.getElementById('form__line__font4');
    const selectFont5 = document.getElementById('form__line__font5');
    const selectFont6 = document.getElementById('form__line__font6');

    let fontValue1 = selectFont1.options[selectFont1.selectedIndex].value;
    let fontValue2 = selectFont2.options[selectFont2.selectedIndex].value;
    let fontValue3 = selectFont3.options[selectFont3.selectedIndex].value;
    let fontValue4 = selectFont4.options[selectFont4.selectedIndex].value;
    let fontValue5 = selectFont5.options[selectFont5.selectedIndex].value;
    let fontValue6 = selectFont6.options[selectFont6.selectedIndex].value;

    try{

    switch (fontValue1) {
        case 'default':
        case 'arial':
            line1.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line1.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line1.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line1.style.fontFamily = 'Script';
            break;
        case 'birds':
            line1.style.fontFamily = 'Birds';
            break;
    }

    switch (fontValue2) {
        case 'default':
        case 'arial':
            line2.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line2.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line2.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line3.style.fontFamily = 'Script';
            break;
        case 'birds':
            line4.style.fontFamily = 'Birds';
            break;
    }

    switch (fontValue3) {
        case 'default':
        case 'arial':
            line3.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line3.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line3.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line3.style.fontFamily = 'Script';
            break;
        case 'birds':
            line3.style.fontFamily = 'Birds';
            break;
    }

    switch (fontValue4) {
        case 'default':
        case 'arial':
            line4.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line4.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line4.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line4.style.fontFamily = 'Script';
            break;
        case 'birds':
            line4.style.fontFamily = 'Birds';
            break;
    }

    switch (fontValue5) {
        case 'default':
        case 'arial':
            line5.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line5.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line5.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line5.style.fontFamily = 'Script';
            break;
        case 'birds':
            line5.style.fontFamily = 'Birds';
            break;
    }

    switch (fontValue6) {
        case 'default':
        case 'arial':
            line6.style.fontFamily = 'Arial';
            break;
        case 'arial-narrow':
            line6.style.fontFamily = 'Arial Narrow';
            break;
        case 'arial-black':
            line6.style.fontFamily = 'Arial Black';
            break;
        case 'script':
            line6.style.fontFamily = 'Script';
            break;
        case 'birds':
            line6.style.fontFamily = 'Birds';
            break;
    }
} catch {}
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