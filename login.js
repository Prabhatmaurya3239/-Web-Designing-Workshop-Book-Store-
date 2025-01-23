const form =  document.getElementById("login")
form.addEventListener('submit', function(event){
event.preventDefault()

const form_data = new FormData(form)
const data = []
form_data.forEach((value, key) => {
    data.push(value)
});

if (data[0] == localStorage.getItem('username') && data[1] == localStorage.getItem('password')) {
    alert("Login Sccessfull"+ data[0])
window.location.href = "welcome.html";
}
else{
alert("Wrong Password!")
}


});