const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");

const img169 = document.getElementById("img-16-9");
const img916 = document.getElementById("img-9-16");

// Click to open file picker
dropZone.addEventListener("click", () => fileInput.click());

// Drag events
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");

    if (e.dataTransfer.files.length) {
        handleFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length) {
        handleFile(fileInput.files[0]);
    }
});

function handleFile(file) {
    if (!file.type.startsWith("image/")) {
        alert("Please drop an image file");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        img169.src = reader.result;
        img916.src = reader.result;
    };
    reader.readAsDataURL(file);
}

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}