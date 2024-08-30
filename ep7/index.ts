const score = [10, 23, 26, 30, 33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
   sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("Avg: ", avg)

const myStudents: string = "เซน, แทน, เวฟ, รุ้ง, แท็ก, สร"
// const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
// console.log(myStudentsArray)

const myStudentsArray: string[] = ["เซน", "แทน", "เวฟ", "รุ้ง", "แท็ก", "สร"]

console.log(myStudentsArray.join(' '))

const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[0])
console.log(fullName.slice(0, fullName.indexOf(' ')))

const animalLike: string = "แมว*กระต่าย*หมี*กระรอก"
const animalLikeArray: string[] = animalLike.split('*')

console.log(animalLike)
console.log(animalLikeArray)

const animals: string = "แมว*กระต่าย*หมี*กระรอก"
const animalsArray: string[] = animalLike.split('*')

console.log("ตั้งต้น: ", animalsArray)

animalsArray.pop() // เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", animalsArray)

animalsArray.push('เสือ') // ใส่ตัวสุดท้าย

console.log("ใส่ต่อท้าย: ", animalsArray)

animalsArray.shift() // เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", animalsArray)

animalsArray.unshift('หมาป่า') // ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", animalsArray)

const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.sort() // เรียง A - Z

console.log("เรียง A-Z: ", fruits)

fruits.reverse() // เรียง Z - A

console.log("เรียง Z-A: ", fruits)

const fruitsSlice = fruits.slice(0, 2)

console.log("ตัด: ", fruitsSlice)

const friendsName: string = "สร, รุจ, ป้อง, คิว"
const friendsNameArray: string[] = friendsName.split(',')

friendsNameArray.sort()

console.log("เรียง ก - ฮ: ", friendsNameArray)

friendsNameArray.reverse()

console.log("เรียง ฮ - ก: ", friendsNameArray)

const me = {
   firstName: 'Sompong',
   lastName: 'Sawangja',
   age: 19,
   birthday: 21/11/2548,
   telephone: 191
}

// ประวัติส่วนตัว

// ชื่อ: Anuchit
// นามสกุล: Saengkrajang
// อายุ: 19
//เกิดวันที่: 23/12/2548
// เบอร์โทร: 191