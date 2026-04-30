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
- [API végpontok](#api)
- [Használt függőségek](#fuggosegek)


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

<a id="api"></a>
## 🌐 API végpontok

### Felhasználói útvonalak

- **POST** `/users/register`: Regisztráció
- **POST** `/users/login`: Bejelentkezés
- **GET** `/users/whoami`: Whoami
- **POST** `/users/logout`: Kijelentkezés
- **PUT** `/users/modifyUser`: Felhasználó megváltoztatása

### Admin útvonalak

- **GET** `/admin/getAllUsers`: Összes felhasználó lekérdezése
- **POST** `/admin/bulk-update-users`: Összes felhasználó tömeges megváltoztatása
- **POST** `/admin/bulk-update-movies`: Összes film tömeges megváltoztatása
- **POST** `/admin/bulk-update-shows`: Összes show tömeges megváltoztatása
- **DELETE** `/admin/delete-user/userid`: Összes felhasználóból törlés
- **DELETE** `/admin/delete-movie/movieid`: Összes filmből törlés
- **DELETE** `/admin/delete-show/showid`: Összes showból törlés

### Videó útvonalak

- **GET** `/videos/getAllShows`: Összes show-t lekérni
- **GET** `/videos/getAllMovies`: Összes filmet lekérni
- **POST** `/videos/getRandomProjects`: Random projekteket lekérni
- **GET** `/videos/getMovie`: Lekérni egy film-ről adatokat
- **GET** `/videos/getShow`: Lekérni egy show-ról adatokat
- **GET** `/videos/getShowEpisodes`: Egy show-nak az epizódjai
- **GET** `/videos/test`: Teszt végpont
- **GET** `/videos/getTopRatedTvSeries/:count`: Topra értékelt show-k (darab szám)
- **GET** `/videos/getTopRatedMovies/:count`: Topra értékelt filmek (darab szám)
- **GET** `/videos/getTopRatedTvSeriesAndMovies/:count`: Topra értékelt show és filmek
- **GET** `/videos/getProjectsByStudio/:studio`: Studio által lekérni projekteket
- **GET** `/videos/getProjectsByPG/:pg`: Pg által lekérni projekteket
- **POST** `/videos/postShow`: Feltenni egy show
- **POST** `/videos/postMovie`: Feltenni egy filmet
- **PUT** `/videos/putShow`: Szerkeszteni egy sorozatot
- **PUT** `/videos/putMovie`: Szerkeszteni egy filmet

### Visszajelzési útvonalak

- **POST** `/feedbacks/postFeedback`: Visszajelzés kűldése

<a id="fuggosegek"></a>
## 📦 Használt függőségek

```json
{
    "devDependencies": {
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.0.2",
    "mysql2": "^3.17.2",
    "nodemon": "^3.1.11"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3"
  }
}
```

© 2026 DNTV. Minden jog fenntartva.
