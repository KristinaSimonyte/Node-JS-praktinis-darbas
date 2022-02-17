const backendUrl = "http://localhost:3000/services";
const members = document.getElementById("membership-list");

function gotoMemebership() {
  window.location.href = "/public/new-membership.html";
}

async function deleteMemberschipFromDb(id) {
  await fetch(`${backendUrl}/${id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.text())
    .then((dataBack) => {
      runApp();
    })
    .catch((err) => console.warn(err));
}

async function deleteMemberschip(id = 0) {
  await deleteMemberschipFromDb(id);
  console.log("id for delete:" + id);
}

function fillMembershipList(membersList) {
  let items = "";

  for (let i = 0; i < membersList.length; i++) {
    const price =
      "<h3>$" + membersList[i].price + "&nbsp;" + membersList[i].name + "</h3>";
    const description = "<span>" + membersList[i].description + "</span><hr />";
    const button =
      '<div class="button-delete" ><button type="button" onclick="deleteMemberschip(\'' +
      membersList[i]._id +
      '\')"><i style="color:red;" class="fa fa-trash" aria-hidden="true"></i></div>';
    items += '<div class="card">' + price + description + button + "</div>";
  }
  members.innerHTML = items;
}

async function getMembersData() {
  const data = await fetch(backendUrl);
  const jsonData = await data.json();
  return jsonData.data;
}

async function runApp() {
  const members = await getMembersData();
  fillMembershipList(members);
}

runApp();
