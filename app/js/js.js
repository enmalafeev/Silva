ymaps.ready(init);
    var myMap,
    	myPlacemark1,
    	myPlacemark;


    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.66976990, 29.90360227],
            zoom: 14
        });

        myPlacemark1 = new ymaps.Placemark([59.66976990, 29.90360227], { 
        	balloonContentHeader: 'Пилорама Silva',
		    balloonContentBody: 'Пилорама Silva',
		    balloonContentFooter: 'Брус, доска по лучшим ценам',
		    hintContent: 'Пиломатериалы, напрямую от производителя'
        });

        // myMap.geoObjects.add(myPlacemark1);

        var myPlacemark = new ymaps.Placemark([59.66976990, 29.90360227], {
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