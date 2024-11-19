## Setting up NPX

<https://nodejs.org/en/download/package-manager>

```sh
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`

# verifies the right npm version is in the environment
npm -v # should print `10.9.0`

npx -v # `10.9.0`
```

## Understanding why using NextJS instead of ReactJS

1. Reduce development reloading and waiting time.
2. Prerendering on server-side for slow and old low-end client devices.
3. Minimise additional installation or setups in the long run - start lean and scale with your needs.
4. Minimise amount of code for single client-server roundtrip.
5. Interactive pages before Javascript loading and running.
6. Fast SEO and marketing hosted anywhere via the optional use of fully static HTML files, that still work with Javascript disabled.
7. Starting with structure to code and best development practices.
8. Avoid custom setup and unsupported dependency versions and creating its own framework.
9. Start with page routing support.
10. Using Common tools for common web development features and problems.  

"You can definitely use React without a framework—that’s how you’d use React for a part of your page. However, if you’re building a new app or a site fully with React, we recommend using a framework.

Here’s why.

Even if you don’t need routing or data fetching at first, you’ll likely want to add some libraries for them. As your JavaScript bundle grows with every new feature, you might have to figure out how to split code for every route individually. As your data fetching needs get more complex, you are likely to encounter server-client network waterfalls that make your app feel very slow. As your audience includes more users with poor network conditions and low-end devices, you might need to generate HTML from your components to display content early—either on the server, or during the build time. Changing your setup to run some of your code on the server or during the build can be very tricky.

These problems are not React-specific. This is why Svelte has SvelteKit, Vue has Nuxt, and so on. To solve these problems on your own, you’ll need to integrate your bundler with your router and with your data fetching library. It’s not hard to get an initial setup working, but there are a lot of subtleties involved in making an app that loads quickly even as it grows over time. You’ll want to send down the minimal amount of app code but do so in a single client–server roundtrip, in parallel with any data required for the page. You’ll likely want the page to be interactive before your JavaScript code even runs, to support progressive enhancement. You may want to generate a folder of fully static HTML files for your marketing pages that can be hosted anywhere and still work with JavaScript disabled. Building these capabilities yourself takes real work.

React frameworks on this page solve problems like these by default, with no extra work from your side. They let you start very lean and then scale your app with your needs. Each React framework has a community, so finding answers to questions and upgrading tooling is easier. Frameworks also give structure to your code, helping you and others retain context and skills between different projects. Conversely, with a custom setup it’s easier to get stuck on unsupported dependency versions, and you’ll essentially end up creating your own framework—albeit one with no community or upgrade path (and if it’s anything like the ones we’ve made in the past, more haphazardly designed).

If your app has unusual constraints not served well by these frameworks, or you prefer to solve these problems yourself, you can roll your own custom setup with React. Grab react and react-dom from npm, set up your custom build process with a bundler like Vite or Parcel, and add other tools as you need them for routing, static generation or server-side rendering, and more."

## Creating a NextJS project

<https://nextjs.org/docs/app/getting-started/installation>

```
npx create-next-app@latest

✔ What is your project named? … ku-frontend-nextjs
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for next dev? … No / Yes
✔ Would you like to customize the import alias (@/* by default)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /home/user/Documents/ku-frontend-nextjs.
```

## Starting development project 

`npm run dev -- -p 3002`

## Using stylesheets from examplary websites 

<https://chatgpt.com/>

Follow the website link above, inspect, look at `html > head > link`, and stylesheets.

```html
<link rel="stylesheet" href="https://cdn.oaistatic.com/assets/root-jo2ifv11.css">
<link rel="stylesheet" href="https://cdn.oaistatic.com/assets/conversation-small-o3h1ik6j.css">
```

<https://cdn.oaistatic.com/assets/root-jo2ifv11.css>
<https://cdn.oaistatic.com/assets/conversation-small-o3h1ik6j.css>

Bootstrap-like stylesheets and classnames are seen.

`html > body > div`
```html
<div class="relative flex h-full w-full overflow-hidden transition-colors z-0"></div>
``` 

## NextJS getting started

Below this line is generated by NextJS.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
