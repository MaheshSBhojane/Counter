// let count = 0

// const value = document.querySelector("#value")
// const btns = document.querySelectorAll(".btn")

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains('decrease')) {
//             count--;
//         } else if (styles.contains('increase')) {
//             count++;
//         } else {
//             count = 0;
//         }

//         if(count > 0){
//             value.style.color = "orange";
//         }else if(count < 0){
//             value.style.color = "green";
//         }else{
//             value.style.color = "red";
//         }

//         value.textContent = count
//     })
// })




let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let test = e.currentTarget.classList;
        if(test.contains("decrease")){
            count--;
        }else if(test.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "orange"
        }else if (count < 0){
            value.style.color = "green"
        }else{
            value.style.color = "red"
        }


        value.textContent = count;
    })
})