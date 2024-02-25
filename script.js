const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const initLike = 34;
const initDislike = 6;

let likesCount = initLike;
let dislikeCount = initDislike;
let liked = false; 
let disliked = false; 

likeBtn.innerText = "👍 " + likesCount;
dislikeBtn.innerText = "👎 " + dislikeCount;

function handleLike() {
    if (!liked) {
        likesCount++;
        likeBtn.innerText = "👍 " + likesCount;
        liked = true;
        
        if (disliked) { 
            dislikeCount--;
            dislikeBtn.innerText = "👎 " + dislikeCount;
            disliked = false;
        }
    } else {
        likesCount--;
        likeBtn.innerText = "👍 " + likesCount;
        liked = false;
    }
    setCookie();
}

function handleDislike() {
    if (!disliked) {
        dislikeCount++;
        dislikeBtn.innerText = "👎 " + dislikeCount;
        disliked = true;
        if (liked) { 
            likesCount--;
            likeBtn.innerText = "👍 " + likesCount;
            liked = false;
        }
    } else {
        dislikeCount--;
        dislikeBtn.innerText = "👎 " + dislikeCount;
        disliked = false;
    }
    setCookie();
}

function setCookie() {
    document.cookie = "voted=true; SameSite=Strict; Max-Age=60";
}

window.onload = function () {
    if (document.cookie && document.cookie.indexOf("voted") > -1) /* if the word (voted) doesn't exist then the value will be -1  */ {
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    }
};
