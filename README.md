# Teams MoM Generator

This is a custom Microsoft Teams app to generate:
- Minutes of Meeting (MoM)
- Action Items
- Meeting Summaries
- Notes

## Features
- Auth via Microsoft Graph API (MSAL)
- Fetch Teams meeting transcripts
- Google Gemini API-based prompt response generation
- Prompt template dropdown with create/edit options
- Tailwind-styled UI matching Teams native look

## Setup

1. Clone or upload this repo to GitHub.
2. Replace `YOUR_GEMINI_API_KEY_HERE` in `config.js`.
3. Run locally:
   ```bash
   npm install
   npm run dev
   ```
4. To sideload in Teams:
   - Host via GitHub Pages or any public HTTPS server
   - Add the `/manifest/manifest.json` to Teams via App Studio or Developer Portal

## Config Notes
- `config.js` is user-editable to insert Gemini API key.
- OAuth is handled per user with Graph API consent prompt.

---

Made by a Business Analyst for real-world productivity ✨
