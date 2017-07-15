ymaps.ready(init);
    var myMap,
    	myPlacemark1,
    	myPlacemark;


    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.67068375, 29.90353240],
            zoom: 16
        });

        myPlacemark1 = new ymaps.Placemark([59.67068375, 29.90353240], { 
        	balloonContentHeader: 'Пилорама Silva',
		    balloonContentBody: 'Пилорама Silva',
		    balloonContentFooter: 'Брус, доска по лучшим ценам',
		    hintContent: 'Пиломатериалы, напрямую от производителя'
        });

        // myMap.geoObjects.add(myPlacemark1);

        var myPlacemark = new ymaps.Placemark([59.67068375, 29.90353240], {
        	balloonContentHeader: 'Пилорама Silva',
		    balloonContentBody: 'Пилорама Silva',
		    balloonContentFooter: 'Брус, доска по лучшим ценам',
		    hintContent: 'Пиломатериалы, напрямую от производителя'
        }, {
	        iconLayout: 'default#image',
	        iconImageHref: 'img/png/pointer.png',
	        iconImageSize: [60, 64],
	        iconImageOffset: [-30, -74]
	    });

	    myMap.geoObjects.add(myPlacemark);

    }

var link = document.querySelector(".btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content__close")
var overlay = document.querySelector(".modal-overlay")

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});




