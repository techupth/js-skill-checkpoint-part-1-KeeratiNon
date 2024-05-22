// Question #3
let userPassword = "";
const checkPasswordStrength = (userPassword) => {
    if (userPassword.length < 6) {
        return "Weak"
    }else if (userPassword.length >=6 && userPassword.length <= 10) {
        return "Medium"
    }else {
        return "Strong"
    }
}
// let userPassword = "swnalWadqQ"
console.log(checkPasswordStrength("ssswnalWadqQ")); // "Strong"

// let userPassword = "TechUp"
console.log(checkPasswordStrength("TechUp")); // "Medium"

// let userPassword = "abcde"
console.log(checkPasswordStrength("abcde")); // "Weak"