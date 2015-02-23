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
});

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