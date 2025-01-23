function password_check( password){
    check = true;
    if (password.length <= 6) {
        check = false
       alert("Password less than 6 Charecter");
       return check;
    }
    if (!string_check(password,65,90)) {
        check = false
        alert("Password not contain Capital alphabets")
        return check;
    }
    if (!string_check(password,97,122)) {
        check = false
        alert("Password not contain small alphabets")
        return check;
    
    }
    if (!string_check(password,48,57)) {
        check = false
        alert("Password not contain numerical value")
        return check;
    
    }
    if (!(string_check(password,33,47) ||string_check(password,58,64))) {
        check = false
        alert("Password not contain symbal value")
    } 
        return check;
    }
    
    
    function string_check(password,start,end) {
        check = false;
        for (let i = 0; i< password.length; i++) {
            // console.log("string:"+password.charCodeAt(i)+"="+start+end)
          if ((password.charCodeAt(i)>= start )&& (password.charCodeAt(i)<= end)) {
            check = true;
            return  check;
          }
           
        }
        return check;
    }
    
    function name_check(name) {
        check1 = true
        if(name.length <= 6){
            check1 = false;
            alert("Name lessthan 6 characters");
            return check1;
        }
        if ((string_check(name, 48, 57)||string_check(name,33, 47)||string_check(name,58,64))) {
            check1 = false;
            alert("Do not contain symbols and numerical value");
            return check1;
            
        }
        
        return check1;
        
    }
   
    
    document.addEventListener('DOMContentLoaded', function () {
       day =  document.getElementById('day')
       month =  document.getElementById('month')
       year =  document.getElementById('year')
       list_of_month = ["January","February","March", "April","May","June","July", "August", "September","October","November", "December"]
       // add day
       for (let i = 1; i <=31; i++) {
        let option = document.createElement('option')
        option.textContent = i
        option.value = `"${i}"`
        day.appendChild(option)
        
       }
       // add month
       for (let i =0; i <12;i++) {
        let option = document.createElement('option')
        option.textContent = list_of_month[i]
        option.value = `${i+1}`
        month.appendChild(option)
        
       }
       //add year
       for (let i =1980; i < 2025; i++) {
        let option = document.createElement('option')
        option.textContent = i
        option.value = `${i}`
        year.appendChild(option)
       }
    
    });
    function validateForm(email,phone) {
    
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        const phonePattern = /^\d{10}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address (name@domain.com).");
            return false;
        }
    
     
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (exactly 10 digits).");
            return false;
        }
    
        
        return true;
    }
    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });
    
        if ((password_check(data.password))&& name_check(data.name)&&validateForm(data.email,data.phone)) {
            localStorage.setItem('username', data.name);
            localStorage.setItem('password', data.password);
            alert("Ragistration successfull!")
            window.location.href = "login.html"
        }
        
        console.log('Profile', data); 
    });