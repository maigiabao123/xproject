// let lname = document.querySelector("#lname");
// let subject = document.querySelector("#subject");
// let button = document.querySelector("#button");
// // let todoList = [];

// button.addEventListener("click", function () {
//     let checkEmpty = checkInputIsEmpty(
//       lname.value,
//       subject.value,
//     );
  
//     let checkAvailable = checkAvailableUser(lname.value, data);
  
//     if (checkEmpty == true && checkAvailable == true) {
//       if (lname.value != "", subject.value != "") {
//         alert("Gửi đánh giá thành công");
//         // Lưu đối tượng
//         data.push({
//           username: lname.value,
//           password: subject.value,
//         });
//         //
//         localStorage.setItem("User", JSON.stringify(data));
  
     
//       }
//     }
//   });



let post_comment = document.getElementById("post_comment");
let list_post_comment = document.querySelector(".list_post_comment");
let username = document.getElementById("username");
let comment = document.getElementById("comment");
let stars = document.querySelectorAll(".stars i");

// Check xem trong localStorage có tồn tại mảng comment
let getListComment = JSON.parse(localStorage.getItem("listComment"));
if (getListComment == null) {
  localStorage.setItem("listComment", JSON.stringify([]));
  location.reload();
} else {
  post_comment.addEventListener("click", function () {
    // CALL FUNCTION
    // checkExistedUser(getListComment);
    if (checkComment(username.value, comment.value) == true) {
      getListComment.push({
        username: username.value,
        comment: comment.value,
      });

      localStorage.setItem("listComment", JSON.stringify(getListComment));
      location.reload();
    }
    comment.value = "";
    username.value = "";
  });
}

// function checkExistedUser(usernameInput, arrayRegistered) {
//   if (usernameInput == arrayRegistered[i].username) {
//     alert("User da ton tai");
//     return false;
//   }

//   return true;
// }

renderComment(getListComment);

// Render comments
function renderComment(arrayComments) {
  for (let i = 0; i < arrayComments.length; i++) {
    let new_item_comment = document.createElement("div");
    new_item_comment.className = "item_comment";
    new_item_comment.innerHTML = `
    <!-- img_container -->
    <div class="img_container">
    >
    </div>
    
    <!-- content_container -->
    <div class="content_container">
    <p class="content_description">
    ${arrayComments[i].comment}
    </p>
    
    <div class="content_info_container">
    <div class="date_userpost">
    <span class="name">${arrayComments[i].username}</span>
    <span class="date">December 4, 2017 at 3:12 pm</span>
    </div>
    <div class="reply">Reply</div>
    </div>
    </div>
    `;
    list_post_comment.appendChild(new_item_comment);
  }
}

// function
function checkComment(username, comment) {
  if (username == "" || comment == "") {
    if (username == "") {
      alert("Username is empty, rewrite this input");
      return false;
    }

    if (comment == "") {
      alert("Comment is empty, rewrite this input");
      return false;
    }
    return false;
  }
  return true;
}

let current_user = {
  username: "",
  course_enrolled: [],
};
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

// Xóa 1 phẩn tử nào đó ở trong mảng:

    


