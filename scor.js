const puncte = localStorage.getItem('puncte');
const alegere = localStorage.getItem('choice');
const showScore = document.getElementById('score');
const pic = document.getElementById('picture');
const paragraf = document.getElementById('ganduri');


showScore.innerText = puncte;
if(alegere === "capybara") {
    if(puncte < 250) {
        pic.style.backgroundImage = "url('images/capybaraSad.jpeg')";
        paragraf.innerText = "Cam putine capybara varutule. ai facut o sa planga acum esti pedepsit sa il iei pe robert la un tiramisu dak stii kum zyk";
    }
        else if(puncte >= 250 && puncte < 300) {
            pic.style.backgroundImage = "url('images/capybaraNormal.jpeg')";
            paragraf.innerText = "E ok fratello esti in cei 90%, se putea mai bine dar cu siguranta se putea mai rau, ai scapat de pedeapsa dar nu primesti nici premiu";
        }
            else {
                pic.style.backgroundImage = "url('images/capybaraCool.jpeg')";
                paragraf.innerText = "Bine baa esti o capybara adevarata iar premiul tau este zicala mea preferata: 'nu lasa pe maine ce poti manca azi'";
            }
}
else if(alegere === "rata") {
    if(puncte < 250) {
        pic.style.backgroundImage = "url('images/rataSad.jpeg')";
        paragraf.innerText = "Plange rata din vina ta!!! nu pot sa cred ca faci asa ceva, nu am de ales decat sa te pedepsesc. 20 de flotari acum hai hai!";
    }
        else if(puncte >= 250 && puncte < 300) {
            pic.style.backgroundImage = "url('images/rataNormala.jpeg')";
            paragraf.innerText = "E ok esti la mijloc, poti mai mult varutule dar ai grija ca este treapta si mai jos nu doar in sus!";
        }
            else {
                pic.style.backgroundImage = "url('images/rataCool.jpeg')";
                paragraf.innerText = "Forta chiparosule sunt mandru ca ai ales sa fii rata mea de incredere. keep up!";
            }
}
else if(alegere === "papagal") {
    if(puncte < 250) {
        pic.style.backgroundImage = "url('images/papagalSad.jpeg')";
        paragraf.innerText = "Papagalul Galu este suparat pe tine asa ca trebuie sa dai unui prieten o punga de seminte pentru a te reimprieteni cu el.";
    }
        else if(puncte >= 250 && puncte < 300) {
            pic.style.backgroundImage = "url('images/papagalNormal.jpeg')";
            paragraf.innerText = "Merge merge. poti mai mult, nu uita ca eu cred in tine!";
        }
            else {
                pic.style.backgroundImage = "url('images/papagalCool.jpeg')";
                paragraf.innerText = "Cel mai smecher papagal din parcare ai castigat o punga de seminte de la iustin";
            }
}
else if(alegere === "peppa") {
    if(puncte < 250) {
        pic.style.backgroundImage = "url('images/peppaSad.jpeg')";
        paragraf.innerText = "Tot ce sper e ca nu esti Emilian, urat frate esti pedepsit sa nu mananci porc 2 zile";
    }
        else if(puncte >= 250 && puncte < 300) {
            pic.style.backgroundImage = "url('images/peppaNormal.jpeg')";
            paragraf.innerText = "Peppa nu este suparata nici fericita, esti la limita fratello";
        }
            else {
                pic.style.backgroundImage = "url('images/peppaCool.jpeg')";
                paragraf.innerText = "Esti preferatul purcelului ai castigat un cabanos de la teofil hehe";
            }
}
else {
    if(puncte < 250) {
        pic.style.backgroundImage = "url('images/puiSad.jpeg')";
        paragraf.innerText = "Puiul avea niste asteptari de la tine...";
    }
        else if(puncte >= 250 && puncte < 300) {
            pic.style.backgroundImage = "url('images/puiNormal.jpeg')";
            paragraf.innerText = "Esti un pui ok, pazea la vulpile rapitoare";
        }
            else {
                pic.style.backgroundImage = "url('images/puiCool.jpeg')";
                paragraf.innerText = "Pui cu valoare, imi place de tine. ai castigat o excursie la safir din partea oricui vrei bine baaa";
            }
}