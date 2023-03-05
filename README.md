
# Quiz App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

## ChatGPT generated logic

Most of this app's logic was generated using ChatGPT via a [plugin](https://marketplace.visualstudio.com/items?itemName=gencay.vscode-chatgpt) for Visual Studio Code.

The following steps were taken to create the app: 
- a JSON schema was generated to define the structure of the questions
- a utility function for reading a JSON file was generated
- Next.js components were generated to display the questions and provide answer choices
  
Sometimes the generated code required further discussion with ChatGPT to get it to work as intended, but very little "hand coding" was necessary. 

Finally, Tailwind configuration was generated along with basic styling, to improve the appearance of the app.

To gerate the code I currently try to keep my prompts as specific as possible and avoid asking too much at once.
For example the following seems to produce fairly good results
```
Given the JSON schema at https://github.com/vcorr/quiz-app/blob/main/app/schema.json 
create a Next.js component that will display the question from a JSON file that follows that schema
```
You can also try to ask ChatGPT to improve the initial answer with prompts like
```
Improve the Quiz component above so that it also displays the answer choices from the JSON file
```
Remember that ChatGPT is not up-to-date with latest Next.js version, so you need to adjust the generated code if you want to use the latest features.

## Deployed at Vercel

The app is [running at Vercel](https://quiz-app-blush-six.vercel.app/)

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

