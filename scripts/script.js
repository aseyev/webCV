//slider
var mySlider = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-button'),
    showNextBtn: document.getElementById('show-next-button'),
    slideImage: document.getElementById('slide-img'),

    start: function () {
        //subscribe to events
        this.showPrevBtn.addEventListener('click', function(event) {
            window.alert('hey');
            slider.onShowPrevBtnClick(event);
        });
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick);

        //create image links array
        this.imagesUrls.push('../img/portfolio/CV-cover.jpg');
        this.imagesUrls.push('../img/portfolio/KACIR-cover.jpg');
        this.imagesUrls.push('../img/portfolio/TECHNOMART-Cover.jpg');
    }
}