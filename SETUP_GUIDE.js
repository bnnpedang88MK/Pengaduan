/**
 * SETUP GUIDE - SISTEM PENGADUAN v1.0 (IMPROVED SECURITY)
 * ======================================================
 */

// STEP 1: SETUP CREDENTIALS (JALANKAN SEKALI)
// ============================================
// 1. Copy-paste function ini ke Apps Script:
//
// function setupProperties() {
//   const props = PropertiesService.getScriptProperties();
//   props.setProperties({
//     'SS_ID': 'PASTE_GOOGLE_SHEET_ID_HERE',
//     'SHEET_GID': 'PASTE_SHEET_GID_HERE',
//     'FOLDER_ID': 'PASTE_DRIVE_FOLDER_ID_HERE',
//     'TELE_TOKEN': 'PASTE_TELEGRAM_BOT_TOKEN_HERE',
//     'TELE_GROUP': 'PASTE_TELEGRAM_GROUP_ID_HERE',
//     'WA_LICEN': 'PASTE_WANINJA_LICENSE_HERE',
//     'WA_API_URL': 'https://socket.wasenderpro.com/whatsapp',
//     'MAX_FILE_SIZE_MB': '5',
//     'ALLOWED_FILE_TYPES': 'pdf,jpg,jpeg,png,gif,webp,doc,docx'
//   });
//   Logger.log("✅ Properties berhasil disimpan!");
// }
//
// 2. Replace nilai-nilai yang SESUAI DENGAN KONFIGURASI ANDA
// 3. Run function sekali
// 4. Setelah sukses, HAPUS atau COMMENT function setupProperties()

// STEP 2: WEBHOOK DEPLOYMENT
// ==========================
// 1. Klik "Deploy" → "New Deployment"
// 2. Type: "Web App"
// 3. Execute as: (Pilih akun Anda)
// 4. Who has access: "Anyone"
// 5. Klik Deploy
// 6. Copy URL webhook → Gunakan di client/form

// STEP 3: SETUP AUTOMATION (Optional tapi recommended)
// ====================================================
// 1. Project Settings → Triggers
// 2. Buat trigger baru:
//    - Choose function: "cleanupRateLimitData"
//    - Event type: "Time-driven"
//    - Type: "Daily"
//    - Time: Pilih jam off-peak (misal 03:00 AM)
// 3. Save

// STEP 4: TESTING
// ===============
// Jalankan function testNotifications() untuk cek notifikasi

// FITUR-FITUR BARU:
// ==================
// ✅ Credentials aman di Properties Service (tidak hardcoded)
// ✅ Validasi input lengkap (username, WA, keluhan)
// ✅ Rate limiting: max 5 pengaduan per nomor per jam
// ✅ Validasi file: tipe & ukuran
// ✅ Normalisasi nomor WA otomatis
// ✅ Error handling yang proper
// ✅ Logging untuk debugging
// ✅ Escape markdown untuk Telegram (cegah XSS)
// ✅ Cleanup otomatis rate limit data

// CATATAN PENTING:
// ================
// 1. JANGAN commit credentials ke GitHub
// 2. Jika sudah kebocoran, regenerate semua tokens
// 3. Monitor logs di Apps Script untuk debugging
// 4. Test di environment dev dulu sebelum production
// 5. Backup Sheet Anda secara berkala
