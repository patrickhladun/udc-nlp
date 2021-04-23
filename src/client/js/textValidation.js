const textValidation = (text) => {
    const validate = text;
    
    if(validate == '') {
        alert('You must add some text!');
        return false;
    } else if( validate.length <= 50 ) {
        alert('Text must be at least 50 characters long');
        return false;
    } else {
        return true;
    }
}
export default textValidation;