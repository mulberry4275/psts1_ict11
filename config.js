const CONFIG_TOMBOL = {
    soalUjian: { aktif: false },
    uploadJawaban: { aktif: false }
};

document.addEventListener('DOMContentLoaded', () => {
    const btnSoal = document.getElementById('btnSoalUjian');
    const btnUpload = document.getElementById('openModalBtn');
    if (!CONFIG_TOMBOL.soalUjian.aktif) {
        btnSoal.classList.add('disabled');
        btnSoal.removeAttribute('href');
        btnSoal.setAttribute('aria-disabled', 'true');
        btnSoal.textContent += " (Belum Dibuka)";
    }

    if (!CONFIG_TOMBOL.uploadJawaban.aktif) {
        btnUpload.classList.add('disabled');
        btnUpload.disabled = true;
        btnUpload.textContent += " (Belum Dibuka)";
    }
});
