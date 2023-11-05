const products = document.getElementById("products");
const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");



//----------------------------------------------------------------------------------------------------------------------------------------
// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const p = document.createElement('p')
//         p.textContent = `${item.id}`
//         products.appendChild(p)
//     })
// })



//----------------------------------------------------------------------------------------------------------------------------------------
// btn.addEventListener('click', function () {
//         fetch('https://northwind.vercel.app/api/customers', {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 region: inp.value,
//                 country: inp2.value,
//                 city: inp3.value
//                }),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 console.log(data);
//               });
//     })



//----------------------------------------------------------------------------------------------------------------------------------------
// function FetchDel() {
//         let url = `https://northwind.vercel.app/api/customers/${inp.value}`;

//         fetch(url, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', FetchDel)



//----------------------------------------------------------------------------------------------------------------------------------------
// function update(updateInfo){
//     let url = `https://northwind.vercel.app/api/customers/${inp.value}`
//     fetch(url,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(updateInfo)
//     })
// }
// const updateInfo={
//     name:"Namiq",
//     surnmae:"Telliyev"
// }
// btn.addEventListener("click", function(){
//   update(updateInfo)
// });



//----------------------------------------------------------------------------------------------------------------------------------------
// function axiosGet() {
//   axios.get("https://northwind.vercel.app/api/customers").then((res) => {
//     console.log(res.data);
//   });
// }
// axiosGet();



//----------------------------------------------------------------------------------------------------------------------------------------
// function axiosPost() {
//   axios
//     .post("https://northwind.vercel.app/api/customers", {
//       region: inp.value,
//       country: inp2.value,
//       city: inp3.value

//     })
//     .then((res) => {});
// }

// btn.addEventListener("click", axiosPost);



//----------------------------------------------------------------------------------------------------------------------------------------
// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${inp.value}`)
// }
// btn.addEventListener('click', axiosDelete)



//----------------------------------------------------------------------------------------------------------------------------------------
// function update(updateInfo) {
//   const url = `https://northwind.vercel.app/api/customers/${inp.value}`;

//   axios.put(url, updateInfo, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

// }

// const updateInfo = {
//   name: 'Namiq',
//   surname: 'Telliyev'
// };

// btn.addEventListener('click', function() {
//   update(updateInfo);
// });