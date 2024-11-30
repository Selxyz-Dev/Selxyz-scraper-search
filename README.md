# Selxyz-scraper

Modul untuk kalian yang membutuhkan fungsi pencarian untuk sesuatu, seperti pencarian untuk anime, game, atau kategori lainnya.

---

## Cara Instalasi

Untuk menginstal modul `selxyz-scraper`, gunakan perintah npm berikut:

```bash
$ npm install selxyz-scraper
```

# Cara Penggunaan
- 1. Mengimpor Modul
Karena modul ini menggunakan CommonJS, Anda bisa mengimpor modul dengan cara berikut:

```javascript
const { anichin } = require('selxyz-scraper');
```

- 2. Menggunakan Fungsi anichin
  - Fungsi anichin digunakan untuk melakukan pencarian berdasarkan kata kunci, seperti nama anime. Fungsi ini mengembalikan data hasil pencarian.

Contoh penggunaan:
```javascript
const { anichin } = require('selxyz-scraper');

anichin('soul land').then(data => {
  console.log(data); 
}).catch(err => {
  console.error('Error:', err);
});
```

### List Feature
---
```markdown
- anichin: Cari Donghua Yang Anda Inginkan
- anichinDetail: Cari Detail Berdasarkan Url Yang Anda Berikan
- donghuaworld: Cari Donghua Yang Anda Inginkan
- donghuaworldDetail: Cari Detail Donghua Berdasarkan Url Anda
- mcpedl: Cari Mods Minecraft Terbaru
- mcpedlDetail: Cari Detail Tentang Mods
- steam: Cari Game Untuk Pc
- steamDetail: Cari Detail Game Pc Untuk Anda
- codeSearch: Cari Code Yang Anda Inginkan
- revSearch: Cari Lagu Dengan Reverb
```
---
# Kontributor
Programmer yang telah membantu dalam pembuatan modul ini:

- [`Selxyz`](https://wa.me/6282181938329) 
- [`Hann`](https://wa.me/6283824196477) 
- [`Danii`](https://wa.me/6285819572683) 

---

# License

- Project Ini Di Lindungi Oleh License ISC. 

---
