function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Please enter all details");
        return;
    }

    let list = document.getElementById("list");
    let item = document.createElement("li");

    item.textContent = "Name: " + name + ", Roll No: " + roll;
    list.appendChild(item);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}