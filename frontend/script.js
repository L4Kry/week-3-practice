// function loadEvent () { //
    const newPictureButton = document.querySelector(".add-pictures")
    newPictureButton.addEventListener("click", function () {
        const pictureContainer = document.querySelector(".pictures");
        const now = new Date().getTime(); 
        const newPicture = `<img src="https://source.unsplash.com/random?random=${now}" alt="">`;
        pictureContainer.insertAdjacentHTML("beforeend", newPicture);
    })
// } //

// window.addEventListener("load", loadEvent); //
//  defer az index.htlm-ben kiváltja ezt a funkciót //