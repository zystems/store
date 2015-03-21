$(document).ready(function() {
	$('.reklamation').on('click', function() {
		location = 'dev/html/reklamation-start.html';
	});	
	$('.App-header--navigation-left').on('click', function() {
		switch (location.pathname) {
			case menuItems[1].url :
				location = '../../'+menuItems[0].url;
				break;
			case menuItems[2].url :
				location = menuItems[1].url;
				break;
		}
	});
	$('.App-footer--navigation-right').on('click', function() {
		switch (location.pathname) {
			case menuItems[1].url :
				location = menuItems[2].url;
				break;
		}
	});
	setInterval(changeBackground, 7000);


	// console.log($('#iconSet'));
	// var segment_str = document.referrer;
	// var segment_array = segment_str.split( '/' );
	// var last_segment = segment_array.pop();
	// var morph = new SVGMorpheus('#iconSet');
	// if (location.pathname == menuItems[1].url && last_segment != 'reklamation-confirm.html') {
	// 	setTimeout(function() {
	// 		morph.to('back-arrow');
	// 	}, 50);
	// }
	// else {
	// 	$('#iconSet').children()[0]
	// }
});

function changeBackground() {
	adCounter = adCounter+1;
	if (adCounter > 6) {
		adCounter = 1;
	}
	var urlAd = '../../dev/res/gridhead'+adCounter+'.png';
	$('.ads').css('backgroundImage', 'url('+urlAd+')');
}

var adCounter = 1;
var menuItems = [
	{
        name : 'Main',  
        url : 'index.html'  
    },  
    {
        name : 'Reklamation',
        url : '/dev/html/reklamation-start.html'  
    },
    {
        name : 'Reklamation-confirm',  
        url : '/dev/html/reklamation-confirm.html'
    }]