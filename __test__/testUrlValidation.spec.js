import urlValidation from '../src/client/js/urlValidation';

test('Testing the urlValidation() function', () => {
    expect(urlValidation).toBeDefined();
});

test('Testing urlValidarion', () => {
    expect(urlValidation('https://www.udacity.com/')).toBe(true);
});

test('Testing urlValidarion', () => {
    expect(urlValidation('https//www.udacity.com/')).toBe(false);
});

