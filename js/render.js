const renderUsers = (users) => {
    const ContainerElement = document.getElementById("container");
    let htmlUser = "";
    for (const user of users) {
      htmlUser += `<li>${listUser.id} - ${listUser.user}</li>` - ${listUser.email}</li>`
    }
    ContainerElement.innerHTML = htmlUser;
  };