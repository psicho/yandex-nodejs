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
//        console.log('fio1[i].match= ' + fio1[i].match(/[a-zA-Zа-яА-Я]/));
        if (fio1[i].match(/[a-zA-Zа-яА-Я ]/) !== null) {
            w = w + 1;
            if (fio1[i] === ' ' & w > 0) {
            p = p + 1;
            console.log('w = ' + w)
            w = 0;
            slo = slo + 1;
            }
            if (p == 2 & i == fio1.length - 1 & w > 0) {
            slo = slo + 1;
            }
        } else {
            err = 1;
            return div.innerText = 'Ошибка!!!';
//            break;
        }

    }
    div.innerText = 'пробелов = ' + p + '; слов = ' + slo;
}

function alerting() {
    div.innerText = 'ФИО ' + fio.value;
}
