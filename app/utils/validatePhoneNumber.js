export const validatePhoneNumber = (number) => {
    const phoneRegex = /^0\d{9}$/; 
    return phoneRegex.test(number);
}