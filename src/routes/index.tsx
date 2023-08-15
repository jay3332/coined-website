import './index.css'
import {onMount} from "solid-js";
import NavBar from "~/components/NavBar";

export const COINED_INVITE = (
  'https://discord.com/oauth2/authorize?client_id=753017377922482248&scope=bot+applications.commands&permissions=414531833025'
)

export default function Home() {
  let banner: HTMLDivElement | undefined = undefined

  onMount(async () => {
    const { Gradient } = await import('whatamesh')
    const gradient = new Gradient()
    gradient.initGradient('#mesh-gradient')

    banner!.addEventListener('mouseover', () => gradient.play())
    banner!.addEventListener('mouseout', () => gradient.pause())
  })

  return (
    <main class="m-auto bg-gray-900">
      <NavBar transparent={true} />
      <div id="banner" ref={banner} class="h-[max(604px,100vh)] flex flex-col relative">
        <canvas id="mesh-gradient" data-transition-in={true} />
        <div
          class="flex mobile:flex-col mobile:gap-y-6 pb-12 items-center justify-center w-full h-full relative"
        >
          <img src="/coined.png" class="w-56 h-56 mr-[3%] mobile:m-0" alt="Coined Icon" />
          <div>
            <h1 class="mx-4 font-title font-medium text-6xl mobile:text-5xl mobile:text-center">
              <b class="font-bold bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                Coined
              </b>
            </h1>
            <p class="mx-4 mt-4 text-white/60 text-xl font-light max-w-[520px] mobile:text-center">
              Economy, reimagined. Have fun with your friends by participating in a carefully crafted,
              action-packed, and competitive global economy system.
            </p>
            <div class="flex flex-row gap-x-4 mt-4 mx-4 mobile:justify-center">
              <a class="btn btn-accent" href={COINED_INVITE}>Invite Coined</a>
              <a class="btn btn-primary" href="#about-me">Learn More</a>
            </div>
          </div>
          <a href="#about-me" id="_down" />
        </div>
      </div>
    </main>
  );
}
