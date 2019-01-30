// *********** JQUERY START *********** //

$(document).ready(function(){

// Jquey letter plugin call - START//
setTimeout(function(){
	$(document).ready(function(){
		$("#leviathan").letterfx({"fx":"fade","backwards":false,"timing":300,"fx_duration":"100ms","letter_end":"stay","element_end":"stay"})})
},7350);

setTimeout(function(){
	$(document).ready(function(){
		$("#tekst p").letterfx({"fx":"fade","backwards":false,"timing":35,"fx_duration":"100ms","letter_end":"stay","element_end":"stay"})})
},7450);
//Jquery letter plugin call - END//



//SlideOut navigation -START//
var x=0;

$("#nav").on("click", function(event){
	event.stopImmediatePropagation();  //NE RADIIII !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    $("#navigationSlide").animate({width:'toggle', paddingRight: 'toggle', paddingLeft: 'toggle'}, 800);

    if(x==0){
    	x=1;
    	$(this).addClass("active");
    	 $("#navigationSlide").css({display:"flex"});
    }
    else{
    	x=0;
    	$(this).removeClass("active");
    }
});
//SlideOut navigation - END//



//TRIANGLE - START //
var y=false;
$("#triangle").click(function(){
	if (!y){
		$(this).animate({width: "20vw", left:"20vw", height:"46vh", opacity:"1"}, 500);
		setTimeout(function(){$("#triangle").html("<a href='documentation.pdf'><i id='documentation' class='fas fa-file-contract' title='Documentation'></i></a><i id='author' class='fas fa-user-graduate' title='Author'></i>")},500);
		y=true;
		setTimeout(function(){var author= document.querySelector("#author");
							  author.addEventListener("click", autorF);},1000);
	}
	else{
		$(this).animate({width: "4vw", left:"28vw", height:"7vh", opacity:"0.1"}, 500);
		$(this).html("");
		y=false;
	}
});

function autorF(){
	tekst.innerHTML="";
	navHome.setAttribute("class","");
	navLeX.setAttribute("class","");
 	navSpecs.setAttribute("class","");
 	tekst.setAttribute("class","ex2");
 	tekst.setAttribute("style", "border-color:transparent")
 	tekst.innerHTML="<img id='JZ' src='images/me.jpg' alt='Joakim Zebic'><p id='JZp'>Joakim Zebi<span id='prezime'>c</span> 107/17</p>"
}
//TRIANGLE - END //

//FORM - START//

// var passIspit= /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?]).{8,}$/;


var nameRe= /^[A-ZČĆŽŠĐ][a-zčćžšđ]+(\s[A-ZČĆŽŠĐ][a-zčćžšđ]+)+$/;
var emailRe= /^[\w\d\.\_\-]+\@[\w\d\.\-]+\.\w{2,}$/;
var phoneRe= /^\d{3}\/\s\d{3}\-\d{3,4}$/

var name= $("#Name");
var email= $("#Email");
var phone= $("#Phone");
var ddl= $("#ddl");
var txtA= $("#txtA");
var agree= $("#agree");

$("#formButton").click(function(){
	var radio= $("input[type='radio']:checked");
	var flag= true;
	var formData= [];

	if(!nameRe.test(name.val())){
		name.css("borderBottomColor", "crimson");
		$(".formImg:eq(0)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
		$("form i:eq(0)").css("color","crimson");
		flag= false;
	}
	else{
		name.css("borderBottomColor", "mediumspringgreen");
		$(".formImg:eq(0)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
		$("form i:eq(0)").css("color","mediumspringgreen");
		formData.push(name.val());
	}

	if(!emailRe.test(email.val())){
		email.css("borderBottomColor", "crimson");
		$(".formImg:eq(1)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
		$("form i:eq(1)").css("color","crimson");
		flag= false;
	}
	else{
		email.css("borderBottomColor", "mediumspringgreen");
		$(".formImg:eq(1)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
		$("form i:eq(1)").css("color","mediumspringgreen");
		formData.push(email.val());
	}

	if(phone.val().trim()!=""){
		if(!phoneRe.test(phone.val())){
			phone.css("borderBottomColor", "crimson");
			$(".formImg:eq(2)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
			$("form i:eq(2)").css("color","crimson");
			flag= false;
		}
		else{
			phone.css("borderBottomColor", "mediumspringgreen");
			$(".formImg:eq(2)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
			$("form i:eq(2)").css("color","mediumspringgreen");
			formData.push(phone.val());
		}
	}
	else{
		phone.css("borderBottomColor", "#fff");
		$(".formImg:eq(2)").css("borderBottomColor", "#31befa").html("<i class='fa fa-phone' aria-hidden='true'>");
		$("form i:eq(2)").css("color","#31befa");
	}

	if (txtA.val().trim()==""){
		txtA.val("");
		txtA.css("border-color","crimson");
		flag= false;
	}
	else{
		txtA.css("border-color", "mediumspringgreen");
		formData.push(txtA.val().trim());
	}

	if(ddl.val()=="0"){
		ddl.css({"borderBottomColor":"crimson","color":"crimson"});
		flag= false;
	}
	else{
		ddl.css({"borderBottomColor":"mediumspringgreen","color":"mediumspringgreen"});
		formData.push(ddl.val());
	}

	if(radio.length>0){
		formData.push(radio.val());
	}

	if(!(agree.is(":checked"))){
		$("#chkP").css("color","crimson");
		flag=false;
	}
	else{
		$("#chkP").css("color","mediumspringgreen");
	}

	console.log(flag);
	console.log(formData);
});

name.blur(function(){
	if(!nameRe.test(name.val())){
		name.css("borderBottomColor", "crimson");
		$(".formImg:eq(0)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
		$("form i:eq(0)").css("color","crimson");
	}
	else{
		name.css("borderBottomColor", "mediumspringgreen");
		$(".formImg:eq(0)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
		$("form i:eq(0)").css("color","mediumspringgreen");
	}
});

email.blur(function(){
	if(!emailRe.test(email.val())){
		email.css("borderBottomColor", "crimson");
		$(".formImg:eq(1)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
		$("form i:eq(1)").css("color","crimson");
	}
	else{
		email.css("borderBottomColor", "mediumspringgreen");
		$(".formImg:eq(1)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
		$("form i:eq(1)").css("color","mediumspringgreen");
	}
});

phone.blur(function(){
	if(phone.val().trim()!=""){
		if(!phoneRe.test(phone.val())){
			phone.css("borderBottomColor", "crimson");
			$(".formImg:eq(2)").css("borderBottomColor", "crimson").html("<i class='fas fa-times'></i>");
			$("form i:eq(2)").css("color","crimson");
		}
		else{
			phone.css("borderBottomColor", "mediumspringgreen");
			$(".formImg:eq(2)").css("borderBottomColor", "mediumspringgreen").html("<i class='fas fa-check'></i>");
			$("form i:eq(2)").css("color","mediumspringgreen");
		}
	}
	else{
		phone.css("borderBottomColor", "#fff");
		$(".formImg:eq(2)").css("borderBottomColor", "#31befa").html("<i class='fa fa-phone' aria-hidden='true'>");
		$("form i:eq(2)").css("color","#31befa");
	}
});

txtA.blur(function(){
	if (txtA.val().trim()==""){
		txtA.val("");
		txtA.css("border-color","crimson");
	}
	else{
		txtA.css("border-color", "mediumspringgreen");
	}
});

ddl.blur(function(){
	if(ddl.val()=="0"){
		ddl.css({"borderBottomColor":"crimson","color":"crimson"});
	}
	else{
		ddl.css({"borderBottomColor":"mediumspringgreen","color":"mediumspringgreen"});
	}
});

agree.click(function(){
	if(!(agree.is(":checked"))){
		$("#chkP").css("color","crimson");
		flag=false;
	}
	else{
		$("#chkP").css("color","mediumspringgreen");
	}
});


//FORM - END//


});

// *********** JQUERY END *********** //

var tekst= document.querySelector("#tekst");

var navHome= document.querySelector("#home");
var navLeX= document.querySelector("#LeX");
var navSpecs= document.querySelector("#specs");

navHome.addEventListener("click", Home);
navLeX.addEventListener("click", LeX);
navSpecs.addEventListener("click", Specs);

function Home(){
	if (navHome.getAttribute("class")=="active")return;
	else{
		tekst.setAttribute("class","");
		navHome.setAttribute("class", "active");
		tekst.innerHTML="<h1 id='th1'>Y2 Tech</h1><h2 id='th2'>PROJECT: <span id='leviathan'>LEVIATHAN X</span></h2><p id='tp'>Step into the future with confidence with LEVIATHAN X. First laptop in the world that uses touchpad as additional screen. Dive into enjoyment and explore whole another dimension of multitasking. With new touchpad screen you now have the whole world at your fingertips.</p><img id='map' src='images/map.png' alt='world map' />";
		navLeX.setAttribute("class","");
		navSpecs.setAttribute("class", "");
		tekst.setAttribute("style","width:35vw");
		document.querySelector("#map").setAttribute("style","animation:none; opacity:1");
		document.querySelector("#th1").setAttribute("style","animation:none; opacity:1");
		document.querySelector("#th2").setAttribute("style","animation:none; opacity:1");
		document.querySelector("#tp").setAttribute("style","animation:none; opacity:1");
	}
}

var pLaptop=["<span>Leviathan X</span> features up to an 8th Generation <span>Intel Core i9</span> hexa-core processor with <span>16GB of DDR4 RAM</span> and gaming-grade <span>NVIDIA GeForce GTX 1050</span>. Its astonishing processing power shames most desktops, and its ultrafast up to <span>1TB PCIe x4 SSD</span> storage delivers 3000MB/s read speeds for superb responsiveness","With an astonishing resolution of <span>3840x2160</span> pixels the <span>4K UHD NanoEdge display</span> is something to behold. We’ve engineered <span>282 pixels</span> into every single inch of the screen to make sure that everything is pin-sharp — from the finest details in photos and videos to the tiniest text.","Heat is the enemy of performance. <span>Leviathan X</span> stays cool at all times with its highly efficient <span>dual-fan cooling system</span> that incorporates three heat pipes. Even though the <span>Leviathan X</span> is more powerful than ever, this advanced cooling design ensures that it stays cool for maximum performance, <span>anytime and anywhere</span>."];
var xAppear=false;
var xClick=false;
function LeX(){
	if (navLeX.getAttribute("class")=="active")return;
	else{
		navLeX.setAttribute("class", "active");
		tekst.innerHTML="<img id='laptop' src='images/laptop.png' alt='laptop' />";
		document.querySelector("#laptop").addEventListener("click",
											function(){
												this.setAttribute("class","laptopClick");
												this.setAttribute("style","");
												for(var i=1;i<=3;i++){
													tekst.innerHTML+="<p id='p" + i +"'>"+ pLaptop[i-1] +"</p>";
												}
												xClick=true;;
											});
		navHome.setAttribute("class","");
		navSpecs.setAttribute("class","");
		tekst.setAttribute("style","border-color:transparent")
		if(!xAppear){
			tekst.setAttribute("class","ex");
			xAppear=true;
		}
		else{
			if(!xClick){
				tekst.setAttribute("class","ex2"); 	
				document.querySelector("#laptop").setAttribute("style","animation:none; opacity:1");
			}
			else{
				tekst.setAttribute("class","ex2");
				for(var i=1;i<=3;i++){
					tekst.innerHTML+="<p id='p" + i +"'>"+ pLaptop[i-1] +"</p>";
				}	
				document.querySelector("#laptop").setAttribute("class","laptopClick");
				document.querySelector("#laptop").setAttribute("style","animation:none; top: 15vh; right: 29vw; height: 45vh;");
				document.querySelector("#p1").setAttribute("style","animation: none; transform: translate(0, 0); opacity: 1;");
				document.querySelector("#p2").setAttribute("style","animation: none; transform: scale(1); opacity: 1;");
				document.querySelector("#p3").setAttribute("style","animation: none; transform: translate(0, 0); opacity: 1;");
			}
		}
	}
}

var dotPos=["top:25vh; right:36vw", "top:45vh; right:23vw", "top:68vh; right:32vw"];
var textPos=["top:11vh; right:18vw", "top:35vh; right:1vw", "top:85vh; right:20vw"];
var clicked=false;
function Specs(){
	if (navSpecs.getAttribute("class")=="active")return;
	else{
		tekst.setAttribute("class","");
		navSpecs.setAttribute("class", "active");
		tekst.innerHTML="<img id='laptopSpec' src='images/laptop2.png' alt='Laptop touchpad screens' /><div class='dot'></div><div class='dot'></div><div class='dot'></div><div class='reveal'>With the resolution of 3840x2160 pixels we made sure you never miss any important detail.</div><div id='shorter' class='reveal'>Flat waterproof mechanical keyboard with backlights. No NumPad means more space for easy typing.</div><div class='reveal'>Touchpad of the future. This is what LEVIATHAN X is recognizable for. It serves as additional screen to make your multitasking top notch.</div>";
		navLeX.setAttribute("class","");
		navHome.setAttribute("class", "");
		tekst.setAttribute("style","border-color:transparent")
		var tacke= document.querySelectorAll(".dot");
		var rev= document.querySelectorAll(".reveal");
		document.querySelector("#laptopSpec").setAttribute("class","laptopSpecAnimation");
		for(let i=0; i<tacke.length; i++){
			rev[i].setAttribute("style", textPos[i]);
			tacke[i].setAttribute("style", dotPos[i]);
			tacke[i].addEventListener("click", function(){rev[i].style.opacity=1;})
		}
		if (!clicked){
			for(let i=1; i<=3; i++)setTimeout(function(){tacke[i-1].style.opacity=1;},2000+(i*500));
			clicked=true;
		}
		else{
			for(let i=1; i<=3; i++)tacke[i-1].style.opacity=1;
			document.querySelector("#laptopSpec").setAttribute("class","");
		}
	}

}


document.querySelector("#plane").addEventListener("click", formIn);

function formIn(){
	var contact=document.querySelector("#contact");
	contact.setAttribute("style","left:0; bottom:0; opacity:1");
}

document.querySelector("#X").addEventListener("click",formOut);

function formOut(){
	var contact=document.querySelector("#contact");
	contact.setAttribute("style","left:-100%; bottom:-100%; opacity:0");
}


var hand= document.querySelector("#hand");
hand.addEventListener("click", openHand);

var handFlag=false;
function openHand(){
	if(!handFlag){
		document.querySelector("#handDiv").setAttribute("style","transform: scale(1);")
		handFlag=true;
	}
	else{
		document.querySelector("#handDiv").removeAttribute("style");
		handFlag=false;
	}
}



// 00webhost hiding ///

$(document).ready(function(){
	$("body div:last").css("display","none");
});

