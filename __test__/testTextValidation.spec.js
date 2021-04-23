import textValidation from '../src/client/js/textValidation';

test('Testing the textValidation() function', () => {
    expect(textValidation).toBeDefined();
});

test('Test if text is provided', () =>{
    const validation = textValidation('');
    expect(validation).toBe(false);
});

test('Test if text is less than 50 characters', () =>{
    const validation = textValidation('When text is less than 50 characters return false');
    expect(validation).toBe(false);
});

test('Test if text is more than 50 characters', () =>{
    const validation = textValidation('When text is more than 50 characters return false. It has to be at least 30 characters long to return true');
    expect(validation).toBe(true);
});