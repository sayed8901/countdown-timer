let num = 0;
let timerField = document.getElementById('timer');


document.getElementById('start').addEventListener('click', function(){
    const intervalId = setInterval(() => {
        timerField.innerText = ++num;
    }, 1000);

    document.getElementById('stop').addEventListener('click', function(){
        clearInterval(intervalId);
    })

    document.getElementById('reset').addEventListener('click', function(){
        clearInterval(intervalId);
        timerField.innerText = '0';
        num = 0;
    })
})
