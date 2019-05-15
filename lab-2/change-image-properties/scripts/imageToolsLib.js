function setImageProperties(imageHeight, imageWidth) {
    let image = document.getElementById("mainImage");
    image.style.height = imageHeight;
    image.style.width = imageWidth;
}

function setBorderProperties(borderWidth, borderColor) {
    const borderStyle = borderWidth + " solid " + borderColor;
    let item = document.getElementById("mainImage");
    item.style.border = borderStyle;
}

function changeImageProperties() {
    const pxPostfix = "px";

    let imageWidth = document.getElementById("imageWidthInput").value + pxPostfix;
    let imageHeight = document.getElementById("imageHeightInput").value + pxPostfix;
    let borderWidth = document.getElementById("borderWidthInput").value + pxPostfix;
    let borderColor = document.getElementById("borderColorInput").value;

    setImageProperties(imageHeight, imageWidth);
    setBorderProperties(borderWidth, borderColor);
}

///todo: create color validation method (hex, rgb, text)