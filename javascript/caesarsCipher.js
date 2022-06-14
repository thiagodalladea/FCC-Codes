function rot13(str) {
    const strArray = Array.from(str)
    var strDeciphered = ''
    for(let i = 0; i < strArray.length(); i++) {
        let letter = strArray[i]
        switch(letter) {
            case 'A':
                strDeciphered = strDeciphered + 'N'
                break
            case 'B':
                strDeciphered = strDeciphered + 'O'
                break
            case 'C':
                strDeciphered = strDeciphered + 'P'
                break
            case 'D':
                strDeciphered = strDeciphered + 'Q'
                break
            case 'E':
                strDeciphered = strDeciphered + 'R'
                break
            case 'F':
                strDeciphered = strDeciphered + 'S'
                break
            case 'G':
                strDeciphered = strDeciphered + 'T'
                break
            case 'H':
                strDeciphered = strDeciphered + 'U'
                break
            case 'I':
                strDeciphered = strDeciphered + 'V'
                break
            case 'J':
                strDeciphered = strDeciphered + 'W'
                break
            case 'K':
                strDeciphered = strDeciphered + 'X'
                break
            case 'L':
                strDeciphered = strDeciphered + 'Y'
                break
            case 'M':
                strDeciphered = strDeciphered + 'Z'
                break
            case 'N':
                strDeciphered = strDeciphered + 'A'
                break
            case 'O':
                strDeciphered = strDeciphered + 'B'
                break
            case 'P':
                strDeciphered = strDeciphered + 'C'
                break
            case 'Q':
                strDeciphered = strDeciphered + 'D'
                break
            case 'R':
                strDeciphered = strDeciphered + 'E'
                break
            case 'S':
                strDeciphered = strDeciphered + 'F'
                break
            case 'T':
                strDeciphered = strDeciphered + 'G'
                break
            case 'U':
                strDeciphered = strDeciphered + 'H'
                break
            case 'V':
                strDeciphered = strDeciphered + 'I'
                break
            case 'W':
                strDeciphered = strDeciphered + 'J'
                break
            case 'X':
                strDeciphered = strDeciphered + 'K'
                break
            case 'Y':
                strDeciphered = strDeciphered + 'L'
                break
            case 'Z':
                strDeciphered = strDeciphered + 'M'
                break
            default:
                strDeciphered = strDeciphered + letter
        }
    }

    return strDeciphered;
}

rot13("SERR PBQR PNZC");