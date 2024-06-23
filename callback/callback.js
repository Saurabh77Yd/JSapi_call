function fetchPosts(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/posts"); //API for details
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      callback(`Error: ${xhr.status}`);
    }
  };
  xhr.onerror = function () {
    callback("Error fetching posts");
  };
  xhr.send();
}

document.getElementById("fetch-button").addEventListener("click", () => {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "Loading...";

  fetchPosts((error, data) => {
    if (error) {
      postList.innerHTML = error;
      console.error(error);
    } else {
      postList.innerHTML = "";
      data.posts.forEach((post) => {
        const titleElement = document.createElement("p");
        titleElement.textContent = post.title;
        titleElement.style.paddingLeft = "20px";
        postList.appendChild(titleElement);
      });
    }
  });
});
