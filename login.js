
import "./index.css"
const registerEL = document.getElementById("register-form")
const loginEL = document.getElementById("login-form")

registerEL.addEventListener("submit" , (e)=>{
    e.preventDefault()
      const  data = {
        username : e.target.username.value,
        password : e.target.password.value,
        surname : e.target.surname.value,
        name : e.target.name.value,
        position : e.target.position.value,
        salary : e.target.salary.value,
        experience : e.target.experience.value,
        colleagues : e.target.colleagues.value,
        collaborator : [e.target.collaborator.value] ,
        active : false
    }
    fetch("http://localhost:3000/users", {
        method : "POST" ,
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          },
    })
})
loginEL.addEventListener("submit", function (e) {
    e.preventDefault();
    const formEl = e.target;
    const data = {
      username: formEl.username.value.trim(),
      password: formEl.password.value.trim(),
    };
    loginUser(data);
  });

 async function loginUser(data) {
    const req = await fetch("http://localhost:3000/users")
    const newdata = await req.json()
     
   const user =  newdata.find(item=> item.username === data.username && item.username == data.username)
   if (user) {
       window.location.href = "/"
       user.active = true
       localStorage.setItem("userID" ,JSON.stringify(user) )
   }else 
   console.log("Tapilmadi");
  }

