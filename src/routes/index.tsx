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
              Economy, reimagined. Have fun with your friends and boost your server's engagement by participating in a
              carefully crafted, action-packed, and competitive global economy system.
            </p>
            <div class="flex flex-row gap-x-3 mt-4 mx-4 mobile:justify-center">
              <a class="btn btn-accent" href={COINED_INVITE}>Add Coined</a>
              <a class="btn btn-primary" href="https://discord.gg/BjzrQZjFwk">Join our Community</a>
            </div>
            <p class="text-lg mx-4 my-2">
              Still not convinced?&nbsp;
              <a class="font-medium underline underline-offset-2 hover:text-base-content transition" href="#wip">
                Learn More
              </a>
            </p>
          </div>
          <a href="#wip" id="_down" />
        </div>
      </div>

      <div class="m-auto w-[min(1400px,90vw)]">
        <div class="flex items-center justify-between p-8 m-8 mobile:flex-col">
          <img src="/coined.png" class="w-56 h-56" alt="Coined Icon" />
          <div>
            <h2 id="wip" class="font-title font-bold text-4xl">Work in Progress</h2>
            <p class="py-2">This section is a work in progress. But it'll look FIRE when it's done.</p>
          </div>
        </div>
      </div>

      <div class="pt-24 pb-16">
        <h2 class="font-title font-bold text-4xl text-center">Let's get started.</h2>
        <div class="flex justify-center m-6">
          <div class="flex relative group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-md opacity-50 blur
                transition-all duration-200 group-hover:blur-lg group-hover:opacity-70 will-change-[filter]"
            />
            <a
              class="relative px-6 py-4 rounded-md text-lg font-bold transition-all cursor-pointer bg-gradient-to-r w-full h-full from-yellow-700 to-yellow-900"
              href={COINED_INVITE}
            >
              Add Coined to your Server
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
