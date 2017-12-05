(function($){

		$(document).ready(function(){
				
				/*=========	Menu ========*/	
			var links = $("#navbar ul li a "),
				body = $('body'),
				menu = $('nav')[0],
				menuLogo = $('nav img')[0];

				window.addEventListener("scroll",function(){
				
					if(window.scrollY>200){
						menuLogo.classList.remove("logo");
						menuLogo.classList.add("logoSm");
						menu.classList.add("nav-top");
					}
					else{
						menuLogo.classList.remove("logoSm");
						menu.classList.remove("nav-top");
						menuLogo.classList.add("logo");
					}
				
			});

			links.on("click",function(e){
				e.preventDefault();
				var that = $(this),
					diraction = that.attr("href");

					if(diraction ==="#"){
						$('body,html').animate({
					 		scrollTop: 0
						}, 500);
					}
					else{
						$('body,html').animate({
							 scrollTop: $(diraction).offset().top-30
						}, 500);
					}
			});
			

			
				/*=============================*/

				/*=========	Opacity Element ========*/	
				var divTittle = $("div[id]");

				$(window).scroll( function(){

					divTittle.each( function(i){

						var scrollElement = $(this).offset().top-300,
							scrollWindow = $(window).scrollTop();

							if(scrollElement < scrollWindow ){
								$(this).animate({
									opacity: 1
								}, 300);
							}
					} );

				});
				/*=============================*/

				/*=========	Offers ========*/
			var buttons = $("#Offer :button")
				desc1 = $(".desc1");
				desc2 = $(".desc2");

				buttons.on("click", function(){
					that = $(this).attr("value");

					//======== Clear ==============
					buttons.removeClass("active");
					desc1.hide();
					desc2.hide();
					//======================

					if(that === "1"){
						buttons.first().addClass("active");
						desc1.show();
					}
					else {
						buttons.last().addClass("active");
						desc2.show();
					}
			});
				/*=============================*/
				var bigImage = function(url){

					var div = document.createElement("div"),
					    divInner = document.createElement("div"),
						img = new Image(),
						link = url[0].getAttribute("src");

						img.src = link;

					div.classList.add("blackWindow");
					img.classList.add("img-responsive");

					divInner.appendChild(img);
					div.appendChild(divInner);
					
					document.body.appendChild(div);


					 this.addEventListener("keydown",function(e) {        
    					if (e.keyCode == 27) {
       						 document.body.removeChild(div);
						    }
						});

					 document.querySelector(".blackWindow").addEventListener("click",function(){
					 	document.body.removeChild(div);
					 });


					
				};

				/*=========	Gallery Fullscreen========*/
				var img = $("#gallery img");
						

				img.each(function(i,elem){
					var that = $(elem);

					that.on("click",function(){
						bigImage(that);
					});
				});
				

				
				/*=============================*/
		});

		

})(jQuery);