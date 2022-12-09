//Getting the data
document.getElementById("button").addEventListener("click", loadUser);

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
        table.innerHTML +=
          "<tr id='tr'> <td id='td'>" +
          users[i].fName +
          "</td><td id='td'>" +
          users[i].lName +
          "</td><td id='td'>" +
          users[i].age +
          "</td><td id='td'> <button id='edit'>Edit</button>&nbsp<button id='delete'>Delete</button>";
      }
    }
  };
  xhr.send();
}
