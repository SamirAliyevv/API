// async function First(callback) {
//     console.log('salam');
//     console.log('sagol');
//     await Second(); - 50
//     await Third(); - 30
// }


// function Second() {
//     console.log('iki');
// }


// XMLHTTPREQUEST

let btn = document.querySelector('#btn');

// btn.onclick = function() {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//         }
//         else if(this.status === 404) {
//             document.getElementById('msg').innerHTML = '404 Not Found!'
//         }
//     }

//     xhr.open('GET','https://fakestoreapi.com/productssssss');
//     xhr.send();
// }








// REST API

// GET (Read)
// POST (Create)
// PUT (Update)
// DELETE (Delete)

let input = document.querySelector('#form input');
let users = [];

function GetUsers() {
    
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => {
        let x = '';
        let male_count = 0
        let female_count = 0

        data.results.forEach(user => {
            users.push(user);
            if(user.gender === 'male') {
                male_count++;
            }
            else{
                female_count++;
            }

            x += `
            <div class="col-lg-3">
            <a id=${user.login.uuid} href="details.html">
            <div id=${user.gender === 'male' ? 'male' : "female"} class="card">
                <img src=${user.picture.medium} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                  <p class="card-text">Email: ${user.email}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </a>
        </div>
            `
        })
        document.querySelector('#list').innerHTML = x
        document.getElementById('g_male').innerHTML = male_count
        document.getElementById('g_female').innerHTML = female_count
    })
    .catch(err => console.log(err))
}

GetUsers();



input.onkeyup = function() {
    let value = this.value;
    let filteredUser = users.filter(x => x.name.first.toLowerCase().includes(value.toLowerCase()));
    let x = '';
    console.log(filteredUser);
    let male_count = 0
    let female_count = 0

    if(filteredUser.length === 0) {
        document.querySelector('.alert').classList.remove('d-none');
    }
    else{
        document.querySelector('.alert').classList.add('d-none');
    }
    
    filteredUser.forEach(item => {
        if(item.gender === 'male') {
            male_count++;
        }
        else{
            female_count++;
        }
        x += `
        
            <div class="col-lg-3">
            <a id=${item.login.uuid} href="details.html">
            <div id=${item.gender === 'male' ? 'male' : "female"} class="card">
                <img src=${item.picture.medium} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
                  <p class="card-text">Email: ${item.email}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </a>
        </div>
            `
    })
    
    document.querySelector('#list').innerHTML = x
    document.getElementById('g_male').innerHTML = male_count
        document.getElementById('g_female').innerHTML = female_count
}


