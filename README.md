# 🎬 Movies App

A modern movie discovery mobile application built with React Native and TypeScript using The Movie Database (TMDB) API.

The app allows users to discover movies, view detailed movie information, explore genres, ratings, release dates, production companies, and watch movie trailers.

App Demo
https://github.com/hsinha1110/MoviesApp/blob/48e596df0237047365e3f5b5d340b64ce1faa194/Simulator%20Screen%20Recording%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-08%20at%2015.20.24-compressed.mp4

## 📱 Features

- 🎬 Browse popular and trending movies
- 🔍 Search movies
- 📄 Movie details screen
- ⭐ Movie ratings
- 📅 Release date information
- 🎭 Movie genres
- 📝 Movie overview and tagline
- ⏱ Movie runtime
- 🎞 Movie trailers
- ▶️ YouTube trailer playback
- 🏢 Production company information
- 📱 Responsive React Native UI
- ⚡ API-based dynamic movie data
- 🔄 Loading states
- ❌ Error handling

---

## 🛠 Tech Stack

- React Native
- TypeScript
- React Navigation
- Redux Toolkit
- Axios
- TMDB API
- React Native WebView / YouTube Player
- React Native Heroicons
- React Native Blur
- Safe Area Context

---

## 🌐 API

This application uses **The Movie Database (TMDB) API** for movie data.

API provides:

- Movie listings
- Movie details
- Movie ratings
- Genres
- Production companies
- Movie videos/trailers
- Movie images

---

## 📂 Project Structure

```text
MoviesApp/
│
├── src/
│   ├── api/
│   │   └── movieService.ts
│   │
│   ├── components/
│   │
│   ├── constants/
│   │
│   ├── navigations/
│   │   ├── MainStack.tsx
│   │   ├── Routes.ts
│   │   └── types.ts
│   │
│   ├── screens/
│   │   ├── Home/
│   │   ├── MovieDetails/
│   │   └── Trailer/
│   │
│   └── ...
│
├── android/
├── ios/
├── App.tsx
├── package.json
└── README.md
