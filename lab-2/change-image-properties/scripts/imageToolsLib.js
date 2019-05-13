function setImageProperties(imageHeight, imageWidth) {
    let image = document.getElementById("mainImage");
    image.style.height = imageHeight;
    image.style.width = imageWidth;
}

function setBorderProperties(borderWidth, borderColor) {
    let item = document.getElementById("mainImageContainer");
    item.style.borderWidth = borderWidth;
    item.style.borderColor = borderColor; ///todo: check hex or rgb or just text
}

///todo: create a main method that will call this functions