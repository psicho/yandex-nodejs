'use strict';

console.log('Тестовое задание Yandex');

var div = document.getElementById('resultContainer');
var form = document.getElementById('myForm');
var fio = form.elements.fio;
var email = form.elements.email;
var phone = form.elements.phone;
var err = 0;

function submiting() {
	div.innerText = fio.value + '\n' + email.value + '\n' + phone.value;
}

function fiof() {
    var p = 0, w = 0, slo = 0, i, fio1;
    fio1 = fio.value;
    console.log('fio1.length ' + fio1.length);
    for (i = 0; i < fio1.length; i++) {
        if (fio1[i].match(/[a-zA-Zа-яА-Я ]/) !== null) {
        	w = w + 1;
        	if (fio1[i] === ' ' & w > 0) {
        		p = p + 1;
        		console.log('w = ' + w);
        		w = 0;
        		slo = slo + 1;
        	}
        	if (p == 2 & i == fio1.length - 1 & w > 0) {
        		slo = slo + 1;
        	}
        }
		else {
            err = 1;
            return div.innerText == 'Ошибка!!!';
        }
    }
    div.innerText = 'пробелов = ' + p + '; слов = ' + slo;
}

//function fiof1() {
//	fio1 = fio.value;
//	if (fio1.match(/(a-z)+ (a-z)+ (a-z)+]/i) !== null) {
//		div.innerText = 'Ошибок ФИО нет!'
//	}
//	else return div.innerText = 'Найдены ошибки в ФИО!'
//}

function phonef() {
	var d = 0, s = 0, i, phone1;
	phone1 = phone.value;
	console.log('phone1[0] = + ' + phone1[0]);
	console.log('phone1[2] = ( ' + phone1[2]);
	console.log('phone1[6] = ) ' + phone1[6]);
	console.log('phone1[10] = - ' + phone1[10]);
	console.log('phone1[13] = - ' + phone1[13]);
	console.log('phone1.length ' + phone1.length);
	for (i = 0; i < phone1.length; i++) {
        if (phone1[i].match(/[0-9()+-]/) !== null) {
			if (phone1[i].match(/[0-9]/) !== null) {
            	d = d + 1;
				s = +s + +phone1[i];
				console.log('d = ' + d + ' s = ' + s);
				if (s > 30 || d > 11 || phone1[1] != 7) {
					err = 1;
					return div.innerText = 'Ошибка!!!'  + ' i1= ' + i;
				}
			}
            if (phone1[i].match(/[()+-]/) !== null) {
				if (phone1[0] != '+' || phone1[2] != '(' || phone1[6] != ')' || phone1[10] != '-' || phone1[13] != '-') {
					err = 1;
					return div.innerText = 'Ошибка!!!' + ' i2= ' + i;
				}
            }
        }
		else {
            err = 1;
            return div.innerText = 'Ошибка!!!' + ' i3= ' + i;
        }
    }
    div.innerText = 'Правильный телефон!';
}

function alerting() {
    div.innerText = 'ФИО ' + fio.value;
}
