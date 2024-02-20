fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let result = "";

    data.map((value) => {
      result += `<tr>
      <td> ${value.name}</td>
      <td>${value.username}</td>
      <td>${value.email}</td>
      <td>${value.address.city}</td>
    </tr>`;
    });
    document.getElementById("usertable").innerHTML = result;
  })
  .catch((error) => {
    console.log("error");
  });
