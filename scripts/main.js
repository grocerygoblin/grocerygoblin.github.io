const myImage = document.querySelector("img");

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "\images\cross.png") {
        myImage.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BY2Y0YTlkZmMtZDMwZi00MDQwLThmYmUtZjQzMjRlMmQzMTNiXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg");
    } else {
        myImage.setAttribute("src", "\images\cross.png");
    }
}; 