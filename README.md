## Frontend Next JS Application

This application is developed with the API server:  
<https://github.com/k1915361/ku_django>

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
<https://huggingface.co/>


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

## Installing TanStack Query

`TanStack Query` is for client fetching.

In scenarios where client fetching is needed, you can call `fetch` in `useEffect` (not recommended), or lean on popular React libraries in the community (such as SWR or React Query / TanStack Query ) for client fetching.

SWR: <https://swr.vercel.app/>.

Example SWR usage 
```js
import useSWR from 'swr'
 
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

Example TanStack Query Usage

```js
const { isPending, error, data, isFetching } = useQuery({
// ...
})
```

This section is optional but may help with handling response resources such as `isPending`, `error`, `data`, `isFetching`. 

TanStack Query: <https://nextjs.org/docs/messages/no-async-client-component>

`npm i -D @tanstack/eslint-plugin-query`
`npm i -D @tanstack/eslint-plugin-query --legacy-peer-deps`

Why Did Nextjs started using React 19 RC?

<https://www.reddit.com/r/nextjs/comments/1gtl0w0/why_did_nextjs_started_using_react_19_rc/>

> "decision by Vercel. RC, a candidate for stable release"

> "React 19 was supposed to be out already"

> "you'll need to either do as suggested and use `--legacy-peer-deps` etc with every package that needs it, or keep using next 14 for now.. try `npx create-next-app@14`"

## Routing Pages

<https://nextjs.org/docs/app/building-your-application/routing>

folder structure `/app/login/page.js` becomes page link `http://localhost:3002/login`.

File Conventions

|||
|-|-|
|layout|	Shared UI for a segment and its children|
|page|	Unique UI of a route and make routes publicly accessible|
|loading|	Loading UI for a segment and its children|
|not-found|	Not found UI for a segment and its children|
|error|	Error UI for a segment and its children|
|global-error|	Global Error UI|
|route|	Server-side API endpoint|
|template|	Specialized re-rendered Layout UI|
|default|	Fallback UI for Parallel Routes|

Go to section **Component Hierarchy** in the nextjs documentation link above for handling fallbacks of `Error`, `Suspense`/`Loading`, and `NotFound` error.

## Storing Tokens Using `document.cookie` or `local.storage`

Using `document.cookie`:

```js
export function get_expires_date_for_document_cookie(daysToExpire = 7) {    
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    return expires
}

export function set_document_cookie(token) {
    document.cookie = `access_token=${token}; ${get_expires_date_for_document_cookie()}; path=/; Secure; HttpOnly; SameSite=Strict`;
}
```

Points to consider when using cookies:
- Limited size of 4KB
- Mitigate Cross-site Request Forgery (CSRF) with  SameSite cookie attribute (`SameSite=Lax` or `SameSite=Strict`)
- Needs for Server-Side Validation and Refresh of Token.
- Always use `Secure`, `HttpOnly`, and `SameSite` cookie flags to mitigate XSS and CSRF.
- `Secure` flag:  encrypted transmission over HTTPS.
- Set reasonable `expires` time.
- Access token should expire quickly - Use refresh token to obtain a new one.
- Use refresh tokens for long sessions.

Using `localStorage`:

```js
localStorage.setItem('access_token', data.access);
const token = localStorage.getItem('access_token');
```

Points to consider when using local storage:
- Local storage or session storage can be used for temporary storage but is less secure compared to cookies for sensitive data like tokens (XSS vulnerability).

## Setting up Proxy server for cookie headers and tokens

Unfortunately this is not able to resolve the issue.

CSRF is used to encrypt user credentials and login.
Then JWToken is set in the cookie where CSRF is no longer required unless sensitive data needs to be sent which is not yet the case for this project. 

The CSRF token is seen in the browser application storage cookies but it is not accessible by JS which is correct due to `CSRF_COOKIE_HTTPONLY = True` settings, however both requests' header cookie does have the `csrftoken` but Django is still refusing the request with `forbidden` `incorrect length.` message.

Browser Network tab > csrf/ (/api/token/csrf/) > headers > Set-Cookie
`set-cookie:csrftoken=u1P...fw7;`

api/token/login/cookie/ > headers > Set-Cookie:
`cookie:csrftoken=u1P...fw7`

Django Message: `Forbidden (CSRF token from the 'X-Csrftoken' HTTP header has incorrect length.): /api/token/login/cookie/`

Resolve attempt:

`npm install cookie-parser http-proxy-middleware express https --legacy-peer-deps`

`node server.js`
or
`node server_v2.js`

## Client Side and Server Side

`'use client'` is required for client/React components. React's useState, useEffect should be used in client side only.


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

## TODO check list

### 2025  

[ ] new model saved in file system after an action.  
[ ] Integrate models and dataset action AI/dataset scripts.
[ ] Setup Ngrok to make servers available online.
[ ] Update API's data source to MinIO.

[ ] DD.MM. Todo description.

[x] 22.02. video demo and send to Team of the update at 22nd Feb.
[x] 22.02. Make general/standardized/normalized naming of functions and variables for better code reusability (to `directory`, `original`, `create_directory` from `dataset_directory`, `original_dataset`, `model_directory`, `original_model`, `get_unique_model_directory`, etc.).
[x] 22.02. Make reusable Action and Task saving (to database and file system) function for both Dataset and Model.   
[x] 22.02. Make video demo and send to Team of the update at 22nd Feb.
[x] 21.02. dataset action/task database: save the new dataset after an action.  
[x] 21.02. new dataset saved in file system after an action/task.  
[x] 18.02. model forking. 
[x] 17.02. Test all action buttons.
[x] 14.02. Enable HTTPs on both Django and Next app - set up local certificate authority (CA). Document this setup.
[x] 05.02. register page (NextJS).  
[x] 10.02. after login redirect to previous page (or to homepage). (I thought user may want to go back to previous page which may not be the homepage. redirect to previous page?)  
logged in user homepage:  
- [x] 07.02. list 10 user privately owned datasets/models on its list page.   
- [x] 03.02. list 10 user-owned datasets/models on homepage.  

[x] 03.02. or, always show side navigation buttons on the left.  
[x] 30.01. hide buttons for guest user:  Delete, Actions, Fork  
[x] 29.01. always show navigation buttons on the top (Home page, Profile View, Start a new optimization task, Previous Tasks, Personal Model Repo, Personal Dataset Repo).  
logged in user - list page of datasets/models: 
- [x] give another option to only view user-datasets and user-models.  

[x] 12.2024-01.2025. Actions page on model like seen on the dataset-actions-page.  
[x] 7.02. relate a model-dataset.   
[x] 7.02. show a success message after relating a model-dataset.   

#### 28.Jan
  guest:
  - [x] go to homepage as guest - show public models and datasets.
  - [x] as a guest, be able to download and view the public models and datasets.

  user:
  - [x] go to home page as user - show public models and datasets and their private ones.
  - [x] download, view the public models and datasets.
  - [x] see action buttons in dataset/model page.
  - [x] fork a dataset. 
  
  [x] upload a model.  
  [x] upload a dataset.  
  [x] delete dataset.  
  [x] Associate Model-Dataset.  
  [x] 29.01. fork a model.   