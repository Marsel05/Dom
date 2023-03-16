const breed = document.querySelector(".breed")
const breedImg = document.querySelector(".breed-img")
const select = document.querySelector(".select")
const input = document.querySelector(".input")
const searchBtn = document.querySelector(".add-btn")

function getAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
.then((result) => {
        Object.keys(result.data.message).map((el) => {
            breed.innerHTML += `<button class="btn-breed btn btn-warning m-1">${el}</button>`
            select.innerHTML += `<option value="${el}">${el}</option>`
        })
    })
        .then(() => btn())

}
getAll()
select.addEventListener("change", (e)=>{
    getImg(e.target.value)
})


function btn() {
    const breedBtn = document.querySelectorAll(".btn-breed")
    breedBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}
function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((result)=>{
            breedImg.innerHTML = `<img style="object-fit: contain" src="${result.data.message}" width="300" height="200" alt="img"/>`
        })
}
getImg()

searchBtn.addEventListener("click", ()=>{
    const buttons = document.querySelectorAll(".btn-breed")
    buttons.forEach((btn)=>{
        if (input.value === btn.innerHTML){
            getImg(input.value)
        }else {
            btn.remove()
        }
    })
})

// searchBtn.addEventListener("click", ()=>{
//     getImg(input.value.trim())
//     input.value = ""
// })
// input.addEventListener("keydown", (e)=>{
//     if (e.key === "Enter"){
//         getImg(input.value.trim())
//         input.value = ""
//     }
// })
// input.addEventListener("input", (e)=>{
//     getImg(e.value.trim())
// })


// function getAll(){
//     axios(`https://dog.ceo/api/breeds/list/all`)
//         .then((result)=>{
//             Object.keys(result.data.message).map((el)=>{
//                 breed.innerHTML += `<button class="btn-breed btn btn-warning m-1">${el}</button>`
//                 select.innerHTML += `<option value="${el}">${el}</option>`
//             })
//         })
//         .then(()=> btn())
// }
// getAll()
// select.addEventListener("change",(e)=>{
//     getImg(e.target.value)
// })
// function btn(){
//     const breedBtn = document.querySelector(".btn-breed")
//     breedBtn.forEach((btn)=>{
//         btn.addEventListener("click", ()=>{
//             getImg(btn.innerHTML)
//         })
//     })
// }
// function getImg(name){
//     axios(`https://dog.ceo/api/breeds/${name}/images/random`)
//         .then((result)=>{
//             breedImg.innerHTML += `<img style="object-fit: contain" src="${result.data.message}" width="300" height="200" alt="img"/>`
//         })
// }
// getImg()
// const breed = document.querySelector(".breed")
// const breedImg = document.querySelector(".breed-img")
//
// function getAll (){
//     axios(`https://dog.ceo/api/breeds/list/all`)
//         .then((res)=>{
//             Object.keys(res.data.message).map((el)=>{
//                 breed.innerHTML += `<button class="btn-breed btn btn-warning m-1">${el}</button>`
//             })
//         })
//         .then(()=> btn())
// }
// getAll()
//
// function btn(){
//     const breedBtn = document.querySelector(".btn-breed")
//    breedBtn.forEach((btn)=>{
//        btn.addEventListener("click",()=>{
//            getImg(btn.innerHTML)
//        })
//    })
// }
//
// function getImg(name){
//     axios(`https://dog.ceo/api/breeds/${name}/images/random`)
//         .then((result)=>{
//             console.log(result)
//             breedImg.innerHTML = `<img style="object-fit: contain" src="${result.data.message}" width="400" height="200" alt="">`
//         })
// }
// getImg()