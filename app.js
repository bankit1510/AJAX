//Getting the data
document.getElementById("button").addEventListener("click", loadUser);
document.getElementById("button").onClick = this.disabled = true;
function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:3000/users/", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);
      var table = document.getElementById("table");
      let heading = `<tr>
      <th>Id</th><th>FName</th><th>LName</th><th>Age</th></tr>
      <tr>`;

      for (var i in users) {
        table.innerHTML += `
        <tr>
            <td>${users[i].fName}</td>
            <td>${users[i].lName}</td>
            <td>${users[i].age}</td>
            <td><button id="edit" onClick='editData("${users[i].id}")'>Edit</button></td>&nbsp
            <td><button id="delete" onclick='deleteData("${users[i].id}")'>Delete</button></td>&nbsp
        </tr>`;
      }
    }
  };
  const button = document.querySelector("button");
  button.setAttribute("disabled", "");
  xhr.send();
}

//For Posting the data
const form = document.getElementById("postData");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const params = {
    fName: document.querySelector("#fName").value,
    lName: document.querySelector("#lName").value,
    age: document.querySelector("#age").value,
  };

  const http = new XMLHttpRequest();
  http.open("POST", "http://127.0.0.1:3000/users/");
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(params));
  http.onload = function () {
    alert(http.responseText);
  };
  document.getElementById("postData").reset();
});

//For Getting the data by id

const getDataByID = document.getElementById("getDataByID");
getDataByID.addEventListener("submit", (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  var id = document.getElementById("id").value;

  xhr.open("GET", `http://127.0.0.1:3000/users/${id}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      console.log(user);
      var table = document.getElementById("tableGDBI");
      let data = `<table id="getByIDTable">
      
      <tr>
       <td>${user.fName}</td>
       <td>${user.lName}</td>
       <td>${user.age}</td>
      <td><button id="edit" onclick='editData("${user.id}")'>Edit</button></td>
      <td><button id="delete" onclick='deleteData("${user.id}")'>Delete</button></td>
      </tr>
      
     </table>`;
      table.innerHTML = data;
    }
  };
  xhr.send();
  document.getElementById("getDataByID").reset();
});

//Deleting a record
function deleteData(testId) {
  console.log(testId);
  var xhr = new XMLHttpRequest();

  xhr.open("DELETE", `http://127.0.0.1:3000/users/${testId}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      alert(`Successfully deleted ${testId}`);
      location.reload();
    }
  };
  xhr.send();
}

function editData(updateId) {
  console.log(updateId);
}
//Updating the data

// const Updateform = document.getElementById("UpdateDataById");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const params = {
//     fName: document.querySelector("#fNameU").value,
//     lName: document.querySelector("#lNameU").value,
//     age: document.querySelector("#ageU").value,
//   };

//   const http = new XMLHttpRequest();
//   http.open("PATCH", "http://127.0.0.1:3000/users/");
//   http.setRequestHeader("Content-type", "application/json");
//   http.send(JSON.stringify(params));
//   http.onload = function () {
//     alert(http.responseText);
//   };
//   document.getElementById("postData").reset();
// });
