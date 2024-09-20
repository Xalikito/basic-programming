console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")

// zane.com -> No
// tan@ -> No
// safe@utk.ac.th -> Yes
// poppy@gmail.com -> Yes
const database = [
    {
        email: 'user@gmail.com',
        password : 'loveYou3000'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length -1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

register('max@mail.com', '1234567แปด')