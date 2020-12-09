let selectedModsAmount = 0;
let selectedModsNames = [];

const Items = [
    '100-players',
    'imposter'
]

for (let i = 0; i < Items.length; i++) {
    document.querySelector('.items').innerHTML += `
        <div class="col-md-5 col-md-6 tk">
            <a class="card splash-card">
                <picture>
                    <img class="card-img-top desktop-img pickaxe" src="imgs/mods/${Items[i]}.png">
                </picture>
            </a>
        </div>
    `
}

document.querySelectorAll('.col-md-5.col-md-6 a').forEach(item => {
    item.onclick = () => {
        if (!item.classList.contains('activeCard')) {
            if (selectedModsAmount >= 1) {
                $('.errorMsg').fadeIn();
                document.querySelector('.formError').innerText = 'Maximum 1 Mods!';
            } else {
                item.classList.add('activeCard');
                selectedModsAmount++;
                selectedModsNames.push(item.innerText);
            }
        } else {
            item.classList.remove('activeCard');
            selectedModsAmount--
            selectedModsNames = selectedModsNames.filter(e => e !== item.innerText);
        }
    }
});

function claim() {
    if (selectedModsAmount < 1) return document.querySelector('.holderInput h1').innerText = "Please select at least 1 mod!";

    $('.firstStep').fadeOut(250)
    $('.verifying').fadeIn(2250)

    const statuses = ['Connecting...', 'Authorizing User...', 'User Found!', 'Verifying Human...', 'Attempting Human Verification (1/2)...', 'Failed...', 'Attempting Human Verification (2/2)...', 'Manual Verification is Required to Claim your Among Us Mods!'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length - 1) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 2 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) $('.verify').show();
        }, time)
    }
}


var timerStarted = 0;
var $ = window.jQuery;

function startTimer(duration, display) {

    if (timerStarted == 0) {

        timerStarted = 1;

        var timer = duration,
            minutes, seconds;

        setInterval(function() {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
              var x = document.getElementsByClassName("timeLeft");
              x[0].innerHTML = "GOING SOON!";
            }

        }, 1000);
    }
}

startTimer(60 * 4.7, $('.timeLeft'));