# Tarkov Weapon Builder

A React CRUD application for creating, viewing, searching, and deleting custom weapon builds inspired by Escape from Tarkov.

## Features

- **Create builds** — pick a weapon (M4A1 or Glock 19X), name your build, and select compatible attachments per slot
- **Live SVG preview** — see your weapon build update in real time as you add or remove attachments
- **Search** — filter saved builds by name instantly
- **Delete with confirmation** — modal popup confirms before removing a build
- **Attachment compatibility** — dropdowns only show attachments that fit the selected weapon and slot

## Tech Stack

- React 18+
- Vite
- JavaScript (JSX)
- CSS

## Project Structure

```
src/
├── main.jsx          # Entry point, mounts App
├── App.jsx           # Main component, holds state (builds, search query)
├── App.css           # Styles
├── data.js           # Weapon, attachment, slot, and anchor data
├── BuildForm.jsx     # Form for creating new builds
├── BuildCard.jsx     # Displays a single build with details
├── SearchBar.jsx     # Controlled search input
├── GunPreview.jsx    # SVG weapon drawing with positioned attachments
└── ConfirmModal.jsx  # Delete confirmation modal
```

## How It Works

1. `App.jsx` holds the builds array and search query in `useState`
2. `BuildForm` lets the user pick a weapon and attachments, then sends data to App via `onAdd` prop
3. App adds the build to the array with a unique ID (`Date.now()`)
4. `BuildCard` displays each build — weapon, caliber, attachments, remove button
5. `SearchBar` sends typed text to App, which filters builds using `useMemo`
6. Deleting opens `ConfirmModal` first, then removes on confirm
7. `GunPreview` draws the weapon SVG and places attachments at anchor coordinates

## React Concepts Used

- `useState` — state management for builds, search query, form fields, pending delete
- `useMemo` — caches filtered build list, only recalculates when builds or query change
- Props — data and functions passed from parent (App) to children
- Controlled inputs — React state drives input values
- Conditional rendering — `return null` hides modal when not open
- Event handling — `e.preventDefault()` on form submit, `e.stopPropagation()` on modal

## Running

```bash
npm install
npm run dev
```
