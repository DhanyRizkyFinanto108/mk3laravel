document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = "nyye";
    const correctPassword = "nyye";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert("Login Succes");
        window.location.href = "index.html";

    }else{
        alert("Salah Bro");
    };
});