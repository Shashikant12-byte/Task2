const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageCard = document.createElement("div");
      imageCard.className = "image-card";

      const img = document.createElement("img");
      img.src = e.target.result;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "×";
      removeBtn.onclick = function () {
        gallery.removeChild(imageCard);
      };

      imageCard.appendChild(img);
      imageCard.appendChild(removeBtn);
      gallery.appendChild(imageCard);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
  }

  // Clear the input so the same file can be selected again
  this.value = "";
});