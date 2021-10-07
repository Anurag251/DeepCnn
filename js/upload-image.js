const dropArea = document.querySelector(".drop-area");
dragText = dropArea.querySelector("#name");
button = dropArea.querySelector("#button");
input = dropArea.querySelector("#input");
let file;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  showFile();
  dropArea.classList.add("active");
});

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag Your Image Here";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  file = event.dataTransfer.files[0];
  showFile();
});

const showFile = () => {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileUrl = fileReader.result;

      let pdfTaf = `<img src="${fileUrl}" alt="">`;
      dropArea.innerHTML = pdfTaf;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not image file!");
    dropArea.classList.remove("active");
  }
};
