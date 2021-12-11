//XMLHttpRequest api

function reqListener(url, cb) {
    const req = new XMLHttpRequest();

    req.open("GET", url);
    req.addEventListener("load", cb);
    req.send();
}

reqListener("https://jsonplaceholder.typicode.com/users", (e) => {
    console.log(e.response);
})


//fetch api
const root = document.querySelector("#root")
const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);


        data.forEach(user => {
            root.appendChild(createLi(user))

        });
    })

    .catch((e) => {
        console.log(e);
    })

function createLi(user) {
    const li = document.createElement('li')
    const text = `${user.name} __${user.email}`

    li.innerHTML = text
    return li;
}
//----------------------cross fetch-------

const fetch = require('cross-fetch');

async function load(){
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
const data= await res.json()
 console.log(data);
}

load()



const axios = require('axios');

async function load() {
        try {
            const {
                data
            } = await axios.get("https://jsonplaceholder.typicode.com/users");

           
            return data
        } catch {
            console.log('error');
        }

    }
    (
        async function () {
            const data = await load();
            console.log(data[0].name,data[0].email);
        }
    )();


const axios = require('axios');

async function load(){
    try{
        const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
    }catch(e){console.log(e);}
}
(async function(){
    const data=await load()
    console.log(data[2]);
})()