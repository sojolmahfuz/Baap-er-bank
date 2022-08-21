document.getElementById('submit').addEventListener('click', function(){
    const user = document.getElementById('user-field').value;
    const pass = document.getElementById('pass-field').value;
    
    if(user == "sojol@gmail.com" && pass == "admin"){
        window.location.href = 'banking.html';
        alert('Login Success. Click ok to continue');
    }
    else{
        alert("Wrong User Id & Password.");
    }
 });