// console.log("Hello World")

// Var
// var name = "fathan"
// var fullName = "Fathan Rizki Hidayah"
// var name =  "rizki"
// name = "hidayah"

// Let
// let name = "fathan"
// name = "rizki"
// let fullName = "Fathan Rizki Hidayah"

//Const
const name = "Fathan"
const fullName = "    Fathan Rizki Hidayah   "

const checkLength = name.length
const checkIndex = name.indexOf("h")
//substring untuk merujuk index keberapa dan ditambahkan jumlah setelahnya
const substrMethod = fullName.substr(7,5)
//Slice untuk dari index ke berapa dan sampai ke index berapa
const sliceMethod = fullName.slice(7,9)
//Split memisahkan string berdasarkan karakter yg diingkan, dan karakter yg digunakan akan hilang
const splitMethod = name.split("")
//Trim menghilangkan akrakter yg diingkan
const trimMethod = fullName.trim(" ")

// console.log(name, fullName, checkLength, checkIndex, substrMethod, sliceMethod, splitMethod)
// console.log(trimMethod)

// Arithmetic & Assignment Operators

const born = 1999
const thisYear = 2022
const number = "1000"
const minAge = thisYear - born
const plusNumber = born + thisYear
const multipleNumber = born * thisYear
const divideNumber = thisYear / born
const moduloNumber = thisYear % 2

// const convertString = born.toString()
// const convertInt = parseInt(number)
// console.log(typeof convertInt)


// Basic Math Object

const pi = Math.PI
//abs untuk membuat nilai positif
const absolute = Math.abs(-10.1)
//Pow untuk fungsi kuadrat
const square = Math.pow(8,4)
// const sqrt fungsi akar pangkat 2
const akar = Math.sqrt(16)
// const cbrt fungsi akar pangkat 3
const akar3 = Math.cbrt(8)

// console.log(square);


// Round, Ceil & Floor
// Math.round untuk membulatkan nilai ke nilai terdekat baik kebawah ataupun ke atas
// Math.floor untuk memaksa membulatkan nilai ke bawah
// Math.ceil untuk memaksa membulatkan nilai ke atas
const round = Math.round(4.6)
const round1 = Math.round(4.4)
const floor = Math.floor(4.7)
const ceil = Math.ceil(4.1)

// console.log(round1)


// Basic Math Object
// Random, Max & Min
// Random
const random = Math.random()*10
const roundedRandom = Math.round(random)
const max = Math.max(1,5,3,2)
const min = Math.min(4,5,3,2)

// console.log(roundedRandom)


let time = new Date()
const year = time.getFullYear()
const month = time.getMonth()+1
const date = time.getDate()
const day = time.getDay()
const hour = time.getHours()
const minute = time.getMinutes()
const second = time.getSeconds()
const milliSecond = time.getMilliseconds()


let time1 = 540;
let a=0
let b=0
let c=0
let d=0
if(time1/365 > 1){
    a++;
    time1 = time-365;
}else if(time1/31 > 1 ){
    b++;
    time1 = time1-12;
}else if(time1/7>1){
    c++;
    time1 =time1 -7;
}else{
    d++;
    time1 = time1-1;
}

console.log(a+"Tahun", b+"bulan", c+"Minggu", d+"Hari")

// console.log(milliSecond)
// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())

let totalUmur = 80
let pfather = 4
let pSon = 1

let total = pfather + pSon
let sonAge = totalUmur/total

console.log(sonAge)













