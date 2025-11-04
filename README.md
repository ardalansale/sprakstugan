# Språkstugan

> 🇸🇪 **Svensk sammanfattning:**  
> Språkstugan är en mobilvänlig webbapp som hjälper personer att hitta språkrelaterade aktiviteter i sin stad. Målet är att göra det enklare att öva svenska, skapa kontakter och hitta relevant information utan att behöva leta på flera ställen.

## Overview

Språkstugan is a mobile-first web app designed to help people learning Swedish find language-related activities in their city. The goal is to support integration and social connection by gathering relevant events in one place.

## Target Audience

The app is built for a broad and diverse audience – from newly arrived individuals to international students and anyone interested in improving their Swedish. What they share is the motivation to learn the language, and that’s the need this app aims to support.

## Current Features

- Language support: Swedish and English
- City filter: Choose between Stockholm and Uppsala
- Activity cards: Show title, description, time, location, and Google Maps link
- Custom API: Built with `json-server` to manage activity data
- Mobile-first design based on user research
- Basic error handling for failed fetches and empty results
- Navigation: Custom logo and hamburger menu

## Planned Features

- Calendar view to browse activities by date
- Address-based filtering to show nearby events
- Filter by activity type (e.g. café, meetup, course)
- Organizer links and richer activity details
- More languages (e.g. Arabic, Somali, Tigrinya)

## Technologies Used

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- json-server
- Custom i18n hook with modular JSON files

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ardalansale/sprakstugan.git

# Install dependencies
npm install

# Start local dev server
npm run dev

# Start json-server (in a separate terminal)
npx json-server --watch public/data/db.json --port 3001
```

## Link

https://sprakstugan.netlify.app