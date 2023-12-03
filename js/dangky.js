let input_username = document.querySelector("#input_username");
let input_password = document.querySelector("#input_password");
let input_email = document.querySelector("#input_email");
let confirm_password = document.querySelector("#confirm_password");
let button = document.querySelector("button");


let data = JSON.parse(localStorage.getItem("User"));

if (data == null) {
  localStorage.setItem("User", JSON.stringify([]));
  location.reload();
}

// Check Available
function checkAvailableUser(input_username, arrayUserLocalStorage) {
  for (let i = 0; i < arrayUserLocalStorage.length; i++) {
    if (input_username == arrayUserLocalStorage[i].username) {
      alert("Tên người dùng đã tồn tại");
      return false;
    }
  }

  return true;
}

// Tạo hàm để check empty
function checkInputIsEmpty(input_username, input_password, confirm_password, input_email) {
  if (input_username == "" || input_password == "" || confirm_password == "" || input_email == "") {
    if (input_username == "") {
      alert("Bạn thiếu user, bạn nhập lại vào ô user");
      return false;
    } else if (input_password == "") {
      alert("Bạn thiếu password, bạn nhập lại vào ô password");
      return false;
    } else if (input_email == "") {
        alert("Bạn thiếu ô email, bạn phải nhập lại vào ô email")
        return false;
    } else if (confirm_password == "") {
      alert("Bạn thiếu confirm password, bạn nhập lại vào ô confirm");
      return false;
    }
  }

  return true;
}

// Event button
button.addEventListener("click", function () {
  let checkEmpty = checkInputIsEmpty(
    input_username.value,
    input_password.value,
    confirm_password.value,
    input_email.value,
  );

  let checkAvailable = checkAvailableUser(input_username.value, data);

  if (checkEmpty == true && checkAvailable == true) {
    if (input_password.value == confirm_password.value) {
      alert("Tạo tài khoản thành công");
      // Lưu đối tượng
      data.push({
        username: input_username.value,
        password: input_password.value,
      });
      //
      localStorage.setItem("User", JSON.stringify(data));

      input_password.value = "";
      input_email.value = "";
      input_username.value = "";
      confirm_password.value = "";
      document.body.appendChild(newDiv);
    } else {
      alert("Mật khẩu và mật khẩu xác nhận không giống nhau");
    }
  }
});

console.log(data);