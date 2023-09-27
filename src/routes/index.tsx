import './index.css'
import {createSignal, onMount, ParentProps} from "solid-js";
import NavBar from "~/components/NavBar";
import classNames from "classnames";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export const COINED_INVITE = (
  'https://discord.com/oauth2/authorize?client_id=753017377922482248&scope=bot+applications.commands&permissions=414531833025'
)

function Feature({ id, title, children, icon, reverse = false }: ParentProps<{ id: string, title: string, icon: string, reverse?: boolean }>) {
  return (
    <div class="m-auto w-[min(1400px,90vw)]" data-aos={reverse ? "fade-left" : "fade-right"}>
      <div id={id} class={classNames(
        "flex items-center justify-between p-8 mobile:p-4 m-4 gap-x-4 mobile:mx-0 mobile:flex-col",
        {"flex-row-reverse": reverse},
      )}>
        <img src={icon} class="w-56 h-56" alt="Feature Preview" />
        <div class="mobile:text-center">
          <h3 class="font-title font-bold text-4xl">{title}</h3>
          <p class="py-2">{children}</p>
        </div>
      </div>
    </div>
  )
}

export interface GlobalStats {
  guilds: number,
  users: number,
  coins: number,
}

export default function Home() {
  let banner: HTMLDivElement | undefined = undefined
  let [globalStats, setGlobalStats] = createSignal<GlobalStats | null>(null)

  onMount(async () => {
    const { Gradient } = await import('whatamesh')
    const gradient = new Gradient()
    gradient.initGradient('#mesh-gradient')

    banner!.addEventListener('mouseover', () => gradient.play())
    banner!.addEventListener('mouseout', () => gradient.pause())

    AOS.init({
      duration: 1000,
    })

    fetch('https://coined-api.jay3332.tech/global').then(r => r.json()).then(data => setGlobalStats(data))
  })

  return (
    <main class="m-auto bg-gray-900">
      <NavBar transparent={true} />
      <div id="banner" ref={banner} class="h-[max(600px,100vh)] mobile:h-[max(900px,100vh)] flex flex-col relative">
        <canvas id="mesh-gradient" data-transition-in={true} />
        <div
          class="flex mobile:flex-col mobile:gap-y-6 mobile:mt-16 pb-12 items-center sm:justify-center w-full h-full relative"
          data-aos="zoom-in"
        >
          <img src="/coined.png" class="w-56 h-56 mr-[3%] mobile:m-0" alt="Coined Icon" />
          <div>
            <h1 class="mx-4 font-title font-medium text-5xl lg:text-6xl xl:text-7xl mobile:text-center">
              <b class="font-bold bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                Economy, reimagined.
              </b>
            </h1>
            <p class="mx-4 mt-4 text-white/60 text-xl font-light max-w-[730px] mobile:text-center">
              Have fun with your friends and boost your server's engagement with&nbsp;
              <span class="font-medium bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">Coined</span>,
              a <b>carefully crafted</b>, <b>action-packed</b>, and <b>competitive</b> global economy system.
            </p>
            <div class="flex flex-row gap-x-3 mt-4 mx-4 mobile:justify-center">
              <a class="btn btn-accent font-title btn-lg mobile:btn-md" href={COINED_INVITE}>Add Coined</a>
              <a class="btn btn-primary font-title btn-lg mobile:btn-md" href="https://discord.gg/BjzrQZjFwk">Join our Community</a>
            </div>
            <p class="font-title text-base-content/40 text-lg mx-4 my-4 mobile:text-center">
              Still not convinced?&nbsp;
              <a class="font-medium underline underline-offset-2 hover:text-base-content transition" href="#part2">
                Learn More
              </a>
            </p>
          </div>
          <a href="#part2" id="_down" />
        </div>
      </div>

      <div
        id="part2"
        class="flex flex-col items-center justify-center mt-16 p-8 bg-accent-400/5 border-2 border-accent-700/30
          rounded-lg max-w-[min(1200px,90vw)] m-auto"
        data-aos="fade-up"
      >
        <h2 class="font-title text-4xl mobile:text-3xl text-center mb-8">
          Join a <span class="text-accent">global economy system</span>
        </h2>
        <div class="flex flex-col xl:flex-row w-full gap-y-4">
          <div class="flex-grow">
            <h3 class="font-title text-5xl text-center mobile:text-4xl">
              <span class="bg-gradient-to-br from-accent-200 to-base-content text-transparent bg-clip-text font-black">
                {globalStats()?.coins.toLocaleString() ?? 'Lots of'}
              </span>
              <span class="font-medium text-base-content/60">&nbsp;total coins</span>
            </h3>
            <div class="text-base-content/50 text-center text-lg">and counting</div>
          </div>
          <div class="flex-grow">
            <h3 class="font-title text-5xl text-center mobile:text-4xl">
              <span class="font-medium text-base-content/60">used by&nbsp;</span>
              <span class="bg-gradient-to-br from-secondary-200 to-base-content text-transparent bg-clip-text font-black">
                {globalStats()?.users.toLocaleString() ?? 'Lots of'}
              </span>
            </h3>
            <div class="text-base-content/50 text-center text-lg">active users</div>
          </div>
        </div>
      </div>

      <h2 class="text-center font-title font-black text-5xl pt-16 pb-2">Features</h2>
      <Feature id="wip" title="Work in Progress" icon="/coined.png">
        This section is a work in progress. But it'll look FIRE when it's done.
      </Feature>
      <Feature id="wip" title="Work in Progress" icon="/coined.png" reverse>
        This section is a work in progress. But it'll look FIRE when it's done.
      </Feature>

      <div class="flex flex-col items-center pt-24 pb-16">
        <h2 class="font-title font-bold text-4xl text-center">Let's get started.</h2>
        <div class="mt-8 relative group">
          <div
            class="px-8 py-4 absolute btn btn-lg text-xl font-bold rounded-lg blur group-hover:blur-lg will-change-[filter] bg-gradient-to-r from-accent-600 to-accent-400 inset-0"
          >
            Add Coined to your Server
          </div>
          <a
            class="p-0.5 relative btn btn-lg border-none inline-flex items-center justify-center font-bold overflow-hidden rounded-lg"
            href={COINED_INVITE}
          >
            <span class="w-full h-full bg-gradient-to-br from-accent-600 to-accent-300 absolute" />
            <span class="relative flex items-center justify-center w-full h-full px-8 py-4 transition-all ease-out
              bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400"
            >
              <span
                class="relative bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent group-hover:text-accent-900 text-xl mobile-xs:text-lg"
              >
                Add Coined to your Server
              </span>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
