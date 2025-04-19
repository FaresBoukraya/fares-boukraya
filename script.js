document.getElementById('toggle-form').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('toggle-form-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handle form submissions
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here (e.g., API call)
    
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your signup logic here (e.g., API call)
    
});
function func(){
    var email=document.getElementById("e").value;
    var pass=document.getElementById("p").value;
    if (email=="admin" && pass=="2025"){
        window.location.href="projet.html";

    }
    else{
        alert("Login failed");
    }
}
function fan(){
    var user=document.getElementById("u").value
    var email=document.getElementById("el").value;
    var pass=document.getElementById("pl").value;
    if ( user=="fares" && email=="admin@gmail.com" && pass=="2025"){
        window.location.href="projet.html";

    }
    else{
        alert("Login failed");
    }
}