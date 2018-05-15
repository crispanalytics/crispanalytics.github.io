$(document).ready(function(){
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	$.get("http://crispanalytics.com/blog/wp-json/wp/v2/posts", function(data,status){
		$('.crisp-blog').css("display","block");
		for(i=0;i<3;++i){
			$('.crisp-blog ul').append('<li><a class="link" href=""></a><div class="date"></div><div class="category"></div><div class="title"></div><div class="author"><div class="name"></div></div></li>');
			var post_date = new Date(data[i].date);
			$('.crisp-blog ul li:nth-child('+(i+1)+') .date').html(post_date.getDate()+" "+month[post_date.getMonth()]+" "+post_date.getFullYear());

			var post_title = data[i].title.rendered;
			$('.crisp-blog ul li:nth-child('+(i+1)+') .title').html('<a href="'+data[i].link+'">'+post_title+'</a>');
			$('.crisp-blog ul li:nth-child('+(i+1)+') .link').attr("href",data[i].link);

			putCategories(i+1, data[i].id);
			putAuthor(i+1, data[i].author);
		}
		//console.log(data[0].date+' '+data[0].link+" "+data[0].title.rendered+" "+data[0].author+" "+JSON.stringify(data[0].categories));
	});
particlesJS("home",{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":683.3166833166833,"line_linked":{"opacity":1}},"bubble":{"distance":840.4999147318921,"size":271.72827172827175,"duration":2,"opacity":0.9338887941465469,"speed":3},"repulse":{"distance":105.57003759917487,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});$('.wp1').waypoint(function(){$('.wp1').addClass('animated fadeInUp');},{offset:'75%'});$('.wp2').waypoint(function(){$('.wp2').addClass('animated fadeInUp');},{offset:'75%'});$('.wp3').waypoint(function(){$('.wp3').addClass('animated fadeInRight');},{offset:'75%'});$('.flexslider').flexslider({animation:"slide"});$('.single_image').fancybox({padding:4,});$('[data-toggle="tooltip"]').tooltip();$('.nav-toggle').click(function(){$(this).toggleClass('active');$('.header-nav').toggleClass('open');event.preventDefault();});$('.header-nav li a').click(function(){$('.nav-toggle').toggleClass('active');$('.header-nav').toggleClass('open');});$(function(){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=20){$('section.navigation').addClass('fixed');$('header').css({"border-bottom":"none","padding":"35px 0"});$('header .member-actions').css({"top":"26px",});$('header .navicon').css({"top":"34px",});}else{$('section.navigation').removeClass('fixed');$('header').css({"border-bottom":"solid 1px rgba(255, 255, 255, 0.2)","padding":"50px 0"});$('header .member-actions').css({"top":"41px",});$('header .navicon').css({"top":"48px",});}});});$(function(){$('a[href*=#]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')&&location.hostname===this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},2000);return false;}}});});});

function putCategories(linum, postid){
	$.get("http://crispanalytics.com/blog/wp-json/wp/v2/categories?post="+postid, function(data){
		for(i in data){
			$('.crisp-blog ul li:nth-child('+linum+') .category').append(data[i].name+' &nbsp; &nbsp;');
		}
	});
}

function putAuthor(linum, authorid){
	$.get("http://crispanalytics.com/blog/wp-json/wp/v2/users/"+authorid, function(data){
			$('.crisp-blog ul li:nth-child('+linum+') .author .name').append(" "+data.name);
	});
}
