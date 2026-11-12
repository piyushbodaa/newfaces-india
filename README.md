# NewFaces India

Platform for **budding** Indian models, creators, influencers & actresses — early-career only (0–3 yrs). Curated for agencies & brands to discover & book fresh talent.

## Features
- **1000 profiles** directory (sample launch data, 100% budding)
- Search + filters: category, city, language, experience, followers, rate
- Profile cards, detail modal with contact
- Shortlist / casting list (localStorage)
- Join flow: models submit free profile
- Agency flow: post casting brief

## How to run
```bash
npm start
# open http://localhost:3000
```

## Data note
Launch build uses 1000 synthetic early-career profiles for demo. Real submissions via Join form are stored locally (localStorage `nfi_user_profiles_v1`) and appear instantly in Explore. Replace with backend DB + verification as next step.

## Tech
Vanilla HTML/CSS/JS + tiny Node static server. No build step, no deps.
