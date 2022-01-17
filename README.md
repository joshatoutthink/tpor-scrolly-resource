

[heading]Three Options for Responding to Regret
[subhead]Imagine you forgot a loved one’s birthday. Think about how this makes you feel.
[copy] When it comes to feelings, all regrets aggravate. Productive regrets aggravate, then activate. The chart below explains the process. It also demonstrates the key point: Your response determines your result.
Three possible responses:
Cards: [Option 1] [Option 2] [Option 3]
Feelings are for ignoring | You can conclude that feeling is for ignoring – and bury or minimize it. That leads to delusion.
https://giphy.com/gifs/this-is-fine-QMHoU66sBXqqLqYvGO 
Feelings are for feeling | You can conclude that feeling is for feeling – and wallow in it. That leads to despair. 
https://giphy.com/gifs/reaction-hopeless-5f98bs5zssg48
Feelings are for thinking | Or you can conclude that feeling is for thinking – and address it. What does this regret tell you?
https://giphy.com/search/lets-do-it
New Row:
What instructions does it offer for making better decisions? For improving your performance? For deepening your sense of meaning?
A regret about being a clueless, uncaring person won’t help. A regret about not keeping important dates in one’s computer calendar or not regularly expressing gratitude to relatives is useful.
When feeling is for thinking, and thinking is for doing, regret is for making us better.
Book Row









# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
