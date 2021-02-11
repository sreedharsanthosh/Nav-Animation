const animatingLine = document.querySelector('.animating-line');

var typed = new Typed('.animating-line' , {
	strings:[
		'________________________________________________________________________________________________________________________________________________________________'
	]
})

gsap.to('.nav-line' , {x: 0 , delay: 1})
