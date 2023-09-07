document.addEventListener('DOMContentLoaded', function(){
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]')
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]')
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]')
    const myTrack = document.querySelector('[data-testid="myTrack"]')
    const githubUrl = document.querySelector('[data-testid="githubUrl"]')
    const currentDateNow = new Date();
    

    slackUserNameElement.textContent = "Ahmed Makinde";
    slackDisplayImage.innerHTML = `<img src="./slackimage.jpg"  alt="Ahmed Makinde" id='img'/>`;
    currentDayOfTheWeek.textContent =  'Thursday';
    

     currentUTCTime.textContent = currentDateNow.toUTCString();
     myTrack.textContent = 'Frontend';
     githubUrl.innerHTML = `<a href="https://github.com/MakindeAhmed2110/hng_stage1/" target="_blank">Github Repository</a>`
})