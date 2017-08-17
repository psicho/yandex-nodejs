
window.onload = function () {

//    function submiting () {
//		var form = document.forms[0];
//		var fio = form.elements.fio;
//		var email = form.elements.email;
//		var phone = form.elements.phone;
//		alert('124');
//        console.log(fio.value, email.value, phone.value);
//    }
}

function submiting () {
	var div = document.div;
	var form = document.forms[0];
	var fio = form.elements.fio;
	var email = form.elements.email;
	var phone = form.elements.phone;
	alert(fio.value +'\n' + email.value + '\n' + phone.value);
    console.log(fio.value + email.value + phone.value);
	div.innerHTML = '<p>' + fio.value + '\n' + email.value + '\n' + phone.value + '</p>'
	document.body.appendChild(div);
	alert('div ' + div.value);
    }
