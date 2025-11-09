# Simple Cloud Storage

This project is an **interactive web application** that allows users to **upload images and PDF files** directly in the browser.  
It aims to provide a **simple and private mini cloud storage** using **localStorage** for temporary file storage.

---

## Live Demo

You can view the live version of the project here:  
[Live Demo Link]()

---

## Features

- **Upload Files** — Supports uploading **images** and **PDF files** only.  
- **Instant Display** — Images appear immediately in the gallery; PDFs show their filename.  
- **Download Files** — Users can download any uploaded file individually.  
- **Clear Cloud** — Remove all uploaded files from the cloud with one click.  
- **Local Storage** — Files are stored locally in the browser, remaining available on page reload.  
- **Responsive Design** — Works across desktop, tablet, and mobile devices.

---

## Technologies Used

- **HTML5** — Page structure and file input.  
- **CSS3** — Styling and responsive layout.  
- **Tailwind CSS** — Modern, responsive design.
- **JavaScript (ES6)** — Handles file upload, Base64 conversion, and localStorage management.

---

## Project Structure

```
Simple-Cloud/
│
├── css/style.css
├── js/script.js
└── index.html
```

---

## How It Works

1. The user selects images or PDF files using the **file input**.  
2. JavaScript converts each file into **Base64** format and stores it in **localStorage**.  
3. Uploaded images are displayed in a gallery; PDFs show their **filename**.  
4. The user can **download** each file or **clear all files** from the cloud.  
5. Files remain stored even after refreshing the page.

---

## Getting Started

1. **Clone or download** this repository.  
2. Open `index.html` in your browser.  
3. Use the **file input** to upload images or PDFs.  
4. Click **Download** to save any file, or **Clear Cloud** to remove all files.

---

## Folder Details

| File / Folder | Description |
|----------------|--------------|
| `index.html` | The main webpage structure |
| `css/style.css` | Contains all styles and layout |
| `js/script.js` | Handles file upload, display, and deletion |

---

## Future Improvements

- Support **drag & drop** file upload.  
- Add **individual file deletion** without clearing the entire cloud.  
- Include **file search and filtering**.  
- Implement a **real backend cloud storage** for multi-device access.

---

## License

This project is **open-source** and free to use, modify, or share for educational and non-commercial purposes.  
Developed by **Shorouk Khaled**.
