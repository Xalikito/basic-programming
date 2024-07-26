function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('Pete') // input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input แต่มี output

function st(fname: string, sname: string) {

    if (fname === 'mix' || sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane') // เครืื่องหมาย 'หรือ' คือ '||' และเครื่องหมาย 'และ' คือ '&&'

function acc(m: string, z: string, f: string) {

    if (m === 'mix' && z === 'zane' || f === 'forth') {
        console.log("พร้อมเรียน")
    } else {
        console.log("ยังไม่พร้อม")
    }
}

acc('mix', 'eve', 'Pete')

function atc(p: string, tname: string, a: string) {

    if (!(p === 'mix' || tname === 'zane') && a === 'forth') {
        console.log("พร้อมเรียน")
    } else {
        console.log("ยังไม่พร้อม")
    }
}

atc('mix', 'zane', 'forth') // เครื่องหมาย ! เปลี่ยนจริงเป็นเท็จ เปลี่ยนเท็จเป็นจริง

function mt(gender: string, t: number ,w: number) {
    if (gender === 'boy' && t > 170 || (w > 50 && w <= 110)) {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่เข้าเกณฑ์")
    }
}

mt('boy', 160, 49)

function dgw(age: number, monthMoney: number, depoist: number) {
    if (age >= 16 && monthMoney < 70000 && depoist < 500000) {
        console.log("รับ 10000 บาท")
    } else {
        console.log("อด....")
    }
}

dgw(19, 14000, 3300000)