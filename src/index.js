// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

//eventhandler called add comment()

function addComment() {
  //add and store a value of the input Element
  const newComment = cInput.value;
  if (newComment === "") return;

  const li = document.createElement("li"); //create a list item
  li.textContent = newComment; //setting the text to the input value
  //add the value to the comment list Element
  console.log(li);
  cList.appendChild(li);
  //clear the input Element
  cInput.value = "";
  //focus the input element
  cInput.focus();
}

cBtn.addEventListener("click", addComment);
