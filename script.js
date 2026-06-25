function clearValidation(inputId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(inputId + 'Feedback');
    
    if (input) {
        input.classList.remove('is-invalid', 'is-valid'); 
    }
    if (feedback) {
        feedback.innerHTML = '';
    }
}

function validateForm(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const globalMessageArea = document.getElementById('globalMessageArea');
    let formIsValid = true; 

    globalMessageArea.innerHTML = '';
    globalMessageArea.className = 'mt-3';
    clearValidation('firstName');
    clearValidation('lastName');
    clearValidation('mobileNo');
    clearValidation('email');

    if (firstName.length < 3) {
        const feedback = document.getElementById('firstNameFeedback');
        document.getElementById('firstName').classList.add('is-invalid');
        feedback.innerHTML = 'First Name must contain at least 3 characters.';
        formIsValid = false;
    } else {
        document.getElementById('firstName').classList.add('is-valid');
    }

    if (lastName.length < 3) {
        const feedback = document.getElementById('lastNameFeedback');
        document.getElementById('lastName').classList.add('is-invalid');
        feedback.innerHTML = 'Last Name must contain at least 3 characters.';
        formIsValid = false;
    } else {
        document.getElementById('lastName').classList.add('is-valid');
    }

    const mobileRegex = /^\d{8}$/;
    if (!mobileRegex.test(mobileNo)) {
        const feedback = document.getElementById('mobileNoFeedback');
        document.getElementById('mobileNo').classList.add('is-invalid');
        feedback.innerHTML = 'Mobile No. must contain exactly 8 digits.';
        formIsValid = false;
    } else {
        document.getElementById('mobileNo').classList.add('is-valid');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const feedback = document.getElementById('emailFeedback');
        document.getElementById('email').classList.add('is-invalid');
        feedback.innerHTML = 'E-mail must be in a valid format (e.g., user@domain.com).';
        formIsValid = false;
    } else {
        document.getElementById('email').classList.add('is-valid');
    }

    if (formIsValid) {
        
        localStorage.setItem('userFirstName', firstName);

        document.getElementById("welcomeMessage").innerHTML = "Welcome, " + firstName + "!";


        globalMessageArea.innerHTML = '<h5>✅ Success!</h5> Thank you for registering your interest. Your details have been successfully received.';
        globalMessageArea.classList.add('alert', 'alert-success');
        
        document.getElementById('interestForm').reset();
        
        clearValidation('firstName');
        clearValidation('lastName');
        clearValidation('mobileNo');
        clearValidation('email');
        
        return false; 
    } else {
        globalMessageArea.innerHTML = '<h5>❌ Submission Failed!</h5> Please correct the highlighted errors above.';
        globalMessageArea.classList.add('alert', 'alert-danger');
        
        return false;
    }
}

 function displayWelcomeMessage() {
            var storedName = localStorage.getItem("userFirstName");
            if ( storedName === null ){
              document.getElementById("welcomeMessage").innerHTML = "Welcome, Guest!";
            }
            else{
              document.getElementById("welcomeMessage").innerHTML = "Welcome," + " " + storedName +"!";
            }
        }
