const files = document.getElementById("files");
const gallery = document.getElementById("gallery");

function upload() {
    const filesArray = Array.from(files.files);
    const base64Array = JSON.parse(localStorage.getItem("base64Array")) || [];

    if (filesArray.length === 0) return;

    filesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
            base64Array.push(reader.result);

            if (base64Array.length === (JSON.parse(localStorage.getItem("base64Array")) || []).length + filesArray.length) {
                localStorage.setItem("base64Array", JSON.stringify(base64Array));
                display();
            }
        };

        reader.readAsDataURL(file);
    });

    files.value = '';
}

function display() {
    gallery.innerHTML = '';
    const data = JSON.parse(localStorage.getItem("base64Array")) || [];

    if (data.length === 0) return;

    data.forEach(item => {
        gallery.innerHTML += `
        <div class="card w-64 h-64 flex flex-col border rounded overflow-hidden">
            <div class="flex-1 overflow-hidden">
                <img src="${item}" alt="Image" class="w-full h-full object-cover">
            </div>
            <a href="${item}" download class="bg-blue-500 text-white px-4 py-2 text-center">
                Download
            </a>
        </div>`;
    });
}

display();
function clearGallery() {
    localStorage.removeItem("base64Array"); 
    display();
}