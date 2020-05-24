var doc = document;
var form_rezult = doc.getElementById("rezult");
		form_rezult.setAttribute("type", "number");
		form_rezult.setAttribute("placeholder", "0");
		doc.getElementById("rezult").value += form_rezult.innerHTML;

var	form_get9 = doc.getElementById("id9");
	form_get9.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id9").value;
	};
var	form_get8 = doc.getElementById("id8");
	form_get8.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id8").value;
	};
var	form_get7 = doc.getElementById("id7");
	form_get7.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id7").value;
	};
var	form_get6 = doc.getElementById("id6");
	form_get6.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id6").value;
	};
var	form_get5 = doc.getElementById("id5");
	form_get5.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id5").value;
	};
var	form_get4 = doc.getElementById("id4");
	form_get4.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id4").value;
	};
var	form_get3 = doc.getElementById("id3");
	form_get3.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id3").value;
	};
var	form_get2 = doc.getElementById("id2");
	form_get2.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id2").value;
	};
var	form_get1 = doc.getElementById("id1");
	form_get1.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id1").value;
	};
var	form_get0 = doc.getElementById("id0");
	form_get0.onclick = function (){
		doc.getElementById("rezult").value += doc.getElementById("id0").value;
	};
var form_ac = doc.getElementById("ac");
	form_ac.onclick = function (){
		doc.getElementById("rezult").value = '';
	};
var form_gumar = doc.getElementById("gumar");
	form_gumar.onclick = function (){
		var znak = doc.getElementById("gumar").placeholder = "+";
		doc.getElementById("archivnum").value = doc.getElementById("rezult").value;
		doc.getElementById("archiv").innerHTML = znak;
		doc.getElementById("rezult").value = '';
	};
var form_minus = doc.getElementById("minus");
	form_minus.onclick = function (){
		var znak = doc.getElementById("minus").placeholder = "-";
		doc.getElementById("archivnum").value = doc.getElementById("rezult").value;
		doc.getElementById("archiv").innerHTML = znak;
		doc.getElementById("rezult").value = '';
	};
var form_bazmapatkac = doc.getElementById("bazmapatkac");
	form_bazmapatkac.onclick = function (){
		var znak = doc.getElementById("bazmapatkac").placeholder = "x";
		doc.getElementById("archivnum").value = doc.getElementById("rezult").value;
		doc.getElementById("archiv").innerHTML = znak;
		doc.getElementById("rezult").value = '';
	};
var form_bajanac = doc.getElementById("bajanac");
	form_bajanac.onclick = function (){
		var znak = doc.getElementById("bazmapatkac").placeholder = "/";
		doc.getElementById("archivnum").value = doc.getElementById("rezult").value;
		doc.getElementById("archiv").innerHTML = znak;
		doc.getElementById("rezult").value = '';
	}
var form_tokos = doc.getElementById("tokos");
	form_tokos.onclick = function (){
		var znak = doc.getElementById("bazmapatkac").placeholder = "%";
		doc.getElementById("archivnum").value = doc.getElementById("rezult").value;
		doc.getElementById("archiv").innerHTML = znak;
		doc.getElementById("rezult").value = '';
	}
var form_havasar = doc.getElementById("havasar");
	form_havasar.onclick = function () {
	num1 = parseInt(doc.getElementById("archivnum").value);
	num2 = parseInt(doc.getElementById("rezult").value);
	znak = doc.getElementById("archiv").innerHTML;
	if(znak === "+"){
		doc.getElementById("rezult").value = num1 + num2;
	} else if(znak === "-"){
		doc.getElementById("rezult").value = num1 - num2;
		//alert("aaaa")
	}else if(znak === "x"){
		doc.getElementById("rezult").value = num1 * num2;
	} else if(znak === "/"){
		doc.getElementById("rezult").value = num1 / num2;
	} else if(znak === "%"){
		doc.getElementById("rezult").value = num1*num2/100;
	}
}
