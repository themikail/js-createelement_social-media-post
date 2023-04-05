console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postContainer = document.createElement("article");
postContainer.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username2";

likeButton.classList.add("post__button");
likeButton.setAttribute("type", "button");
likeButton.setAttribute("data-js", "like-button");
likeButton.textContent = "♥ Like";

postFooter.appendChild(postUsername);
postFooter.appendChild(likeButton);

postContainer.appendChild(postContent);
postContainer.appendChild(postFooter);

const body = document.querySelector("body");
body.appendChild(postContainer);

likeButton.addEventListener("click", handleLikeButtonClick);
