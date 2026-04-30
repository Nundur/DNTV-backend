# DNTV
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-orange.svg)](https://www.mysql.com/)




## 📋 Tartalomjegyzék

- [A projektről](#projekt)
- [Főbb funkciók](#funkciok)
- [Technológiai stack](#tech-stack)
- [Adatbázis struktúra](#adatbazis)
- [Projekt struktúra](#struktura)
- [Környezeti változók](#env)
- [API végpontok](#api)
- [Biztonsági funkciók](#biztonsag)
- [Használt függőségek](#fuggosegek)
- [Tesztelés](#teszt)
- [Jövőbeli fejlesztések](#jovo)


<a id="projekt"></a>
## A projektről :
>A DNTV egy iskolai vizsgamunkára fejlesztett reszponzív streaming website


<a id="funkciok"></a>
## Főbb funkciók :
A DNTV egy iskolai vizsgamunkára fejlesztett reszponzív streaming website 

<a id="tech-stack"></a>
## 🛠️ Technológiai stack

### Backend
- MySQL
- Node.js
- Express
- JSON Web Tokens

### Frontend
- JavaScript
- HTML5/CSS3
- Bootstrap

  <a id="adatbazis"></a>
## 🗄️ Adatbázis struktúra

Az alkalmazás MySQL adatbázist használ a következő táblákkal:

| Tábla | Leírás | Mezők |
|-------|--------|-------|
| **feedbacks** | Az elküldött vissza jelzéseket tartalmazza | feedbackid, subject, category, message |
| **movies** | A regisztrált filmeket tartalmazza | movieid, title, description, studio, imdbrating, pgrating, cover, file, quality |
| **shows** | A regisztrált sorozatokat tartalmazza | showid, title, description, studio, imdbrating, pgrating, cover, quality |
| **show_episodes** | A regisztrált sorozatoknak az epizódjait tartalmazza | episodeid, showid, season, title, description, imdbrating, pgrating, file, quality, episode |
| **users** | Felhasználói fiókok és profilok | userid, email, psw, username, role |


<a id="struktura"></a>
## 📂 Projekt struktúra

```
project-root/
├── server.js                  # Alkalmazás belépési pont
├── config/                    # Konfigurációs fájlok
│   ├── dotenvConfig.js        # Környezeti változók betöltése
├── routes/                    # API útvonalak
│   ├── adminRoutes.js         # Hitelesítési-admin útvonalak
│   ├── feedbackRoutes.js      # Vissza jelzési útvonalak
│   ├── userRoutes.js          # Profil kezelési útvonalak
│   ├── videoRoutes.js         # Videó útvonalak
│   └── secretRoutes.html      # Titkos útvonal
├── controllers/               # Kezelők és vezérlő logika
│   ├── adminController.js     # Admin logika
│   ├── userController.js      # Felhasználó-kezelés
│   ├── videoController.js     # Videó kezelés
├── middleware/                # Egyéni middleware-ek
│   └── adminMiddleware.js     # Admin middleware
│   └── multer.js              # Fájlműveleti middleware
│   └── userMiddleware.js      # Felhasználói middleware
├── uploads/                   # Statikus eszközök
│   ├── covers/                # Feltöltött borító képek
│   ├── episodes/              # Feltöltött sorozatok
│   └── movies/                # Feltöltött filmek
└── models/
│   ├── adminModels.js         # Admin joggal kapcsolatos adatbázis kezelés funkciók
│   ├── userModel.js           # Felhasználóval kapcsolatos adatbázis kezelés funkciók
│   └── videoModels.js         # Videóval kapcsolatos adatbázis kezelés funkciók
└── db/
│   ├── db.js                  # Adatbázis betöltése, funkciók
```
