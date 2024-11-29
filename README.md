# Selxyz-scraper-search

Modul untuk kalian yang membutuhkan fungsi pencarian untuk sesuatu, seperti pencarian untuk anime, game, atau kategori lainnya.

---

## Cara Instalasi

Untuk menginstal modul `selxyz-scraper-search`, gunakan perintah npm berikut:

```bash
$ npm install selxyz-scraper-search
```

# Cara Penggunaan
- 1. Mengimpor Modul
Karena modul ini menggunakan CommonJS, Anda bisa mengimpor modul dengan cara berikut:

```javascript
const { anichin } = require('selxyz-scraper-search');
```
- 2. Menggunakan Fungsi anichin
  - Fungsi anichin digunakan untuk melakukan pencarian berdasarkan kata kunci, seperti nama anime. Fungsi ini mengembalikan data hasil pencarian.

Contoh penggunaan:
```javascript
const { anichin } = require('selxyz-scraper-search');

anichin('soul land').then(data => {
  console.log(data); 
}).catch(err => {
  console.error('Error:', err);
});
```

# Kontributor
Programmer yang telah membantu dalam pembuatan modul ini:

- Selxyz
