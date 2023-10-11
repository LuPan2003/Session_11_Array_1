// Bài tập 1: Tính tổng các phần tử trong mảng
// + Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
// Input: [1,2,3]
// Ouput: 6

//Bài làm

let arr1=[1,2,3];
let tong=0;
for (let i = 0; i < arr1.length; i++) {
    tong+=arr1[i];
}
alert("Tổng của mảng bằng: "+ tong);



// Bài tập 2: Tìm phần tử lớn nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
// Input: [1,2,3]
// Output: 3

//Bài làm
//  let arr2=[1,2,3]
//   let maxValue= arr2[0];
//   for (let i = 1; i < arr2.length; i++) {
//     if (arr2[i] > maxValue) {
//       maxValue = arr2[i];
//     }
//   }
//   alert("Giá trị lớn nhất là: " + maxValue);


// Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
// Input: [10,8,2,6]
// Output: 2

//Bài làm
//  let arr3=[10,8,2,6]
//   let maxValue= arr3[0];
//   for (let i = 1; i < arr3.length; i++) {
//     if (arr3[i] < maxValue) {
//       maxValue = arr3[i];
//     }
//   }
//   alert("Giá trị lớn nhất là: " + maxValue);


// Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn
// Input: [1, 2, 3, 4, 5];
// Output: true/false

//Bài làm
// let number = +prompt("Nhập 1 số bất kỳ");
// let arr4 = [1, 2, 3, 4, 5];
// let check = false;
// for ( let  i = 0 ; i < arr4.length; i++) {
//     if (number==arr4[i]) {
//         check = true;
//         break;
//     }
// }
// if (check) {
//     alert("true")
//   } else {
//     alert("false");
//   }


// Bài tập 5: Đảo ngược giá trị trong mảng
// Input: [1, 2, 3, 4, 5]
// Ouput: [5, 4, 3, 2, 1]

//Bài làm
// let arr5 = [1 , 2 , 3 , 4 , 5];
// arr5.reverse();
// alert(arr5);


// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]

//Bài làm
// let arr6 = [1 , 2 , 3 , 4 , 5];
// let numbers = [];
// for (let i = 1 ; i < arr6.length; i++) {
//     if( i % 2 == 0){
//         numbers.push(i);
//     }
// }
// alert(numbers);

// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3

//Bài làm
// let number = +prompt("Nhập 1 số bất kỳ");
// let arr7 = [1, 2, 3, 2, 4, 2, 5];
// let count = 0;
// for (let i = 0 ; i < arr7.length; i++) {
//     if(number === arr7[i]){
//         count++;
//     }
// }
// alert(count);

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]

//Bài làm
// let arr8 = [4 , 2 , 9 , 5 , 1];
// arr8.sort((a,b) => a - b);
// alert(arr8);
