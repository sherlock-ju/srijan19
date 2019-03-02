function submitClick(){
    const pass = document.getElementById('contest-pass').value;
    const url = document.getElementById('contest-url').value;
    
    if(pass === "CqHmlsHf"){
        document.getElementById('google-form').setAttribute("src", `https://${url}?embedded=true`);
        document.getElementById('google-form-div').style.display = "block";
        document.getElementsByClassName('forms')[0].style.display = "none";
        document.getElementsByClassName('main-body')[0].setAttribute("height", "100%");
        setTimeout(() => {
            alert("Your time is up! Please submit the test within '30 sec' otherwise you will loose your progress!");
            setTimeout(() => {
                document.getElementById('google-form-div').style.display = "none";
                document.getElementsByClassName('thank-you')[0].style.display = "block";
                window.location.href = "http://google.com";
            }, 60000);
        }, 2400000);
        
    }
}
