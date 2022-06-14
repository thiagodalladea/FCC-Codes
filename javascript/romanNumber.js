function convertToRoman(num) {
    var romanNumber = ''
    while (num != 0) {
        if (num >= 1000) {
            while (num >= 1000) {
                romanNumber = romanNumber + 'M'
                num -= 1000
            }
        } else if (num >= 900) {
            romanNumber = romanNumber + 'CM'
            num -= 900
        } else if (num >= 500) {
            romanNumber = romanNumber + 'D'
            num -= 500  
        } else if (num >= 400) {
            romanNumber = romanNumber + 'CD'
            num -= 400
        } else if (num >= 100) {
            romanNumber = romanNumber + 'C'
            num -= 100
        } else if (num >= 90) {
            romanNumber = romanNumber + 'XC'
            num -= 90
        } else if (num >= 50) {
            romanNumber = romanNumber + 'L'
            num -= 50
        } else if (num >= 40) {
            romanNumber = romanNumber + 'XL'
            num -= 40
        } else if (num >= 10) {
            romanNumber = romanNumber + 'X'
            num -= 10
        } else if (num >= 9) {
            romanNumber = romanNumber + 'IX'
            num -= 9
        } else if (num >= 5) {
            romanNumber = romanNumber + 'V'
            num -= 5
        } else if (num >= 4) {
            romanNumber = romanNumber + 'IV'
            num -= 4
        } else if (num >= 1) {
            romanNumber = romanNumber + 'I'
            num -= 1
        }
    }
    return romanNumber
}