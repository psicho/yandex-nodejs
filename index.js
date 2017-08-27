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
var contin = 0;

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

$(document).ready(function () {
    div = document.getElementById('resultContainer');
    div.innerText = "Progress";
    div.setAttribute('class', 'progress');
    $('.progress').hide();
    $('#submitButton').on('click', function () {
		var errString = "";
        setTimeout(function() {progr()},0);
//        console.log('OK');
        fiof();
        emailf();
        phonef();
        div.removeAttribute('style');
        $('.progress').show();
        if (errphone === 0 && erremail === 0 && errfio === 0) {
            email.removeAttribute('class');
            phone.removeAttribute('class');
            fio.removeAttribute('class');
            $('#submitButton').hide();
            $('.progress').show();


            var i = Math.round(Math.random()) % 2;
            if (i === 0) {
                $.getJSON('success.json', {}, function (json) {
                        console.log(JSON.stringify(json));
                        div.setAttribute('class', 'success');
                        div.innerText = "Success";
                    });
                return;
            }
            else if (i === 1){
				contin = 1;
                $.getJSON('progress.json', {}, function (json) {
                        console.log(JSON.stringify(json));
                        window.div.setAttribute('class', 'progress');
                        window.div.innerText = "Progress";
//                        sleeping(3)
                    });
            }


        }
        if (errphone === 1 || erremail === 1 || errfio === 1) {
//			var errString = "";
            $.getJSON('error.json', {}, function (json) {
//                        console.log('err ' + JSON.stringify(json));
                        div.setAttribute('class', 'error');
						if (errfio === 1) {errString = errString + fio.value + "\n";}
						if (erremail === 1) {errString = errString + email.value + "\n";}
                        if (errphone === 1) {errString = errString+ phone.value + "\n";}
                        div.innerText = errString;
                    });
        }
    })
})

function sleeping(seconds) {
	var date;
	var sleeping;
	console.log('progress... timeout ' + seconds + ' сек...');
	date = new Date();
	sleeping = new Date();
	while(Math.abs(sleeping.getSeconds() - date.getSeconds()) < seconds) {
		sleeping = new Date();
	}
}

function progr() {
	window.div.setAttribute('class', 'progress');
    window.div.innerText = "Progress";
	setTimeout(function() {valid()},0);
}

function valid() {
    if (contin == 1) {
        console.log('div.getAttribute("class") ' + div.getAttribute('class'))

        while (true) {
            if (div.getAttribute('class') === 'success') {
                return;
            }
			sleeping(3);

            var i = Math.round(Math.random()) % 2;

            if (i === 0) {
                $.getJSON('success.json', {}, function (json) {
                    console.log(JSON.stringify(json));
                    div.setAttribute('class', 'success');
                    div.innerText = "Success";
                });
                return;
            }
            else if (i === 1){
                var stat = "Progress";
//                console.log(i + ' progress')
                $.getJSON('progress.json', {}, function (json) {
                    console.log(JSON.stringify(json));
                    div.setAttribute('class', 'progress');
                    div.innerText = "Progress";
                });
//                sleeping(3);
            }
        }
    }
}


// Глобальный объект MyForm:

function MyForm() {
		function validate() {
			fiof();
			emailf();
			phonef();
			var errString = "";
			if (errfio === 1) {errString = errString + 'ФИО' + "\n";}
			if (erremail === 1) {errString = errString + 'почта' + "\n";}
			if (errphone === 1) {errString = errString+ 'телефон' + "\n";}
			console.log(errString);
			return errString;
		}
};

//MyForm.validate()

//MyForm.getData = 'getData() eee';


//MyForm.setData(Object) = 'setData(Object)';

//MyForm.submit = 'submit() eee';

var dwer = MyForm.validate
console.log(dwer)



//console.log('MyForm.validate = ' + MyForm.validate);
//console.log('MyForm.getData = ' + MyForm.getData);
//console.log('MyForm.submit = ' + MyForm.submit);
