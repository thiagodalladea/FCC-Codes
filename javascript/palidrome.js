function removeSpace(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == ' ') {
            array.splice(i, 1)
        }
    }
}
function palindrome(str) {
    var isPalindrome = true
    str = str.replace(/['`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    str = str.toUpperCase()
    var strArray = Array.from(str)
    var strAuxArray = Array.from(str)
    removeSpace(strArray)
    removeSpace(strAuxArray)
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] != strAuxArray[strAuxArray.length - (i + 1)]) {
            isPalindrome = false
        }
    }
    if (isPalindrome == true) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('A man, a plan, a canal. Panama'))