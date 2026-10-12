/* =====================================================================
   SITE CONFIG — the ONLY file you need to edit for content.
   Change text, date, venue, photos, colors and motion here.
   Anything left as "" shows a clearly labelled "to be announced"
   placeholder on the page — nothing is invented for you.
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---------- WHO ---------- */
  host: {
    name: "Jang Max",         // e.g. "Anna" — shown as "Hosted by Anna"; leave "" to hide
    monogram: "JM",           // small mark in the top-left of the navigation
  },

  /* ---------- THE EVENT ---------- */
  event: {
    title: ["Birthday", "Night"],          // two lines of the giant headline
    tagline: "Let's play",                 // handwritten line under the title
    subtitle: "Pool · Drinks · Good company",
    dateISO: "2026-10-16",   // Friday, 16 October 2026 (YYYY-MM-DD). Powers the date + calendar button.
    startTime: "20:00",     // 8 PM
    endTime: "9:00",              // optional. Empty = calendar event lasts 4 hours. Example: "23:30"
    venueName: "The Red Felt & Vinyl Club", // e.g. "The Cue Club"
    address: "",              // full street address
    dressCode: "",            // optional, e.g. "Dark colours. Red if you dare."
    notes: "",                // optional, e.g. "Bring good energy. Cake at 22:00."
    mapsUrl: "https://map.naver.com/p/search/%ED%95%A9%EC%A0%95%EC%97%AD?c=16.97,0,0,0,dh", // Naver Map link (Hapjeong Station)
    locale: "en-GB",          // date language/format: "en-US", "ko-KR", "ru-RU" ...
  },

  /* ---------- COUNTDOWN + VIP PASS (the ticket at the end) ---------- */
  ticket: {
    heading: ["Doors", "open in"],   // giant headline above the countdown
    badge: "VIP admission",
    title: "Jang Max's 20st",
    sub: "Pool 8 • Drinks • Games",
    pass: "Pass #2026-VIP",     // decorative label under the code
    countdownLabels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    liveText: "It's happening now.",
  },

  /* ---------- COPY ---------- */
  copy: {
    heroInvite: "You are invited",
    introLabel: "01 — The mood",
    intro: "Low lights. Red felt. One more year and the same old table — only the stakes are higher. Come break the rack with me.",
    roomLabel: "02 — The room",
    roomHeading: ["Dim lights.", "Red felt."],
    roomCaption: "One table, a few good lamps and everyone you like in the same room.",
    galleryLabel: "03 — The details",
    galleryHeading: "Look closer",
    typeLines: ["Pool", "Drinks", "Good company"],   // giant scrolling words
    inviteLabel: "04 — The invitation",
    inviteHeading: ["You're", "invited"],
    inviteLead: "Save the night. Everything you need is below.",
    breakLabel: "04 — Warm-up",
    breakHeading: "Break the rack",
    breakHint: "Tap the table to shoot the white ball.",
    breakButton: "Try again",
    detailsLabel: "05 — Find us",
    detailsHeading: "Where & when",
    rsvpLabel: "06 — To Bottom",
    rsvpHeading: "Are you in?",
    rsvpLead: "Let me know so I can plan the rack.",
    finaleLine: "Let's play",
    finaleSub: "See you at the table.",
  },

  /* ---------- LABELS FOR THE DETAILS (change language here) ---------- */
  labels: {
    date: "Date", time: "Time", venue: "Venue", address: "Address",
    dressCode: "Dress code", notes: "Notes",
    tbd: "서울 마포구 서교동 399-27 3층",
    openMaps: "Open in Naver Map",
    register: "Get your ticket",
    addCalendar: "Add to calendar",
    backToDetails: "Back to the details",
  },

  /* ---------- PRACTICAL INFO (list — add / remove / reorder lines) ---------- */
  practical: [
    { label: "Arrival",  text: "Add arrival / doors-open info here" },
    { label: "Getting there", text: "Add transport or parking info here" },
    { label: "Contact", text: "Add a phone number or handle guests can reach" },
  ],

  /* ---------- RSVP ----------
     MODE 1 (works right now, nothing saved): leave endpoint and email empty.
             The form animates and confirms, and clearly says it is preview mode.
     MODE 2 (opens the guest's mail app, pre-filled): set  email.
     MODE 3 (really saved): set  endpoint  to a Google Form "formResponse" URL
             or a Formspree / Basin / Getform URL. See README.        */
  rsvp: {
    formUrl: "https://forms.gle/Zx8kpmZYu1GF1kp38", // Google Form: guests register here to get their ticket. Empty = use the built-in form below.
    formLead: "Register in the form to get your ticket. It takes a minute.",
    email: "",
    endpoint: "",
    fieldNames: { answer: "answer", name: "name", message: "message" }, // for Google Forms use "entry.123456" ids
    noCors: true,             // true for Google Forms (response can't be read, but it is saved)
    labels: {
      yes: "I'm in", no: "Can't make it",
      name: "Your name (optional)", message: "A message (optional)",
      send: "Send RSVP",
      chooseFirst: "Pick “I'm in” or “Can't make it” first.",
      yesTitle: "You're on the list.", yesText: "Can't wait to see you at the table.",
      noTitle: "Next time, then.", noText: "Thanks for letting me know.",
      previewNote: "Preview mode — this answer was not saved or sent. Connect a form in siteConfig.js.",
      error: "Something went wrong sending that. Please try again.",
      change: "Change my answer",
    },
  },

  /* ---------- LINKS (leave url "" to hide) ---------- */
  social: [
    { label: "Instagram", url: "" },
    { label: "Telegram",  url: "" },
  ],

  /* ---------- SCROLLING TICKER ---------- */
  ticker: ["Birthday Night", "Let's play", "Pool", "Drinks", "Good company"],

  /* ---------- PHOTOS (files live in the images/ folder) ----------
     Replace a file with the same name, or point to a new one.        */
  images: {
    hero:    { src: "images/hero-panel.jpg",       alt: "A pool table with red felt under warm hanging lamps in a dark room" },
    room:    { src: "images/room-wide.jpg",        alt: "Pool table seen from the side, balls racked on red felt" },
    introA:  { src: "images/lamps.jpg",            alt: "Three warm pendant lamps over the table" },
    introB:  { src: "images/cocktails.jpg",         alt: "Hands holding cocktails with olives and ice in a dark bar" },
    stripA:  { src: "images/cocktails.jpg",         alt: "Hands holding cocktails with olives and ice" },
    stripB:  { src: "images/crowd.jpg",             alt: "Guests dancing at a crowded bar party" },
    stripC:  { src: "images/casino.jpg",            alt: "Playing cards, casino chips and a roulette wheel" },
    poster:  { src: "images/poster-with-text.jpg", alt: "Invitation poster: Birthday Night, Let's play" },
    finale:  { src: "images/room-wide.jpg",        alt: "The pool table, waiting" },
  },
  gallery: [   // order here = order on the page. size: "wide" | "tall" | "square"
    { src: "images/lamps.jpg",            alt: "Pendant lamps",            caption: "Light",  size: "wide" },
    { src: "images/poster-with-text.jpg", alt: "The invitation poster",    caption: "The invite", size: "tall" },
    { src: "images/crowd.jpg",            alt: "Guests dancing at a bar party", caption: "The crowd", size: "wide" },
    { src: "images/wall.jpg",             alt: "Wall posters and shelves", caption: "The wall", size: "wide" },
    { src: "images/cocktails.jpg",        alt: "Hands holding cocktails",  caption: "Drinks", size: "tall" },
    { src: "images/corner.jpg",           alt: "Wood and brass table corner", caption: "Brass", size: "square" },
    { src: "images/casino.jpg",           alt: "Cards, chips and roulette", caption: "Games", size: "wide" },
    { src: "images/pool-brick.jpg",       alt: "Pool table against a brick wall", caption: "The table", size: "wide" },
    { src: "images/balls.jpg",            alt: "Racked balls",             caption: "The rack", size: "wide" },
  ],

  /* ---------- COLOURS ---------- */
  theme: {
    ink:   "#0b0908",   // near-black background
    cream: "#eadfcb",   // main text on dark
    felt:  "#a8121b",   // red (felt)
    hot:   "#d6131d",   // loud red of the countdown + pass page
    amber: "#d9a45b",   // lamp-light accents
    paper: "#e9e3d6",   // light invitation section
  },

  /* ---------- MOTION ---------- */
  motion: {
    enabled: true,      // false = no scroll animation at all
    intensity: 1,       // 0.5 calmer … 1.5 more dramatic
    // Extra effects — switch any of them off individually:
    effects: {
      spotlight: true,       // warm lamp-light follows the pointer over hero + finale photos (desktop)
      ballProgress: true,    // an 8-ball rolls along the bottom edge as you scroll
      rackBreak: true,       // playable pool-break animation
      scramble: true,        // date / venue "decode" into place
      tickerVelocity: true,  // ticker speeds up (and reverses) with your scroll
      cardTilt: true,        // gallery cards tilt in 3D under the pointer (desktop)
      heroParallax: true,    // hero photo and title drift against the pointer (desktop)
      confetti: true,        // short paper burst when someone answers "I'm in"
    },
  },

  /* ---------- OPTIONAL SECTIONS (true / false) ---------- */
  sections: { intro: true, room: true, gallery: true, rackBreak: true, typeBand: true, ticket: true, invitation: true, details: true, rsvp: true, finale: true },
};
