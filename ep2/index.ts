function add(a: number, b: number) {
    return a + b
}

console.log(add(5, 8))

function ex1(a: number, b: number) {
    return a - b
}

console.log(ex1(6, 10))

function ex2(a: number, b: number, c: number, d:number) {
    return a * b * c * d
}

console.log(ex2(10, 5, 3, 2))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'สอบตก'
    } else {
        return 'สอบผ่าน'
    }
}

console.log(grade(27, 19, 18))

function grade1(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'grade F'
    } else if (score < 60) {
        return 'grade D'
    } else if (score < 70) {
        return 'grade C'
    } else if (score < 80) {
        return 'grade B'
    } else {
        return 'grade A'
    }
}

console.log(grade1(25, 18, 17))