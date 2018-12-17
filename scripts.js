// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function populateGallery(imageCount, albumName, albumElement){
    for (var i = 0; i < imageCount; i++){
        albumElement.innerHTML += `
            <div class="singleImageParent"><div style="background-image: url(img/${albumName}/${i+1}.jpg)" class="singleImage" onclick="viewImage(${i+1})"></div></div>
        `;
    } 
}

function viewImage(imageID){
    modal.style.display = "flex";
    imageShower.innerHTML = `
        <span class="close" onclick="closeImage()">&times;</span>
        <img class="popupImage" src="img/${albumName}/${imageID}.webp">
    `
}

function closeImage(){
    modal.style.display = "none";
}
