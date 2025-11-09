const files = document.getElementById("files");
const gallery = document.getElementById("gallery");

function upload() {
    const filesArray = Array.from(files.files);
    const storedData = JSON.parse(localStorage.getItem("base64Array")) || [];
    if (filesArray.length === 0) return;
    let processed = 0;

    filesArray.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            storedData.push({
                name: file.name,
                data: reader.result
            });
            processed++;
            if (processed === filesArray.length) {
                localStorage.setItem("base64Array", JSON.stringify(storedData));
                display();
            }
        };
        reader.readAsDataURL(file);
    });

    files.value = '';
}

function display() {
    gallery.innerHTML = '';
    const raw = JSON.parse(localStorage.getItem("base64Array")) || [];
    if (raw.length === 0) return;

    const data = raw.map(item => {
        if (!item) return null;
        if (typeof item === 'string') {
            const s = item;
            const isPdf = s.startsWith && s.startsWith('data:application/pdf');
            return {
                name: isPdf ? 'file.pdf' : 'file',
                data: s
            };
        }
        if (item.data && item.name) return item;
        if (item.data && !item.name) return { name: 'file', data: item.data };
        return null;
    }).filter(Boolean);

    if (data.length === 0) return;

    data.forEach(item => {
        let content = '';
        if (typeof item.data === 'string' && item.data.startsWith('data:image')) {
            content = `<img src="${item.data}" alt="${item.name}" class="w-full h-full object-cover">`;
        } else if (typeof item.data === 'string' && item.data.startsWith('data:application/pdf')) {
            content = `
                <div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-800">
                    <span class="text-sm font-semibold truncate px-2">${item.name}</span>
                </div>`;
        } else {
            content = `
                <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">
                    <span class="text-sm truncate px-2">${item.name || 'file'}</span>
                </div>`;
        }

        gallery.innerHTML += `
        <div class="card w-64 h-64 flex flex-col border rounded overflow-hidden">
            <div class="flex-1 overflow-hidden">
                ${content}
            </div>
            <a href="${item.data}" download="${item.name}" class="bg-blue-500 text-white px-4 py-2 text-center">
                Download
            </a>
        </div>`;
    });
}

function clearGallery() {
    localStorage.removeItem("base64Array");
    display();
}

display();
