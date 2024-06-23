//click event after button click
document.getElementById("fetchButton").addEventListener("click", fetchData);

async function fetchData() {
  const dataContainer = document.getElementById("dataContainer");
  //   after click loading
  dataContainer.innerHTML = "Loading...";
  try {
    const response = await fetch("https://dummyjson.com/posts"); //api for data
    const data = await response.json();
    console.log(data);
    dataContainer.innerHTML = "";
    // Loop for all title value
    data.posts.forEach((post) => {
      const val = document.createElement("a");
      val.textContent = post.title;

      val.target = "_blank";
      val.style.display = "block";
      val.style.padding = "20px";

      dataContainer.appendChild(val);
    });
  } catch (error) {
    dataContainer.innerHTML = "Error fetching posts";
    console.error("Error:", error);
  }
}
