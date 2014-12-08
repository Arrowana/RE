/* Arowana slideshow */

//set slideshow 3 first visible only
var speed = 300;
var nb_shown=3;
var moveSize=$('#slideshow .box').css('width');
var move = "-"+moveSize;
boxes=$('#slideshow .box');
for(var i = nb_shown; i < boxes.length; i++) {
	$(boxes[i]).css('display', 'none');
}

$('#next').on('click', function(){
	console.log("Clicked Next");
	
	//Recupere les element visible
	visible = getVisible();
	//Element suivant le dernier élement visible
	next_invisible=$(visible).last().next();
	
	if(next_invisible.is('.box')){
		//Premier div visible à gauche
		first=visible[0];
		
		//Lance l'animation de slide
		$(first).css('marginLeft', 0);
		$(first).animate({
		'margin-left' : move
		},speed, function(){
				//Appliquer lorsque l'animation est finie
				$(this).css('display','none');
		});

		$(next_invisible).css('display', 'inline-block');
	}
});

$('#previous').on('click', function(){
	console.log("Clicked Previous");
	
	//Recupere les element visible
	visible = getVisible();
	//Premier div visible à gauche
	first=visible[0];
	//Element précédent le dernier élement visible
	last_invisible=$(first).prev()
	//Premier div visible à droite
	last=visible[2];
	
	if(last_invisible.is('.box')){
		//Lance l'animation de slide
		$(last_invisible).css('marginLeft', move);
		$(last_invisible).css('display', 'inline-block');
		
		$(last_invisible).animate({
		'marginLeft' : '0px'
		},speed, function(){
			$(last).css('display', 'none');
		}).delay(speed);
	}
});

/* Fonction utilitaires */

function getVisible(){
	return boxes.filter(function(){
		return $(this).css('display') == 'inline-block';
	});
};


