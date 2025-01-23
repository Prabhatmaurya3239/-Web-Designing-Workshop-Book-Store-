document.getElementById('surveyForm').addEventListener('submit', function (event) {
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

    
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<h2>Thank You for Your Feedback!</h2>
                             <p>Your responses have been recorded.</p>`;

    console.log('Survey Data:', data);  
});