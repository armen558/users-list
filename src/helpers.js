export const validateForm = (formData) => {
    let validateForm = false;
    let inputs = Object.values(formData);
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].trim() === '') {
            validateForm = false;
            console.log('one of the field is empty')
            break;
        } else {
            validateForm = true;
        }
    }            
    return validateForm;
};

export const fetchUsers = (successFunction) => {
    fetch('https://api.github.com/users')
        .then(resp => resp.json())
        .then(data => successFunction(data))
};