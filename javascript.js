const images = document.getElementsByClassName('pic');
const start = document.getElementById('where');
let vector = [0, 0, 0, 0, 0];

start.addEventListener('click', () => {
    let cnt = 0;
    for(let i = 0; i < images.length; ++i)
        if(vector[i] == 1) cnt++;
    if(cnt == 0) alert("Alege unitatea de masura bai asta!");
        else {
            if(images[0].classList.contains('selected')) localStorage.setItem('choice', "peppa");
            if(images[1].classList.contains('selected')) localStorage.setItem('choice', "rata");
            if(images[2].classList.contains('selected')) localStorage.setItem('choice', "papagal");
            if(images[3].classList.contains('selected')) localStorage.setItem('choice', "capybara");
            if(images[4].classList.contains('selected')) localStorage.setItem('choice', "pui");
            location.href = "test.html";
        }
})

for(let i = 0; i < images.length; ++i) {
    images[i].addEventListener('click', () => {
        images[i].classList.add('selected');
        vector[i] = 1;
        for(let j = 0; j < images.length; ++j)
            if(vector[j] == 1 && j != i) {
                vector[j] = 0;
                images[j].classList.remove('selected');
            }
    })
}