const backendUrl = "http://localhost:3000";
const membershipForm = document.getElementById("add-membership");

membershipForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const price = event.target.elements.price.value;
  const description = event.target.elements.description.value;
  const formData = {
    name,
    price,
    description,
  };
  await submitForm(formData);
  console.log("submit");
});

async function submitForm(data) {
  fetch(`${backendUrl}/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.text())
    .then((dataBack) => 
    { 
        clearForm();
        window.location.href = "/public/index.html";
    })
    .catch((err) => console.warn(err));
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
}
