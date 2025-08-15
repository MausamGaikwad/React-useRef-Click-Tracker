# 🔁 useRef Click Tracker

A lightweight React app demonstrating how to use the useRef hook to persist data across renders without triggering re-renders. This app counts button clicks in real-time while keeping the UI updates efficient.

---

## 📌 Features

- Real-Time Click Tracking — Tracks how many times a button is clicked.
- Persistent Values — Click count is stored using useRef, so it’s not reset on re-renders.
- Efficient Performance — Avoids unnecessary re-rendering with useRef.
- Manual Re-render Trigger — Uses a dummy useState to refresh the UI and display updated counts.

---

## 🛠️ Tech Stack

- React (Hooks: useRef, useState)
- JavaScript (ES6)
- CSS Inline Styling

---

## 📂 Project Structure

```
src/
├── App.js # Root component
├── ClickTracker.js # Main click tracking logic
└── index.js # React entry point
```

---

## 🚀 Getting Started

1️⃣ Clone the repository
```
git clone https://github.com/MausamGaikwad/React-useRef-Click-Tracker.git
cd useref-click-tracker
```
2️⃣ Install dependencies
```
npm install
```

3️⃣ Run the application
```
npm start
```

---
## 📖 How It Works

1 State vs. Ref
_ useRef stores the click count without causing a re-render.
_ useState (fakeState) is only used to trigger manual UI updates when needed.

2 Click Handling

```
function handleClick() {
currentRef.current++;
setFakeState(prev => prev + 1);
}
```
   * Increments the click count stored in the useRef.
   * Updates the dummy state to refresh the displayed count.

3 UI Display \* Button and count display are centrally aligned for a minimal design.

---

## 📜 License

This project is licensed under the MIT License.
