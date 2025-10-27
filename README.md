# Språkstugan

> 🇸🇪 **Svensk sammanfattning:**  
> Språkstugan är en webbapp som hjälper nyanlända och språkinlärare att hitta språkrelaterade aktiviteter i sin stad. Fokus ligger på enkelhet, tillgänglighet och tydlig information.

## Overview

Språkstugan is a simple web app that helps people learning Swedish find language-related activities in their city. The goal is to make it easy to discover events like language cafés, meetups, and conversation groups — all in one place.

##  Features

- Language support: Swedish and English
- City filter: Choose between Stockholm and Uppsala
- Activity cards: Show title, description, time, location, and link to Google Maps
- Custom API: Built with `json-server` to manage activity data
- Responsive design and accessibility-focused layout
- Error handling for failed fetches and empty results

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- json-server (for local API)
- Custom i18n hook with JSON-based translations

## Future Plans

- Add calendar view and address-based filtering
- Filter by activity type (e.g. café, meetup, course)
- Connect activity cards to organizer pages
- Add more languages (e.g. Arabic, Somali, Tigrinya)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/sprakstugan.git

# Install dependencies
npm install

# Start local dev server
npm run dev

# Start json-server (in a separate terminal)
npx json-server --watch public/data/db.json --port 3001
