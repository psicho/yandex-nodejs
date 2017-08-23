'use strict';

console.log('Тестовое задание Yandex');

var div = document.getElementById('resultContainer');
var form = document.getElementById('myForm');
var fio = form.elements.fio;
var email = form.elements.email;
var phone = form.elements.phone;
var errfio = 0;
var errphone = 0;
var erremail = 0;
var namefields = "";

function submiting() {
//	fiof();
//	phonef();
	div.innerText = fio.value + '\n' + email.value + '\n' + phone.value;
}

function fiof() {
    var p = 0, w = 0, slo = 0, i, fio1;
    errfio = 0;
    fio1 = fio.value;
//    console.log('fio1.length ' + fio1.length);
    for (i = 0; i < fio1.length; i++) {
        if (fio1[i].match(/[a-zA-Zа-яА-Я ]/) !== null) {
        	w = w + 1;
        	if (fio1[i] === ' ' & w > 0) {
        		p = p + 1;
//        		console.log('w = ' + w);
        		w = 0;
        		slo = slo + 1;
        	}
        	if (p == 2 & i == fio1.length - 1 & w > 0) {
        		slo = slo + 1;
        	}
//			fio.style.border = '';
			fio.removeAttribute('class')
			if (p + slo !== 5) {
				fio.setAttribute('class', 'error');
			}
			else fio.removeAttribute('class')
        }
		else {
            errfio = 1;
            return fio.setAttribute('class', 'error'); //			fio.style.border = '1px solid red';
        }
    }
    if (p + slo == 5) {
        errfio = 0;
        fio.removeAttribute('class');

        } else {
            errfio = 1;
            fio.setAttribute('class', 'error');
        }
//    div.innerText = 'пробелов = ' + p + '; слов = ' + slo;
}


function phonef() {
	var d = 0, s = 0, i, phone1;
    errphone = 0;
	phone1 = phone.value;
	for (i = 0; i < phone1.length; i++) {
        if (phone1[i].match(/[0-9()+-]/) !== null) {
			if (phone1[i].match(/[0-9]/) !== null) {
            	d = d + 1;
				s = +s + +phone1[i];
//				console.log('d = ' + d + ' s = ' + s);
				if (s > 30 || d > 11 || phone1[1] != 7) {
                    errphone = 1;
					return phone.setAttribute('class', 'error');
				}
			}
            if (phone1[i].match(/[()+-]/) !== null) {
				if (phone1[0] != '+' || phone1[2] != '(' || phone1[6] != ')' || phone1[10] != '-' || phone1[13] != '-') {
				    errphone = 1;
                    return phone.setAttribute('class', 'error');
				}
            }
			phone.removeAttribute('class')
        }
		else {
            errphone = 1;
            return phone.setAttribute('class', 'error');
        }
    }
//    div.innerText = 'Правильный телефон!';
}

//function alerting() {
//	fiof();
//	phonef();
//    div.innerText = 'ФИО ' + fio.value;
//}

function emailf() {
	var d = 0, s = 0, i, email1;
    erremail = 0;
	email1 = email.value;
	if (email1.match(/@/) > 1) {
        erremail = 1;
		return email.setAttribute('class', 'error');
	}
	if (email1.match(/^.+[^@]@ya.ru$/) !== null || email1.match(/^.+@yandex.ru$/) !== null || email1.match(/^.+@yandex.ua$/) !== null || email1.match(/^.+@yandex.by$/) !== null || email1.match(/^.+@yandex.kz$/) !== null || email1.match(/^.+@yandex.com$/) !== null) {
		return email.removeAttribute('class');
	}
	else {
        erremail = 1;
        return email.setAttribute('class', 'error');
    }
}

// Глобальный объект MyForm:

//function MyForm()= {
//	funtion validate() {
//        console.log('validate()');
//	}
//	function getData() {
//        console.log('getData()');
//    }
//	function setData(Object) {
//        console.log('setData(Object)');
//    }
//	function submit() {
//        console.log('submit()');
//    }
//}

$(document).ready(function () {
    $('#submitButton').on('click', function () {
        console.log('OK');
        fiof();
        emailf();
        phonef();
        if (errphone === 0 && erremail === 0 && errfio === 0) {
            email.removeAttribute('class');
            phone.removeAttribute('class');
            fio.removeAttribute('class');
            $('#submitButton').hide();
            $.ajax({
                url: 'success.json',
                dataType: 'json',
                async: false,
                success: function (data, textStatus) {
                    $.each(data, function(i, val) {
                        console.log(data.i + ' ' + val);
                    })
                }
            });
//            $.ajax({url:"error.json"}).success(function(data){ alert(data); });
        }
//        else {
//            $.post('error.json')
//        }
    })
})
