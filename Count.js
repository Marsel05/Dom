const count = document.querySelector(".count")
const btn = document.querySelector(".add-btn")
const input = document.querySelector(".input")
const select = document.querySelector(".select")
const pop = document.querySelector(".pop-select")
// axios(`https://restcountries.com/v3.1/name/{name}`)



// function sortAlfa(data){
//     return data.sort((a,b)=> (a.name.common > b.name.common ) ? 1 : -1)
// }
// function sortData(data) {
//     return data.sort((a,b)=>(a.population < b.population) ? 1: -1)
// }

let all = null

function getApi(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res)=>{
            all = res.data
            getFlags(res.data)
            // const sortedData = sortData(res.data)
            // getFlags(sortedData)
// const sortedAlfa = sortAlfa(res.data)
//             getFlags(sortedAlfa)
        })
}

getApi(`all`)

function getFlags(ars){
    window.scroll(0,0)
    console.log(ars)
    count.innerHTML = ""
    ars.slice(0,102).map((el)=> {
        // sort((a,b)=> b.population - a.population )
        count.innerHTML += `<div class=" card bg-light col-4 my-2 border border-none " style="width: 18rem;">
<img class="card-img-top" src="${el.flags.svg}" width="400" height="200" alt="">
<h1><span>Страна:</span>${el.name.common}</h1>
<h1><span>Столица:</span>${el.capital ? el.capital : "no"}</h1>
<h1><span>Регион:</span> ${el.region}</h1>
<h1><span>Население:</span> ${el.population} чел.</h1>
<h1><span>Площадь</span>${el.area} км</h1>
</div>`

    })

}



btn.addEventListener("click", ()=>{
    getApi(`name/${input.value.trim()}`)

})
input.addEventListener("input", (e)=>{
    getApi(`name/${e.target.value.trim()}`)
})
pop.addEventListener("change", (e)=>{
    let target = e.target.value
    if (target === "area"){
        const res = all.sort((a,b)=>{
            return b.area - a.area
        })
        getFlags(res)
    }
    else if (target === "population"){
        const res = all.sort((a,b)=>{
            return b.population - a.population
        })
        getFlags(res)
    }
    else if (target === "A-Z"){
        const res = all.sort((a,b)=>{
            return a.name.common > b.name.common ? 1: -1
        })
        getFlags(res)
    }
    else if (target === "Z-A"){
        const res = all.sort((a,b)=>{
            return b.name.common > a.name.common ? 1: -1
        })
        getFlags(res)
    }
})
select.addEventListener("change", (e)=>{
    let target = e.target.value
    if (target === "asia"){
        const res = all.filter((el)=>{
            return el.region === "Asia"
        })
        getFlags(res)
    }else if (target === "europe"){
        const res = all.filter((el)=>{
            return el.region === "Europe"
        })
        getFlags(res)
    }else if (target === "oceania"){
        const res = all.filter((el)=>{
            return el.region === "Oceania"
        })
        getFlags(res)
    }else if (target === "africa"){
        const res = all.filter((el)=>{
            return el.region === "Africa"
        })
        getFlags(res)
    }
})
// pop.addEventListener("change", (e)=>{
//     let target = e.target.value
//     if (target === "area"){
//         const res = all.sort((a,b)=>{
//             return b.area - a.area
//         })
//         getFlags(res)
//     }else if (target === "population"){
//         const res = all.sort((a,b)=>{
//             return b.population - a.population
//         })
//         getFlags(res)
//     }else if (target === "A-Z"){
//         const res = all.sort((a,b)=>{
//             return a.name.common > b.name.common ? 1 : -1
//         })
//         getFlags(res)
//     }else if (target === "Z-A"){
//         const res = all.sort((a,b)=>{
//             return a.name.common > b.name.common ? -1 : 1
//         })
//         getFlags(res)
//     }
// })
//
// select.addEventListener("change", (e)=>{
//     let target = e.target.value
//     if (target === "asia"){
//         const res = all.filter((el)=>{
//             return el.region === "Asia"
//         })
//         getFlags(res)
//     }else if(target === "europe"){
//         const res = all.filter((el)=>{
//             return el.region === "Europe"
//         })
//         getFlags(res)
//     }else if (target === "oceania"){
//         const res = all.filter((el)=>{
//             return  el.region === "Oceania"
//         })
//         getFlags(res)
//     }else if (target === "africa"){
//         const res = all.filter((el)=>{
//             return el.region === "Africa"
//         })
//         getFlags(res)
//     }
// })


// function getApi(API){
//     axios(`https://restcountries.com/v3.1/${API}`)
//         .then((res)=> {
//             const sortedData = sortData(res.data)
//                  getFlags(sortedData)
//             const sortedAlfa = sortAlfa(res.data)
//             getFlags(sortedAlfa)
//         })
//
// }
// getApi(`all`)
//
// function sortData(data){
//     return data.sort((a,b)=>(a.population < b.population) ? 1 : -1)
// }
// function  sortAlfa(data){
//     return data.sort((a,b)=>(a.name.common > b.name.common)? 1 : -1)
// }
//
// function getFlags(ars){
//     count.innerHTML = ""
//     ars.slice(0,50).map((el)=>{
//         count.innerHTML += `<div class="col-4 card my-2 border border-none " style="width: 18rem;">
// <img class="card-img-top" src="${el.flags.svg}" width="400" height="200" alt="">
// <h1><span>Страна:</span>${el.name.common}</h1>
// <h1><span>Столица:</span>${el.capital ? el.capital : "no"}</h1>
// <h1><span>Регион:</span> ${el.region}</h1>
// <h1><span>Население:</span> ${el.population}</h1>
// </div>`
// }
// )
// }
//
//
// btn.addEventListener("click",()=>{
//     getApi(`name/${input.value}`)
// })
//
// input.addEventListener("input", (e)=>{
//     getApi(`name/${e.target.value}`)
// })

// function sortData(data){
//     return data.sort((a,b)=> (a.population < b.population) ? 1: -1 )
// }
//
//
// function getApi(API){
//     axios(`https://restcountries.com/v3.1/${API}`)
//         .then((res)=>{
//             const sortedData = sortData(res.data)
//             getFlags(sortedData)
//         })
// }
// getApi(`all`)
//
// function getFlags(ars){
//     count.innerHTML = ""
//     ars.slice(0.51).map((el)=>{
//         count.innerHTML += `<div class="card col-4 my-2 border border-none">
// <img class="card-img-top" src="${el.flags.svg}" width="400" height="200" alt="img">
// <h1>${el.name.common}</h1>
// <h1>${el.population}</h1>
// <h1>${el.region}</h1>
// </div>`
//     })
//
// }
// btn.addEventListener("click",()=>{
//     getApi(`name/${input.value}`)
// })
// input.addEventListener("input",(e)=>{
//     getApi(`name/${e.target.value}`)
// })

