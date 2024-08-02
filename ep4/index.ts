function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('ใส่วันมาผิด')
            break
    }
}

sayHi(7)

function size(shirth: string) {
    switch (shirth) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
        default:
            console.log('ใส่ไซต์มาผิด')
            break
    }
}

size('l')

const x: number = 10000000

console.log(x.toLocaleString())

function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.67676, 17))

function nm(x: number) {
    const p = x.toLocaleString()
    return p
}

console.log(nm(1000))