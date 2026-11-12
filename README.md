# My Portfolio Website

A portfolio website built with Next.js. Your content lives in one file: `portfolio.config.json`.

## Edit your content

1. Open `portfolio.config.json` on GitHub (click the file, then the pencil icon).
2. Change the text, numbers, and links.
3. Click **Commit changes**. Vercel publishes the update automatically within a minute.

Keep the quote marks around text and the commas at the end of lines.

## Images

- **Photo:** replace `public/profile.jpg` (or `.png`) and keep the same name, or use a web link in `profile.photo`.
- **Project and certificate images:** put a web link in `image`, or leave the placeholder in place.

## Optional: backend features (contact storage, comments, testimonials, blog admin)

These features need two free accounts and a few settings. Skip them if you only need the portfolio.

1. **Turn them on:** in `portfolio.config.json`, set `"backend": true` inside `"modules"`.
2. **Create a free Upstash Redis database** at https://upstash.com and copy its REST URL and token.
3. **Add these settings in Vercel** under Project → Settings → Environment Variables:
   - `UPSTASH_REDIS_REST_URL` (from Upstash)
   - `UPSTASH_REDIS_REST_TOKEN` (from Upstash)
   - `ADMIN_PASSWORD` (a long password you choose; you use it to log in at `/admin`)
   - `ADMIN_SECRET` (a long random text, for example from https://www.random.org)
4. Commit the change, and redeploy from Vercel.

Optional: add `RESEND_API_KEY` and `NOTIFY_EMAIL` to get an email each time someone sends a message.

## Mentoring bookings (Topmate)

Create a free account at https://topmate.io, set up a session, and paste your profile link into `profile.topmate`. The "Book a Session" button uses that link.
