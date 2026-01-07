const zoomBtns = document.querySelectorAll(".btn-primary");
const closeBtns = document.querySelectorAll(".close");
const overlayImg = document.querySelectorAll(".overlay");

function openImage(index) {
    overlayImg[index].classList.remove("d-none");
}

function closeImage(index) {
    overlayImg[index].classList.add("d-none");
}

zoomBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        openImage(index);
    })
})
closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        closeImage(index);
    })
})
overlayImg.forEach((overlay, index) => {
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            closeImage(index);
        }
    });
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        overlayImg.forEach((overlay, index) => {
            if (!overlay.classList.contains('d-none')) {
                closeImage(index);
            }
        });
    }
});