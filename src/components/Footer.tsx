import {A} from "solid-start";
import {COINED_INVITE} from "~/routes";

const SECTIONS = [
  {
    title: 'Links',
    links: [
      {
        name: 'Homepage',
        href: '/',
      },
      {
        name: 'Add Coined',
        href: COINED_INVITE,
      },
      {
        name: 'Community',
        href: 'https://discord.gg/BjzrQZjFwk',
      }
    ],
  },
  {
    title: 'Manage',
    links: [
      {
        name: 'Profile',
        href: '/profile',
      },
      {
        name: 'Dashboard',
        href: '/guilds',
      },
    ]
  },
  {
    title: 'Vote for Us',
    links: [
      {
        name: 'Top.gg',
        href: 'https://top.gg/bot/753017377922482248',
      },
      {
        name: 'Discord Bot List',
        href: 'https://discordbotlist.com/bots/coined',
      },
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        href: '/privacy',
      },
      {
        name: 'Terms of Service',
        href: '/terms',
      },
    ]
  }
];

function SocialIcon({ href, src, alt }: { href: string, src: string, alt: string }) {
  return (
    <a href={href}>
      <img src={src} alt={alt} class="invert opacity-70 hover:opacity-100 transition-all duration-200 w-8" width="32px" />
    </a>
  )
}

export default function Footer() {
  return (
    <footer class="flex flex-col items-center bg-gray-950 p-8 box-border">
      <div class="flex flex-wrap justify-center mb-8 gap-16 mobile:flex-col mobile:gap-8">
        {SECTIONS.map(section => (
          <div class="flex flex-col items-center">
            <h3 class="text-white/40 font-bold font-title py-4 uppercase">{section.title}</h3>
            {section.links.map(link => (
              <A class="text-white text-opacity-70 hover:text-opacity-100 transition-all block mobile:text-lg" href={link.href}>
                {link.name}
              </A>
            ))}
          </div>
        ))}
      </div>
      <div class="p-4 flex flex-col items-center md:flex-row">
        <A href="/" class="flex gap-x-2 items-center">
          <img src="/coined.png" class="w-14 h-14" alt="Coined Icon" />
          <span class="normal-case text-2xl font-title font-bold">Coined</span>
        </A>
        <div class="mx-5 my-1 border-2 self-stretch rounded opacity-20 hidden md:flex" />
        <div class="flex items-center gap-4">
          <SocialIcon href="https://discord.gg/BjzrQZjFwk" src="/icons/discord.svg" alt="Discord" />
          <SocialIcon href="https://github.com/jay3332" src="/icons/github.svg" alt="Discord" />
        </div>
      </div>
      <p class="text-white text-opacity-50 text-center">
        Copyright &copy; 2023-present jay3332
      </p>
    </footer>
  )
}