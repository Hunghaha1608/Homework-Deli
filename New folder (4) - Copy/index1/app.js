//Toán tử + - * / ** 
//Lấy phần dư (%) khi chia a/b 

// let a = 10, b = 3;
// console.log("Tổng", a + b);
// console.log("Hiệu", a - b);
// console.log("Tích", a * b);
// console.log("Thương", a / b);
// console.log("Lũy thừa", a ** b);
// console.log("Lấy dư", a % b);


// //SO SÁNH 

// //NỐI CHUỖI  
// let a = "Hung", b = "Luong Tuan";
// c = b +" " + a;
// console.log(c);

// let a = 9; b = 10; 
// ketqua = (a < b)
// ... 


// //FUNCTION 
// // CÚ PHÁP 
// function TongHaiChuSo(a,b){
//     c = a+b;
//     return c;
// }
// console.log(TongHaiChuSo(4,5)) //-> 9


//TÍNH TỔNG SỐ GIÂY CỦA CÁC GIỜ ĐÃ CHO 
function TinhTongSoGiay(h){
    if(h<1) return "không phải giờ";
    let Second_per_hour = 3600;
    return h * Second_per_hour;
}
console.log("Số giây tổng:", TinhTongSoGiay(2.5));


// //CHO 3 SỐ VÀ TÌM GIÁ TRỊ LỚN NHẤT 
// function findMax(a,b,c){
//     max = a; // lính canh 
//     if(b > max) max = b; 
//     if(c > max) max = c;
//     return max
// }
// console.log(findMax()); //điền giá trị thích hợp 

// function findMax2(a,b,c){
//     return Math.max(a,b,c);
// }
// console.log("Giá trị MAX: ", findMax2()); //điền giá trị thích hợp 

function findMaxOfThreeEven(a,b,c){
    let max = -Infinity;
    if(a%2 === 0 && a > max) max = a;
    if(b%2 === 0 && b > max) max = b;
    if(c%2 === 0 && c > max) max = c;
    return max === -Infinity ? null : max //Trả về null trong trường hợp không có số chẵn 
}
console.log(findMaxOfThreeEven());


//LẤY SỐ HÀNG ĐƠN VỊ SỐ CÓ 3 CHỮ SỐ 
function onesOfNumber(x){
    if(x.toString().length !== 3) return "khong phai so co 3 chu so";
    let ones = x % 10;
    return ones
}
console.log(onesOfNumber(445));

function tensOfNumber(y){
    if(y.toString().length !== 3) return "khong phai so co 3 chu so";
    let tens1 = y % 100;
    let tens = Math.trunc(tens1 /10);
    return tens
}
console.log(tensOfNumber(445));


//TÍNH TỔNG CÁC SỐ 
function totalNumber(z){
    if(z.toString().length)
}


