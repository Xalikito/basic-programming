// const prefix: string = 'พณ.ท่าน ร้อยตำรวจตรวจตลาด'
// const fName: string = 'พชรพล'
// const lName: string = 'คนหล่อ'

// console.log(prefix.concat(" ", fName," ", lName)) // ต่อ string แบบ concat

// console.log(prefix + " " + fName + " " + lName) // ต่อ string แบบ + ไปเรื่อยๆ

// const str: string = 'นายธนภัทร แตงอ่อน'

// console.log(str.includes('นาย')) // ทบทวน

const str: string = 'นายอนุชิต แสงกระจ่าง'

console.log(str.slice(3, 9))

const std: string = 'นายธนภัทร รักวินัย ใฝ่เรียนรู้ เชิดชูคุณธรรม ค้ำจุนโลก โบกสะบัด คลัชเสีย เกียร์หลุด'

console.log(std.slice(std.indexOf('ค้ำจุนโลก'), std.indexOf('ค้ำจุนโลก') + "ค้ำจุนโลก".length))

const sts: string = 'นายณัฐกานต์ เด็กติดเกม Roblox aka ทิวคุง'

console.log(sts.split(" "))

// ["นายณัฐกานต์", "เด็กติดเกม", "Roblox", "aka", "ทิวคุง"] // อาเรย์ของ string เรียนหลัง mid

const stg: string = 'ยายแล่ม เมื่อตอนสาว ๆ ผิวขาว ตาคม ยายแล่ม'

console.log(stg.replaceAll('ยายแล่ม', 'โรนัลโด้'))

function getPrefix(fullName: string) {
    if (fullName.includes('นาย')) {
       return 'นาย'
    } else if (fullName.includes('นางสาว')) {
       return 'นางสาว'
    } else {
       return '-'
    }
 }
 
 console.log(getPrefix('นายอนุชิต แสงกระจ่าง'))