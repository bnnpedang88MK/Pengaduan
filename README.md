Sistem pengaduan member berbasis web yang terintegrasi dengan Google Apps Script, Google Sheets, Google Drive, dan Telegram Bot.
Digunakan untuk menerima laporan member lengkap dengan bukti screenshot, menyimpan data otomatis, dan mengirim notifikasi real-time ke grup Telegram admin.

✨ Fitur

📋 Form pengaduan web (HTML)

📎 Upload screenshot (foto)

🔗 Screenshot disimpan ke Google Drive (link)

📊 Data otomatis masuk ke Google Spreadsheet

🔔 Notifikasi otomatis ke Telegram group

📱 Mobile friendly

🧱 Tech Stack

HTML, CSS, JavaScript

Google Apps Script (Web App)

Google Sheets

Google Drive

Telegram Bot API

⚙️ Konfigurasi Apps Script

Isi variabel berikut di Apps Script:

const TOKEN = "TOKEN_BOT_TELEGRAM";
const CHAT_ID = "-100XXXXXXXXXX";
const FOLDER_ID = "ID_FOLDER_GOOGLE_DRIVE";
const SHEET_NAME = "Pengaduan";
const SPREADSHEET_ID = "ID_GOOGLE_SHEET";

🚀 Deployment

Apps Script → Deploy → New Deployment

Type: Web App

Execute as: Me

Access: Anyone

Salin Web App URL

🌐bnnpedang88mk.github.io/Pengaduan/

Ganti URL webhook di file HTML:

const WEBHOOK_URL = "PASTE_WEB_APP_URL_DI_SINI";

📊 Struktur Spreadsheet
Kolom	Keterangan
A	Tanggal
B	Kategori
C	Username
D	WhatsApp
E	Keluhan
F	Lampiran (Link Drive)
🔔 Notifikasi Telegram

Admin akan menerima pesan berisi:

Data pengaduan

Link bukti screenshot (Drive)

📌 Catatan

Bot Telegram harus ditambahkan & dijadikan admin di grup

Folder Drive diset Anyone with link (View)

Urutan kolom Spreadsheet jangan diubah

👨‍💻 Author

PD88 – Battle Report System
