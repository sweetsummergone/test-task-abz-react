const input = document.querySelector('.form__file-uploader');
const para = document.querySelector('.form__preview-text');

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];

input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    const curFiles = input.files;
    if (curFiles.length === 0) {
        para.textContent = 'Upload your photo';
    } else {
        for (const file of curFiles) {
            if (validFileType(file)) {
                para.textContent = `${file.name}`;
            } else {
                para.textContent = `Not a valid file type.`;
            }
        }
    }
  }
  
function validFileType(file) {
    return fileTypes.includes(file.type);
}