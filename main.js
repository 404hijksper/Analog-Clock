window.onload = () =>{

    const clock = document.getElementById('clock--js')
    const hour = document.querySelector('#hr')
    const minute = document.querySelector('#min')
    const second = document.querySelector('#sec')
    
    for (i = 1; i <= 60; i++) { 
        clock.appendChild(document.createElement('span'))
        clock.lastElementChild.setAttribute('style', `--i:${i};`)
        clock.lastElementChild.appendChild(document.createElement('b'))
        clock.lastElementChild.textContent="|"
    }
    
    setInterval(() => {
        const day = new Date()
        let hours = day.getHours() * 30;
        let minutes = day.getMinutes() * 6;
        let seconds = day.getSeconds() * 6;
    
        hour.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`
        minute.style.transform = `rotateZ(${(minutes)}deg)`
        second.style.transform = `rotateZ(${(seconds)}deg)`
    })

}