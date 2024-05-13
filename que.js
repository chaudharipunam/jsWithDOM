// // // Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
// // function sumAllElement(){
// //     arr= [10,20,30,40,60];
// //     let sum=0;
// //     for(let i=0; i<arr.length; i++){
// //         sum+=arr[i];
// //     }
// //     console.log("The sum of the all elements of array : ", sum);
// // }
// // sumAllElement();




// // //  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
// // function AveAllElement(){
// //     arr2= [10,20,30,40,60];
// //     let sum2=0;
// //     let count=0;
// //     for(let i=0; i<arr2.length; i++){
// //         sum2+=arr2[i];
// //         count++;
// //     }
// //     let Average=sum2/count;
// //     console.log("The Average of the all elements of array : ", Average);
// // }
// // AveAllElement();






// // //  Find Maximum Element: Write a function to find the maximum element in an array of integers.
// // function maxElement(){
// //     arr3= [10,20,70,90,60];
// //     let max=0;
// //     for(let i=0; i<arr3.length; i++){
// //         if(arr3[i]>max){
// //             max=arr3[i];
// //         }
// //     }
// //     console.log("The Max elements of array : ", max);
// // }
// // maxElement();





// // // Find Minimum Element: Write a function to find the minimum element in an array of integers.
// // function minElement(){
// //     arr4= [80,20,70,90,60];
// //     let min=arr4[0];
// //     for(let i=0; i<arr4.length; i++){
// //         if(arr4[i]<min){
// //             min=arr4[i];
// //         }
// //     }
// //     console.log("The Min elements of array : ", min);
// // }
// // minElement();




// // //  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// // // function searchElement(){
// // //     arr5= [10,20,70,90,60];
// // //     let num=70;
// // //     for(let i=0; i<arr5.length; i++){
// // //         if(arr5[i]== num){
// // //             console.log(`index of ${arr[i]} this element is `,i);
// // //             break;
// // //         }
// // //         else{
// // //             console.log("-1");
// // //             break;
// // //         }
// // //     }
   
// // // }
// // // searchElement()






// // //  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.
// // // function printOnlyEvenElements(){
// // //     arr6= [10,20,70,90,60];
// // //     let arr7=[];
// // //     let p=0;
// // //     for(let i=0; i<arr6.length; i++){
// // //         if(arr6[i]%2===0){
// // //            arr7[p]=arr6[i];
// // //         }
// // //     }
// // //     for(let j=0; j<arr7.length; j++){
// // //         console.log("Even Numbers: ", arr7[j]);
// // //     }
// // // }
// // // printOnlyEvenElements();




// // function mergeArray(){
// //     arr1 = [1,3] ;
// //     arr2 = [2,4];
// //     console.log(arr1.concat(arr2));
// //     console.log(typeof(arr1.concat(arr2)));

// // }
// // mergeArray();




function mergeArray_tableOf2ndElement(){
    arr1 = [1,9] ;
    arr2 = [2,4];
    console.log(arr1.concat(arr2));
    console.log(typeof(arr1.concat(arr2)));
    let secondElement=arr1[1];
    for(i=1; i<=10; i++){
        console.log(secondElement*i);
    }
}
mergeArray_tableOf2ndElement();




// let hi={
//         num:"0";
//         increament(){
//         console.log();
//         }

//     decrement(num){
//         num=--num;
//         console.log(num);
//       }
// }
// hi.increament()
// hi.decrement()



// let sallEmplo={
//     person1:"30",
//     person2:"20",
//     person3:"10",
//     person4:"25",
//     person5:"60",
// }

// for(let key in sallEmplo){
//     console.log(sallEmplo[key]+1000);
// }



console.log(typeof typeof 1);