import './style.css'
import './index.css'
import getUser from './GetUser.js'
const user = JSON.parse(localStorage.getItem("userID"))
const profilEl = document.querySelector(".profile")
const collaboratorEl = document.querySelector(".collaborator")
const usersEl = document.querySelector(".users")  

user ? profilEl.innerHTML = getUser(user) : location.href = "/login.html"

collaboratorEl.addEventListener("click" , async (e)=> {
  e.preventDefault()
  const req = await fetch("http://localhost:3000/users")
  const data = await req.json()
  render(data)
})


function UserCollector({name, position}){
  return `
  <li >
    <div class="user-item">
      <div class="user-avatar"></div>
      <div class="user-details">
        <h2 class="user-name">${name}</h2>
        <p class="user-position">${position}</p>
      </div>
      <i class="user-icon fas fa-edit"></i>
    </div>
  </li>
  `
}

function render(data) {
  data.active = true
 usersEl.innerHTML = data.reduce((kod,item) => kod+= UserCollector(item) , "")
}



