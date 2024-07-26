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