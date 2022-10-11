var postCounter = 3;
function postFunction() {
    var topic1Text = document.getElementById("topic1");
    var comment1Text = document.getElementById("comment1");
    var comment2Text = document.getElementById("comment2");
    var postText = document.getElementById("text1").value;

    if (postCounter == 3) {
        topic1Text.innerHTML = postText;
        postCounter = postCounter - 1;
    }
    else if (postCounter == 2) {
        comment1Text.innerHTML = postText;
        postCounter = postCounter - 1;
    }
    else if (postCounter == 1) {
        comment2Text.innerHTML = postText;
        postCounter = postCounter - 1;
    }

}

function clearFunction() {
    var topic1Text = document.getElementById("topic1");
    var comment1Text = document.getElementById("comment1");
    var comment2Text = document.getElementById("comment2");
    var postText = document.getElementById("text1");
    topic1Text.innerHTML = null;
    comment1Text.innerHTML = null;
    comment2Text.innerHTML = null;
    postText.value = null;
    postCounter = 3;
}