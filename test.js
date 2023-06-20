// const yourName = prompt("Pentru inceput as dori sa iti aflu numele daca imi permiti");
const intrebare = document.getElementsByClassName('question');
const link = document.getElementById('finish');
const question1 = document.getElementById('1');
const question2 = document.getElementById('2');
const question3 = document.getElementById('3');
const question4 = document.getElementById('4');
const question5 = document.getElementById('5');
const question6 = document.getElementById('6');
const question7 = document.getElementById('7');
const question8 = document.getElementById('8');
const question9 = document.getElementById('9');
const question10 = document.getElementById('10');
const question11 = document.getElementById('11');
const question12 = document.getElementById('12');
const question13 = document.getElementById('13');
const question14 = document.getElementById('14');
const question15 = document.getElementById('15');
const question16 = document.getElementById('16');
const question17 = document.getElementById('17');
const question18 = document.getElementById('18');
const question19 = document.getElementById('19');
const question20 = document.getElementById('20');
const question21 = document.getElementById('21');
const question22 = document.getElementById('22');
const question23 = document.getElementById('23');
const question24 = document.getElementById('24');
const question25 = document.getElementById('25');
const question26 = document.getElementById('26');
const question27 = document.getElementById('27');
const question28 = document.getElementById('28');
const question29 = document.getElementById('29');
const question30 = document.getElementById('30');
const question31 = document.getElementById('31');
const question32 = document.getElementById('32');
const question33 = document.getElementById('33');
const question34 = document.getElementById('34');
const question35 = document.getElementById('35');
const question36 = document.getElementById('36');

let raspuns1, raspuns2, raspuns3, raspuns4, raspuns5, raspuns6, raspuns7, raspuns8, raspuns9, raspuns10, raspunsuri;
raspuns1 = raspuns2 = raspuns3 = raspuns4 = raspuns5 = raspuns6 = raspuns7 = raspuns8 = raspuns9 = raspuns10 = raspunsuri = 0;

for(let i = 0; i < intrebare.length; ++i)
    intrebare[i].addEventListener('change', () => {
        if(i == 0) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question1.checked === true) alegeri++, vector[0] = 1;
            if(question2.checked === true) alegeri++, vector[1] = 1;
            if(question3.checked === true) alegeri++, vector[2] = 1;
            if(question4.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns1 += (vector[0] * 10);
                raspuns1 += (vector[1] * 20);
                raspuns1 += (vector[2] * 30);
                raspuns1 += (vector[3] * 40);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns1 = 0;
                raspunsuri--;
            }
        }
        if(i == 1) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question5.checked === true) alegeri++, vector[0] = 1;
            if(question6.checked === true) alegeri++, vector[1] = 1;
            if(question7.checked === true) alegeri++, vector[2] = 1;
            if(question8.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns2 += (vector[0] * 40);
                raspuns2 += (vector[1] * 20);
                raspuns2 += (vector[2] * 30);
                raspuns2 += (vector[3] * 10);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns2 = 0;
                raspunsuri--;
            }
        }
        if(i == 2) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question9.checked === true) alegeri++, vector[0] = 1;
            if(question10.checked === true) alegeri++, vector[1] = 1;
            if(question11.checked === true) alegeri++, vector[2] = 1;
            if(question12.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns3 += (vector[0] * 40);
                raspuns3 += (vector[1] * 20);
                raspuns3 += (vector[2] * 30);
                raspuns3 += (vector[3] * 10);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns3 = 0;
                raspunsuri--;
            }
        }
        if(i == 3) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question13.checked === true) alegeri++, vector[0] = 1;
            if(question14.checked === true) alegeri++, vector[1] = 1;
            if(question15.checked === true) alegeri++, vector[2] = 1;
            if(question16.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns4 += (vector[0] * 10);
                raspuns4 += (vector[1] * 20);
                raspuns4 += (vector[2] * 30);
                raspuns4 += (vector[3] * 40);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns4 = 0;
                raspunsuri--;
            }
        }
        if(i == 4) {
            let alegeri = 0, vector = [0, 0];
            if(question17.checked === true) alegeri++, vector[0] = 1;
            if(question18.checked === true) alegeri++, vector[1] = 1;
            if(alegeri == 1) {
                raspuns5 += (vector[0] * 50);
                raspuns5 += (vector[1] * 25);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns5 = 0;
                raspunsuri--;
            }
        }
        if(i == 5) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question19.checked === true) alegeri++, vector[0] = 1;
            if(question20.checked === true) alegeri++, vector[1] = 1;
            if(question21.checked === true) alegeri++, vector[2] = 1;
            if(question22.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns6 += (vector[0] * 50);
                raspuns6 += (vector[1] * 20);
                raspuns6 += (vector[2] * 30);
                raspuns6 += (vector[3] * 40);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns6 = 0;
                raspunsuri--;
            }
        }
        if(i == 6) {
            let alegeri = 0, vector = [0, 0];
            if(question23.checked === true) alegeri++, vector[0] = 1;
            if(question24.checked === true) alegeri++, vector[1] = 1;
            if(alegeri == 1) {
                raspuns7 += (vector[0] * 10);
                raspuns7 += (vector[1] * 30);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns7 = 0;
                raspunsuri--;
            }
        }
        if(i == 7) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question25.checked === true) alegeri++, vector[0] = 1;
            if(question26.checked === true) alegeri++, vector[1] = 1;
            if(question27.checked === true) alegeri++, vector[2] = 1;
            if(question28.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns8 += (vector[0] * 10);
                raspuns8 += (vector[1] * 10);
                raspuns8 += (vector[2] * 10);
                raspuns8 += (vector[3] * 10);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns8 = 0;
                raspunsuri--;
            }
        }
        if(i == 8) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question29.checked === true) alegeri++, vector[0] = 1;
            if(question30.checked === true) alegeri++, vector[1] = 1;
            if(question31.checked === true) alegeri++, vector[2] = 1;
            if(question32.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns9 += (vector[0] * 10);
                raspuns9 += (vector[1] * 20);
                raspuns9 += (vector[2] * 30);
                raspuns9 += (vector[3] * 50);
                raspunsuri++;
                alert("DOAR UN SFAT: alege celestial bro");
            }
            else if(alegeri != 1){
                raspuns9 = 0;
                raspunsuri--;
            }
        }
        if(i == 9) {
            let alegeri = 0, vector = [0, 0, 0, 0];
            if(question33.checked === true) alegeri++, vector[0] = 1;
            if(question34.checked === true) alegeri++, vector[1] = 1;
            if(question35.checked === true) alegeri++, vector[2] = 1;
            if(question36.checked === true) alegeri++, vector[3] = 1;
            if(alegeri == 1) {
                raspuns10 += (vector[0] * 50);
                raspuns10 += (vector[1] * 20);
                raspuns10 += (vector[2] * 40);
                raspuns10 += (vector[3] * 10);
                raspunsuri++;
            }
            else if(alegeri != 1){
                raspuns10 = 0;
                raspunsuri--;
            }
        }
    });

link.addEventListener('click', () => {
    if(raspunsuri != 10) {
        alert("Mai gandeste te fratello, ori vrei sa fentezi sistemul ori n ai raspuns la tot!");
    }
    else {
        let puncte = raspuns1 + raspuns2 + raspuns3 + raspuns4 + raspuns5 + raspuns6 + raspuns7 + raspuns8 + raspuns9 + raspuns10;
        localStorage.setItem('puncte', puncte);
        location.href = "scor.html";
    }
})
