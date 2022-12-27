const myImage = document.querySelector("img");

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "\images\cross.png") {
        myImage.setAttribute("src", "\images\heart.png");
    } else {
        myImage.setAttribute("src", "\images\cross.png");
    }
};