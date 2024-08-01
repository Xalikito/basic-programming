function acceptBmi(tall: number, weight: number) {
    let bmi: number = weight / (tall * tall)
 if (bmi <= 18.50) {
    return 'ผอม'
 } else if (bmi <= 22.90) {
    return 'ปกติ'
 } else if (bmi <= 24.90) {
    return 'ท้วม'
 } else if (bmi <= 29.90) {
    return 'อ้วน'
 } else (bmi >= 30) ;
    return 'อ้วนมาก'
}

console.log (acceptBmi(1.68, 40))