// let primitive1 = "alma";
// let primitive2 = 145;
// let primitive3 = false;

// let array1 = [
//     "alma", 
//     "körte", 
//     "olajbogyó"
// ];

// let array2 = [1, 5, 8];
// let array3 = [false, true, false];

// let newArray = [primitive1, primitive2, primitive3];
// // console.log(newArray);

// let object1 = {
//     "key1": "value",
//     "key2": 345,
//     "key3": true,
//     "key4": {
//         nestedKey: "nestedValue", 
//         nestedKey2: false
//     },
//     "key5": [
//         "cica", "kutya", "mérési hiba", "jetilábnyom", "pizza"
//     ]
// }
// // console.log(array1[2]);

// console.log(object1.key5[4])

/*ÓRAI FELADAT VÉGE*/




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