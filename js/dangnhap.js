let input_username = document.querySelector("#input_username");
let input_password = document.querySelector("#input_password");
let button = document.querySelector("button");
// let todoList = [];

let data = JSON.parse(localStorage.getItem("User"));

if (data == null) {
    localStorage.setItem("User", JSON.stringify([]));
    location.reload();
}

button.addEventListener("click", function () {
    if (
        input_username.value == "" ||
        input_password.value == "" 
    ) {
    } else if (
        input_username.value != "" ||
        input_password.value != "" 
    ) {
        if (input_password.value == "") {
            alert("Bạn thiếu user, bạn nhập lại vào ô username");
        } else if (input_username.value == "") {
            alert("Bạn thiếu password, bạn nhập lại vào ô password");
        }
        if (input_password.value != "") {
            alert("Đăng nhập thành công");
            // Lưu đối tượng
            data.push({
                username: input_username.value,
                password: input_password.value,
            });
            //
            localStorage.setItem("User", JSON.stringify(data));

            input_password.value = "";
            input_username.value = "";
            document.body.appendChild(newDiv);
        } else {
            alert("Đăng nhập không thành công");
        }
    }
});

console.log(data);
