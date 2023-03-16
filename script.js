const row = document.querySelector(".row")


    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            data.map((el)=>{
                row.innerHTML += `<div class="col-4" >

<ul class="flex-direction-column border border-primary h-100  rounded-5 my-5 " >

<img src="./img/bird.avif" alt="img" width="300" class="my-5">
<h2 class="text-warning text-center">Name:${el.name}</h2>
<h3 class="text-primary text-center">${el.username}</h3>
<h3 class="text-center">${el.address.city}</h3>

<ul>
    <li>Email:
<ul>
   <li>
       <h6>${el.email}</h6>
       <h6>${el.email}</h6>
       <h6>${el.email}</h6>
       <h6>${el.email}</h6>
       <h6>${el.email}</h6>
    </li>
</ul>
     </li>
</ul>
</ul>


<div>`})
        })


const user = async () =>{
    const res = await axios(`http://jsonplaceholder.typicode.com/users`)
    const {data} = await res
}
console.log(user())


