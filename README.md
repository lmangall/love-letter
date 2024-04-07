# Project Description

[demo link](https://loveletter-seven.vercel.app/)

A web app designed to help you learn a language, initially thought for French, hence the love-theme 🥖 The app is inclusive of all gender identities and sexual orientations 🏳️‍🌈 and is not afraid to produce HOT content...

    					🥖 + 🍑 = 💌

=> You fill the fields and get a custom over-the-top love letter addressed to you, with OpenAI's temperature cranked up to the max.
As you read the letter, you can highlight any word or passage that you don't fully understand. The app translates them through Deepl's API, so you can understand the French behind the love declarations.

The app also use the TTS functionality of OpenAI's API, so you can have the text read by an AI generated voice

Once you've unraveled the mysteries of your love letter, you can:

- **Email the translations to yourself:** Save your newfound vocabulary for future reference and review.
- **Copy the translations:** Easily paste them into flashcards or your preferred learning platform.

This app is a labor of love, combining my passion for French language teaching and programming. It is the first installment in a series of web applications designed to enhance language learning, part of a marketing campaign to promote my colleague (instagrammer and a French teacher) new online course.

## Tech Stack

- **Node.js:** The JavaScript runtime environment that powers the server-side of the application.
- **Next.js:** A popular React framework providing server-side rendering (SSR), static site generation (SSG), and data fetching functionalities for a performant and SEO-friendly experience.
- **JavaScript:** The core programming language powering the application's logic and interactivity.
- **React:** A powerful JavaScript library for building user interfaces, offering a component-based approach for reusable and maintainable code.
- **Tailwind CSS:** A utility-first CSS framework, streamlining UI development with its extensive collection of pre-built styles and classes.
  => deployed on Vercel

**A Week of Exploration, a Week of Refinement**
This project serves as a testament to the power of rapid learning. The initial version was built within a week and a second week was dedicated to refining the application. This experience served as my introduction to this tech stack (before I only worked with C, learning the 42Berlin curriculum)

**To Do List**

- **[ ]** Enhanced responsiveness
- **[ ]** Favicon
- **[ ]** "About" modal
- **[ ]** Pause button for audio playback

**Understanding Key Concepts**

- **useEffect Hook:** A React hook that allows you to perform side effects in functional components.

  - This means you can fetch data, subscribe to events, or perform other operations that wouldn't be directly driven by rendering.

- **Single Responsibility Principle:** A software design principle advocating that each module or component should have a single responsibility and a well-defined boundary.

**Some Resources**

- DeepL API Reference: [https://www.deepl.com/en/docs-api](https://www.deepl.com/en/docs-api)
- DeepL Node.js Library: [https://github.com/DeepLcom](https://github.com/DeepLcom)
- Tailwind CSS Documentation: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

---

Code for a button:

        <Link
          href="/demo"
          className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
          style={{
            boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
          }}
        >
          <span className="mr-2"> Button </span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 6.75L19.25 12L13.75 17.25"
              stroke="#1E2B3A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* <path
              d="M19 12H4.75"
              stroke="#1E2B3A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            /> */}
          </svg>
        </Link>

---

## H. FAQ

<details>
  <summary>Dropdown 1</summary>
  <br/>
content
</details>
<br/>
<details>
  <summary>Dropdown 2</summary>
  <br/>  
  Content
</details>

```bash
tree -I 'node_modules' -L 2
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── former_favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── InputField.tsx
│   ├── LoveLetterBackground.jsx
│   ├── SelectField.tsx
│   └── SettingsModal.jsx
├── hooks
│   ├── useFetchLoveStory.ts
│   └── useTranslateText.ts
├── love_letter_logo.ai
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│   └── api
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── Hypercolor Gradient.jpeg
│   ├── background.jpg
│   ├── background_2.png
│   ├── background_3.png
│   ├── background_4.png
│   ├── favicon.png
│   ├── fonts
│   ├── logo.png
│   ├── logo_clear.png
│   └── love_letter_logo.png
├── speech.mp3
├── tailwind.config.ts
├── tsconfig.json
└── utils
    └── stripHtml.ts

9 directories, 32 files
```
