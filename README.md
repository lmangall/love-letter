TO DO:

- responsive
- escape the settings with esc and click out
- max number of words to translate
- Favicon
- emoji
- explanation on the right
- modal with diamond emojis

To modify your useTranslateText hook to include the original text in bold followed by a colon and then the translation, you need to adjust how you're handling and storing translations. Since you want to keep a visual distinction between the original text and its translation, you'll likely need to store translations as objects or HTML strings that can retain formatting information.

Here's an approach using HTML strings to store each translation, allowing you to use <strong> tags for bolding the original text. Note, however, that injecting HTML directly into the DOM can be risky if the content includes user input, due to potential cross-site scripting (XSS) vulnerabilities. Always ensure that any dynamic content is properly sanitized.

To ensure that the text copied to the clipboard or sent by email is plain text and not HTML, you need to modify the handling of your translations. Since your translations might be stored or processed as HTML strings for rendering purposes (especially if you're using dangerouslySetInnerHTML to insert translations with formatting), you'll want to strip any HTML tags when copying to the clipboard or preparing the email body.

Step 1: Convert HTML to Plain Text for Clipboard
For the handleCopyNotes function, ensure you're joining and copying the plain text versions of your translations. If your translations are stored as plain text, this is straightforward. If they're stored as HTML, you'll need a utility function to strip HTML tags:

---

https://developers.deepl.com/docs/api-reference/translate#translate
https://github.com/DeepLcom/deepl-node/blob/main/examples/typescript/index.ts
https://github.com/DeepLcom/deepl-node?tab=readme-ov-file#usage

---

TO DO:

- change the output form => blurred space that adapt to text length
- add an intro, more explanation
- implement Deepl
- implement ElevenLabs
- add "about", when pressed the components disappear and it show a new component on same background

https://tailwindcss.com/docs/backdrop-blur
https://hypercolor.dev/generator
https://blog.logrocket.com/guide-adding-gradients-tailwind-css/
https://flowbite.com/docs/customize/colors/
https://davidpiesse.github.io/tailwind-md-colours/
https://play.tailwindcss.com/

https://floating-ui.com/docs/useFloating

```bash

tree -I 'node_modules' -L 2
.
├── README.md
├── app
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── background.jpg
├── components
│ ├── Button.tsx
│ └── InputField.tsx
├── favicon.ico
├── hooks
│ └── useFetchLoveStory.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│ └── api
├── postcss.config.js
├── public
│ ├── Hypercolor Gradient.jpeg
│ ├── background.jpg
│ ├── background_2.png
│ ├── background_3.png
│ ├── background_4.png
│ └── logo.png
├── stickers literks-05.png
├── tailwind.config.ts
└── tsconfig.json
```
