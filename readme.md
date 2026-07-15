<div align="center">

# 🍎 MacOS-UI

### A pixel-cosy macOS desktop, rebuilt on the web.

A fun little portfolio playground that recreates the look, feel and *vibe* of a Mac desktop right inside your browser. Click around — the dock works, the windows drag, the terminal answers back.

<br />

![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

---

## ✨ What's inside?

A fully interactive, draggable macOS-style desktop with:

- 🧭 **Top Navigation Bar** — Apple menu, File / Window / Terminal, live battery, Wi-Fi and a ticking clock.
- ⚓ **Dock** — the classic magnifying dock with apps like GitHub, Calendar, Mail, LinkedIn, Notes, CLI, Spotify and Resume.
- 🪟 **Draggable & Resizable Windows** — powered by `react-rnd`, complete with the iconic 🔴🟡🟢 traffic-light buttons.
- 💻 **CLI Window** — a working in-browser terminal using `react-console-emulator`.
- 📝 **Notes Window** — fetches a markdown file and renders it beautifully with `react-markdown` + syntax highlighting.
- 🎵 **Spotify Window** — a music player mock.
- 📄 **Resume Window** — embed your PDF resume right inside the desktop.
- 🐙 **GitHub Window** — project cards loaded from a local JSON, with repo & demo links.

---

## 🖼️ Sneak Peek

> Imagine the macOS Sonoma desktop… but it's your portfolio.

```
┌──────────────────────────────────────────────────────────┐
│  🍎  Sarthak Srivastava   File   Window   Terminal   🔋📶🕒 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│          ╭───────────────────────╮                       │
│          │ 🔴 🟡 🟢  My Project  │                       │
│          │───────────────────────│                       │
│          │   draggable window    │                       │
│          ╰───────────────────────╯                       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│   [🐙] [📅] [💻] [🔗] [✉️] [📝] [📄] [🎵]                │
└──────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

You'll need **Node.js 18+** and a curious mind.

```bash
# 1. Clone the repository
git clone https://github.com/sarthak-ji/MacOS-UI.git

# 2. Move into the project
cd MacOS-UI

# 3. Install dependencies
npm install

# 4. Fire it up 🚀
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start clicking.

---

## 🛠️ Build for Production

```bash
npm run build      # builds to /dist
npm run preview    # serves the production build locally
```

---

## 🧩 Tech Stack

| Layer        | Tool                                                 |
|--------------|------------------------------------------------------|
| Framework    | **React 19**                                         |
| Build tool   | **Vite 7**                                           |
| Styling      | **SCSS Modules** (one `.scss` per component)         |
| Draggable UI | **react-rnd**                                        |
| Terminal     | **react-console-emulator**                           |
| Markdown     | **react-markdown** + **react-syntax-highlighter**     |
| Linting      | **ESLint 9** (flat config)                           |

---

## 📁 Project Structure

```text
src/
├── App.jsx                 # Desktop state + window orchestration
├── main.jsx                # Entry point
├── app.scss                # Global styles
├── assets/
│   └── github.json         # Project cards data
└── components/
    ├── Nav.jsx             # Top navigation bar
    ├── Dock.jsx            # Bottom dock with app icons
    ├── DateTime.jsx        # Live clock widget
    └── windows/
        ├── MacWindow.jsx   # Reusable draggable window shell
        ├── Github.jsx      # GitHub project cards
        ├── Notes.jsx       # Markdown note viewer
        ├── Cli.jsx         # Terminal emulator
        ├── Resume.jsx      # PDF resume viewer
        └── Spotify.jsx     # Music player mock
```

---

## 🎨 Customize it

Want to make it yours? It's super easy.

| You want to…               | Edit this…                              |
|----------------------------|------------------------------------------|
| Change the user name       | `src/components/Nav.jsx`                |
| Add a dock icon            | Drop an SVG in `public/dock-icons/` and add an entry in `Dock.jsx` |
| Edit GitHub project cards  | `src/assets/github.json`                |
| Update the resume          | Replace `public/sample-resume.pdf`      |
| Update the notes           | Replace `public/note.txt`               |
| Tweak colors & spacing     | Each component has its own `.scss` file |

---

## 🤝 Contributing

PRs, ideas, and dock-icon suggestions are always welcome.

1. Fork it 🍴
2. Create your feature branch (`git checkout -b feature/snazzy-dock`)
3. Commit your changes (`git commit -m '✨ Add snazzy dock'`)
4. Push to the branch (`git push origin feature/snazzy-dock`)
5. Open a Pull Request 🎉

---

## 👤 Author

**Sarthak Srivastava**

- GitHub: [@sarthak-ji](https://github.com/sarthak-ji)
- LinkedIn: [Sarthak Srivastava](https://www.linkedin.com/in/sarthak-srivastava-5a2487278/)

---

## ⭐ Show some love

If this project made you smile, consider dropping a ⭐ — it means a lot.

<div align="center">

*Built with ❤️, ☕, and a lot of `position: absolute`.*

</div>
