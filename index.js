"use strict";

console.log('Тестовое задание Yandex');

function submiting () {
	var div = document.getElementById('resultContainer');
    var form = document.getElementById('myForm')
	var fio = form.elements.fio;
	var email = form.elements.email;
	var phone = form.elements.phone;
//	alert(fio.value +'\n' + email.value + '\n' + phone.value);
	div.innerText = fio.value + '\n' + email.value + '\n' + phone.value

//	div.innerHTML = 'Test'
//    alerting ();
//	alert('div ' + div.value);
    }

function fio () {
    var form = document.getElementById('myForm')
    var div = document.getElementById('resultContainer');
    var fio = form.elements.fio;
    var p = 0;
    div.innerText = 'p = ' + p;
    alert(fio);
    for (i = 0; i <= fio.length ; i++) {
        if (fio[i] === ' ') {
            p = p++;
        }

    }
    div.innerText = p;
    alert(p);

}

function alerting () {
    var div = document.getElementById('resultContainer');
    div.innerText = 'ФИО ' + fio.value;
//    document.body.appendChild(div);
    }
var div = document.getElementById('resultContainer');
div.innertext = fio.value + '\n' + email.value + '\n' + phone.value
//console.log(fio.value +'\n' + email.value + '\n' + phone.value);
