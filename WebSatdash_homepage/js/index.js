
        // Simulasi JavaScript untuk interaksi sederhana
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Website Kafe Kopi telah dimuat dengan sempurna.');
            
            // Contoh: Handler klik untuk tombol Pesan Sekarang (dalam konteks statis)
            const orderButton = document.querySelector('button.transform');
            orderButton.addEventListener('click', () => {
                alert('Terima kasih! (Simulasi navigasi/pemesanan)');
            });

            // Catatan: Dalam aplikasi nyata, Anda akan menambahkan logika untuk menu mobile, pencarian, dan lainnya di sini.
        });
        
        // Fungsi alert() diganti dengan pesan console/modal kustom di lingkungan nyata.
        function alert(message) {
            console.log("Notifikasi Simulasi:", message);
            const body = document.body;
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-amber-600 text-white p-4 rounded-lg shadow-xl transition-opacity duration-500 z-[100]';
            notification.textContent = message;
            body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 500);
            }, 3000);
        }
   