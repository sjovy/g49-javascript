const data = [
  { firstname: "John", lastname: "Doe", email: "john@example.com" },
  { firstname: "Mary", lastname: "Moe", email: "mary@example.com" },
  { firstname: "July", lastname: "Dooley", email: "july@example.com" },
];

// showTable();

function showTable() {
  if (!document.getElementById("dynamicTable")) {
    const table = document.createElement("table");
    table.id = "dynamicTable";
    table.classList.add("table", "table-striped");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headerText = ["Firstname", "Lastname", "Email"];
    headerText.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    data.forEach((person) => {
      const row = document.createElement("tr");
      const column = ["firstname", "lastname", "email"];
      column.forEach((value) => {
        const td = document.createElement("td");
        td.textContent = person[value];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    const dataTable = document.getElementById("data-table");
    dataTable.appendChild(table);
    displayMessage();
  }
}

// document.getElementById("showTable").onclick = showTable;

function hideTable() {
  console.log("hideTable has been executed.");
  const table = document.getElementById("dynamicTable");
  if (table) {
    table.remove();
  }
  hideMessage();
}

function displayMessage() {
  //?<div id="message"></div>
  //*<div class="alert alert-success">
  //*<strong>Success!</strong> Indicates a successful or positive action.
  //*</div>

  const messageElement = document.getElementById("message");
  messageElement.innerHTML =
    "<strong>Success!</strong> The table has been shown.";
  messageElement.classList.add("alert", "alert-success");
  messageElement.style.display = "block";
}

function hideMessage() {
  const messageElement = document.getElementById("message");
  messageElement.style.display = "none";
}

function validateAndSubmit() {
  console.log("validateAndSubmit has been executed");

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstName || !lastName || !email) {
    if (!firstName) {
      document.getElementById("firstName").classList.add("is-invalid");
    }
    if (!lastName) {
      document.getElementById("lastName").classList.add("is-invalid");
    }
    if (!email) {
      document.getElementById("email").classList.add("is-invalid");
    }
    return;
  }
  document.getElementById("firstName").classList.remove("is-invalid");
  document.getElementById("lastName").classList.remove("is-invalid");
  document.getElementById("email").classList.remove("is-invalid");
  showTable();
}

//* document.getElementById("reg-btn").addEventListener("click", validateAndSubmit);
document
  .getElementById("reg-btn")
  .addEventListener("click", () => validateAndSubmit());
// document
//   .getElementById("reg-btn")
//   .addEventListener("click", () => console.log("Validation has been done"));

resetForm = () => {
  document.getElementById("registrationForm").reset();
  document.getElementById("firstName").classList.remove("is-invalid");
  document.getElementById("lastName").classList.remove("is-invalid");
  document.getElementById("email").classList.remove("is-invalid");
  hideTable();
};
