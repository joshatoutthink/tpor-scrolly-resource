import "./styles/index.js"
import App from './App.svelte'

import {ScrollTrigger} from "gsap/ScrollTrigger"
import {gsap} from "gsap"

gsap.registerPlugin(ScrollTrigger)


const app = new App({
  target: document.getElementById('app')
})

export default app
