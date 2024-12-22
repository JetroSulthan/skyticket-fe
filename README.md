<div align="center">
  <img src="./public/assets/icons/logo1.svg" alt="Flight Booking App Banner" width="600px">
</div>

# Front-End - SkyTicket (Aplikasi Pemesanan Tiket Pesawat)

Selamat datang di repositori Front-End dari SkyTicket! Aplikasi pemesanan tiket pesawat berbasis web yang memungkinkan pengguna untuk mencari, membandingkan, dan memesan tiket pesawat dengan mudah dan aman. Aplikasi ini juga ramah pengguna dan mengintegrasikan fitur-fitur penting untuk memastikan pengalaman yang lancar bagi pengguna.

---

## 🚀 Fitur Utama

1. **Home Page**:
   - Mencari penerbangan dengan memilih destinasi, tanggal perjalanan, jumlah penumpang, dan kelas.
   - Integrasi destinasi favorit untuk pemilihan penerbangan yang cepat.

2. **Authentication Page (Login, Register, Reset Password, dan OTP)**:
   - Secure registration with required fields (name, email, phone number, password).
   - OTP-based email verification (6-digit code).

3. **Ticket List Page**:
   - Jelajahi penerbangan yang tersedia berdasarkan hasil pencarian pengguna.
   - Filter dan urutkan opsi untuk harga, durasi, dan maskapai penerbangan.

4. **Order Ticket Page**:
   - Menyimpan pesanan yang terkonfirmasi di akun pengguna.

5. **Payment Page**:
   - Pembayaran untuk tiket penerbangan dengan berbagai metode.

6. **Order History Page**:
   - Melihat riwayat pemesanan tiket pengguna.
   - Detail pemesanan dapat diunduh.

7. **Notification Page**:
   - Notifikasi terkait pembaruan pemesanan, pembayaran, atau promosi.
   - Filter berdasarkan jenis notifikasi.

8. **Account Page**:
   - Pengelolaan informasi akun pengguna.
   - Opsi untuk mengubah detail akun atau menghapus akun.

9. **Responsive Design**:
   - Berfungsi penuh di platform desktop dan mobile.

---

## 🌐 Routing Aplikasi

Routing dengan akses bebas (semua pengguna dapat mengakses):
- **Home Page** (`/`): Halaman utama untuk mencari penerbangan. *Dapat diakses oleh semua pengguna.*
- **OTP Page** (`/otp`): Halaman untuk verifikasi email dengan kode OTP. *Dapat diakses oleh semua pengguna.*
- **Login Page** (`/login`): Halaman untuk login ke akun pengguna. *Dapat diakses oleh semua pengguna.*
- **Register Page** (`/register`): Halaman untuk registrasi pengguna baru. *Dapat diakses oleh semua pengguna.*
- **Ticket List Page** (`/ticket-list`): Halaman untuk melihat daftar penerbangan yang tersedia. *Dapat diakses oleh semua pengguna.*
- **Reset Password Page** (`/reset-password`): Halaman untuk mengatur ulang kata sandi. *Dapat diakses oleh semua pengguna.*
- **Reset Password Request Page** (`/reset-password/request`): Halaman untuk meminta pengaturan ulang kata sandi. *Dapat diakses oleh semua pengguna.*
- **Not Found Page** (`*`): Halaman fallback untuk rute yang tidak ditemukan. *Dapat diakses oleh semua pengguna.*

Routing dengan akses terbatas (hanya pengguna yang sudah login yang dapat mengakses):
- **Order Ticket Page** (`/order-ticket`): Halaman untuk memesan tiket penerbangan. *Hanya untuk pengguna yang sudah login.*
- **Payment Page** (`/payment`): Halaman untuk melakukan pembayaran tiket. *Hanya untuk pengguna yang sudah login.*
- **Order History Page** (`/history`): Halaman untuk melihat riwayat pemesanan tiket. *Hanya untuk pengguna yang sudah login.*
- **Account Page** (`/account`): Halaman untuk mengelola akun pengguna. *Hanya untuk pengguna yang sudah login.*
- **Notification Page** (`/notification`): Halaman untuk melihat notifikasi terkait pemesanan. *Hanya untuk pengguna yang sudah login.*

---

## 🛠️ Tech Stack

### Front-End:
- **JavaScript**
- **Vite**
- **React.js**
- **Tailwind CSS**

### Peralatan Lainnya:
- **Axios**
- **JWT**
- **SweetAlert2**
- **Js-cookie**

---

## 📂 Struktur Folder

```
📦 skyticket-frontend
├── 📁 public
│   ├── 📁 assets
│   │   ├── 📁 icons
│   │   ├── 📁 images
│   │   └── 📄 vite.svg
├── 📁 src
│   ├── 📁 api
│   ├── 📁 components
│   │   ├── 📁 Elements
│   │   ├── 📁 Fragments
│   │   └── 📁 Styles
│   ├── 📁 contexts
│   ├── 📁 hooks
│   ├── 📁 pages
│   ├── 📁 services
│   │   ├── 📄 App.css
│   │   ├── 📄 App.jsx
│   │   ├── 📄 index.css
│   │   └── 📄 main.jsx
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 README.md
├── 📄 tailwind.config.js
└── 📄 vite.config.js
```

---

## 🔧 Instalasi

1. Klon repositori dari GitHub:

   ```bash
   git clone https://github.com/SkyTicket/skyticket-frontend
   ```

2. Navigasi ke direktori proyek:

   ```bash
   cd skyticket-frontend
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Konfigurasi variabel lingkungan:

   - Buat file `.env` di dalam folder `skyticket-frontend` dengan isi berikut:
     ```env
     VITE_BACKEND_URL = your_backend_url
     ```

5. Jalankan aplikasi untuk pengembangan lokal:

   ```bash
   npm run dev
   ```

7. Buka aplikasi di browser Anda:

   ```
   http://localhost:5173
   ```

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan ikuti langkah berikut:

1. Fork repositori ini.
2. Buat branch baru (git checkout -b feature/fitur-anda).
3. Commit perubahan Anda (git commit -m 'Tambahkan pesan Anda').
4. Push ke branch (git push origin feature/fitur-anda).
5. Buka pull request.

---

## 👥 Tim Pengembang

Terima kasih kepada semua anggota yang telah membantu mengembangkan aplikasi ini:

- **Aqsa Prima Cahya**: [Aqsaprima](https://github.com/Aqsaprima)
- **Jetro Sulthan Fatih Nurrafi**: [JetroSulthan](https://github.com/JetroSulthan)
- **Muhammad Rafif Ramadhansyah**: [raaapiiip](https://github.com/raaapiiip)
- **Rizal Firmansyah**: [rizallfrm](https://github.com/rizallfrm)

Happy Coding! ✈️
