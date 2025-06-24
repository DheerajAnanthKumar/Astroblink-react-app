# 🌌 AstroBlink - React App

**AstroBlink** is a visually immersive React application that fetches the **Astronomy Picture of the Day (APOD)** from NASA’s public API. It showcases a stunning astronomical image or video every day along with its description, metadata, and optional keywords — making it perfect for space enthusiasts, educators, or just the cosmically curious.

🚀 [Live Demo → AstroBlink](https://astroblink-react-app.vercel.app/)



![Astroblink](https://github.com/user-attachments/assets/7b0e5c55-2404-47ac-903f-035e12117e3d)


---

## 📖 About

**AstroBlink** connects to one of the most popular resources in the federal web ecosystem: NASA’s **Astronomy Picture of the Day** API. The app fetches:

* HD astronomical images or space-related videos.
* Insightful daily descriptions authored by NASA astronomers.
* Keywords or tags (if enabled via API) to aid discoverability or serve as auto-generated hashtags.

---

## ✨ Features

* 🌠 **Astronomy Picture of the Day** — Displays NASA’s featured image or video of the day.
* 📜 **Description & Metadata** — Includes title, explanation, date, media type, and copyright.
* 🔍 **Auto-generated Keywords** — Optionally shows concept tags for content discoverability.
* 📱 **Fully Responsive UI** — Clean design optimized for mobile, tablet, and desktop.
* 💡 **Built with Developer Experience in Mind** — Using React + TailwindCSS + modern tooling.

---

## 🛠️ Technologies Used

* ⚛️ **React** – UI library for building dynamic frontends.
* 💨 **Tailwind CSS** – Utility-first CSS framework for styling.
* 🛰️ **NASA APOD API** – Astronomy media and metadata provider.
* 🌐 **Vite** – Lightning-fast dev server and build tool.
* 🖼️ **Heroicons / Font Awesome** – Optional icons for styling.

---

📸 Screenshots

![Home screen](https://github.com/user-attachments/assets/9d5fb2a4-7964-462b-9ead-5e8c993d45da)

![Information screen](https://github.com/user-attachments/assets/4f54230d-e2bf-4c43-9a64-c6528f6a59d4)

---

## 📁 Folder Structure

```
src/
├── components/
│   └── Footer.jsx
│   └── Main.jsx
│   └── SideBar.jsx
├── assets/
├── App.jsx
└── main.jsx
```

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/astroblink-react-app.git
cd astroblink-react-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your NASA API key:

```env
VITE_NASA_API_KEY=your_nasa_api_key
```

4. Run the app locally:

```bash
npm run dev
```

---

## 🪐 Sample API Response (NASA APOD)

```json
{
  "date": "2024-06-22",
  "explanation": "...",
  "media_type": "image",
  "service_version": "v1",
  "title": "Milky Way Over the Bungle Bungles",
  "url": "https://apod.nasa.gov/apod/image/2406/..."
}
```

Set `concept_tags=true` in the API to fetch optional image-derived keywords.

---

## 🙏 Acknowledgements

* [NASA APOD API](https://api.nasa.gov/) – Data provider for the astronomy content.
* [Tailwind CSS](https://tailwindcss.com/) – For beautiful, responsive styling.
* [Vite](https://vitejs.dev/) – Modern frontend tooling.
* [React](https://reactjs.org/) – UI framework.

---
About the Author ✍️
This project was created by Dheeraj Ananth Kumar. You can find more of my projects on my [GitHub](https://github.com/DheerajAnanthKumar).
