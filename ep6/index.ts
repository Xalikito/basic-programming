for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('Total: ', sum)

let sum1: number = 0
let i: number = 1

while (i <= 31) {
    sum1 = sum1 + i
    i++
}

console.log('Total: ', sum1)

let sum2: number = 0
let i1: number = 1

do {
    sum2 = sum2 +i1
    i1++
} while (i1 <= 31)

console.log('Total: ', sum2)

let count: number = 0

while (true) {
    console.log("โสดโว้ย")
    count++
    if(count === 10) {
        break
    }
}

for (let i = 1; i <= 19; i++) {
    console.log('ฉันอายุ ' + i + ' ปี')
}

let i: number = 1
while (i <= 19) {
    console.log('ฉันอายุ ' + i + ' ปี')
    i++
}

let x: number = 1
do {
    console.log('ฉันอายุ ' + x + ' ปี')
    x++
} while (x <= 19)