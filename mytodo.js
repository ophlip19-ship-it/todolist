
document.addEventListener('DOMContentLoaded', function () {
    // const display = document.getElementById('display');
    const myToDo = document.getElementById('myTodo');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todolist');
    const change = document.querySelector('#chage');
    const myBody = document.querySelector('#body-color');
    const dark = document.getElementsByClassName('dark');
    const backGround = document.getElementById('background');
    const islarge = window.innerWidth >= 1024;
    const li = document.createElement('li');
    let counter = document.getElementById('counter')
    const dashbar = document.getElementsByClassName('dashbar')
    // let span = document.createElement('span');



    addBtn.addEventListener('click', function () {
        const text = myToDo.value.trim();
        if (text !== '') {
            const li = document.createElement('li');
            todoList.appendChild(li);
            myBody.classList.contains('dark')
                ? li.setAttribute('class', 'gray') : li.setAttribute('class', 'white');
            myBody.classList.contains('dark')
                ? todoList.setAttribute('class', 'grayt') : todoList.setAttribute('class', 'whitet');
            change.addEventListener('click', function () {
                li.classList.toggle('gray')
                li.classList.toggle('white')
                todoList.classList.toggle('grayt')
                todoList.classList.toggle('whitet')
                dashbar.classList.toggle('gray')
                dashbar.classList.toggle('white')

            })
            myToDo.value = '';

            let span = document.createElement('span');
            li.appendChild(span);
            span.textContent = text;
            span.style.color = 'blue';
            span.style.fontSize = '20px';

            const deleteBtn = document.createElement('div');
            deleteBtn.innerHTML = `<img src= 'icon-cross.svg' style='background-color: transparent;'>`;
            li.appendChild(deleteBtn);
            deleteBtn.setAttribute('class', 'textprop');
            deleteBtn.setAttribute('id', 'reset')
            deleteBtn.style.backgroundColor = 'transparent'

            deleteBtn.addEventListener('click', function () {
                li.remove();
                updatecount();
                 updatecompleted();
                resetCountdown();
            })


            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.setAttribute('class', 'width')

            li.prepend(checkBox);
            checkBox.addEventListener('click', function () {
                span.classList.toggle('completed')
                updatecompleted();
            })


            const control = document.createElement('button');
            control.textContent = 'start';
            li.appendChild(control);
            control.setAttribute('class', 'start');
            control.setAttribute('id', 'start');


            control.addEventListener('click', function () {
                // control.classList.toggle('stop')

                let timeLeft = 3 * 60;
                let interval = null;
                const display = document.getElementById('display');

                function updateDisplay() {
                    const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
                    const secs = String(timeLeft % 60).padStart(2, '0');
                    display.textContent = mins + ':' + secs;

                    if (timeLeft <= 60) {
                        display.style.color = '#ff4d6d';
                    }
                }

                function startCountdown() {
                    if (interval) return;

                    interval = setInterval(() => {
                        timeLeft--;
                        updateDisplay();

                        if (timeLeft <= 0) {
                            clearInterval(interval);
                            interval = null;
                            display.textContent = 'You just completed your ' + span.textContent + ' activities';
                        }
                    }, 1000);
                }

                function stopCountdown() {
                    clearInterval(interval);
                    interval = null;
                }

                function resetCountdown() {
                    stopCountdown();
                    timeLeft = 4 * 60;           // reset to original value
                    display.style.color = 'white';
                    updateDisplay();
                }

                document.querySelector('.start').onclick = startCountdown;
                document.getElementsByClassName('textprop').onclick = stopCountdown;
                document.getElementById('reset').onclick = resetCountdown;

                // Optional: show initial value
                updateDisplay();
            })


            function updatecount() {
                const count = document.getElementsByTagName('li').length;
                let newCount = count - 1
                counter.textContent = newCount;
                if (newCount === 0) {
                    todoList.setAttribute('class', 'hidden')

                }
            }
            updatecount()


            function updatecompleted() {
                const completed = document.getElementsByClassName('completed').length;
                const completedDisplay = document.getElementById('complete');
                completedDisplay.textContent = completed;
            }
            updatecompleted();

        }




    });
    change.addEventListener('click', function () {
        // myBody.style.backgroundColor = "#000"
        myBody.classList.toggle('dark')
        myBody.classList.contains('dark')
            ? li.setAttribute('class', 'gray') : li.setAttribute('class', 'white');

        //use tenary instead of if
        if (islarge) {
            myBody.classList.contains('dark')
                ? backGround.style.backgroundImage = "url(bg-desktop-dark.jpg)" : backGround.style.backgroundImage = "url(bg-desktop-light.jpg)";

        }
        else {
            myBody.classList.contains('dark')
                ? backGround.style.backgroundImage = "url(bg-mobile-dark.jpg)" : backGround.style.backgroundImage = "url(bg-mobile-light.jpg)";


        }

        const main = document.getElementById('main')
        myBody.classList.contains('dark')
            ? change.src = "icon-sun.svg" : change.src = "icon-moon.svg";
        myBody.classList.contains('dark')
            ? main.style.backgroundColor = "#161722" : main.style.backgroundColor = "#fff"
        myBody.classList.contains('dark')
            ? main.style.color = '#fff' :
            main.style.color = '#000';






    })






})

