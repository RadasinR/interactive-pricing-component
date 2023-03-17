function setViews(slide) {
    let v = slide.value;

    if (v > 10) {
        slide.value = 50;
    }
    if (v > 50) {
        slide.value = 100;
    }
    if (v > 100) {
        slide.value = 500;
    }
    if (v > 500) {
        slide.value = 1000;
    }

    let o = slide.value + "K";
    if (slide.value == 1000) {
        o = 1 + "M";
    }
    document.querySelector("#pagesViews").innerText = o;
    calcPrice(slide.value);
}

function calcPrice(pageViews) {
    let dis = document.querySelector("#monthlyYearly");
    let price = undefined;
    switch (Number(pageViews)) {
        case 10:
            price = 8;
            break;
        case 50:
            price = 12;
            break;
        case 100:
            price = 16;
            break;
        case 500:
            price = 24;
            break;
        case 1000:
            price = 36;
            break;
    }

    let discont = 0.25;
    if (dis.checked) {
        price = price - (price * discont);
    }

    document.querySelector("#price").innerText = "$" + price;
}