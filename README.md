# LoveLetter

[Live demo](https://langgenie.xyz/loveletter)

***Edit: This was my very first React app, even though I am proud of the ideas and the result I am a bit embarassed by the quality of the code itself and the organisation of the work (commits, architecture, test suite...).*** 

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
  
## H. Other

<details>
  <summary>A Week of Exploration, a Week of Refinement
</summary>
  <br/>
This project serves as a testament to the power of rapid learning. The initial version was built within a week and a second week was dedicated to refining the application. This experience served as my introduction to this tech stack (before I only worked with C, learning the 42Berlin curriculum)
</details>
<br/>
<details>
  <summary>Files</summary>
  <br/>  
  
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
</details>

