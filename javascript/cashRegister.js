function checkCashRegister(price, cash, cid) {
    let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

    let penny = cid[0][1]
    let nickel = cid[1][1]
    let dime = cid[2][1]
    let quarter = cid[3][1]
    let one = cid[4][1]
    let five = cid[5][1]
    let ten = cid[6][1]
    let twenty = cid[7][1]
    let oneHundred = cid[8][1]

    let changeValue = cash - price

    if (penny != 0 || nickel != 0 || dime != 0 || quarter != 0 || one != 0 || five != 0 || ten != 0 || twenty != 0 || oneHundred != 0) {
        if (changeValue >= 100) {
            while (changeValue >= 100 && oneHundred != 0) {
                changeValue -= 100
                oneHundred -= 100
                change[8][1] += 100
            }
        }
        if (changeValue >= 20) {
            while (changeValue >= 20 && twenty != 0) {
                changeValue -= 20
                twenty -= 20
                change[7][1] += 20
            }
        }
        if (changeValue >= 10) {
            while (changeValue >= 10 && ten != 0) {
                changeValue -= 10
                ten -= 10
                change[6][1] += 10
            }
        }
        if (changeValue >= 5) {
            while (changeValue >= 5 && five != 0) {
                changeValue -= 5
                five -= 5
                change[5][1] += 5
            }
        }
        if (changeValue >= 1) {
            while (changeValue >= 1 && one != 0) {
                changeValue -= 1
                one -= 1
                change[4][1] += 1
            }
        }
        if (changeValue >= 0.25) {
            while (changeValue >= 0.25 && quarter != 0) {
                changeValue -= 0.25
                quarter -= 0.25
                change[3][1] += 0.25
            }
        }
        if (changeValue >= 0.1) {
            while (changeValue >= 0.1 && dime != 0) {
                changeValue -= 0.1
                dime -= 0.1
                change[2][1] += 0.1
            }
        }
        if (changeValue >= 0.05) {
            while (changeValue >= 0.05 && nickel != 0) {
                changeValue -= 0.05
                nickel -= 0.05
                change[1][1] += 0.05
            }
        }
        if (changeValue >= 0.01) {
            while (changeValue >= 0.01 && penny != 0) {
                changeValue -= 0.01
                penny -= 0.01
                change[0][1] += 0.01
            }
        }

        if (changeValue != 0) {
            console.log(`{status: "INSUFFICIENT_FUNDS", change: []}`)
        } else if (changeValue == 0 && penny == 0 && nickel == 0 && dime == 0 && quarter == 0 && one == 0 && five == 0 && ten == 0 && twenty == 0 && oneHundred == 0) {
            console.log(`{status: "CLOSED", change: ${change}}`)
        }
    } else {
        console.log(`{status: "CLOSED", change: ${change}}`)
    }
}