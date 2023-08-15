import {A} from "solid-start";

const SECTIONS = [
  {
    title: 'About',
    links: [
      {
        name: 'Homepage',
        href: '/',
      },
      {
        name: 'Status',
        href: 'https://status.adapt.chat',
      },
    ],
  },
  {
    title: 'App',
    links: [
      {
        name: 'Download',
        href: '/download',
      },
      {
        name: 'Web App',
        href: 'https://app.adapt.chat',
      },
    ]
  },
  {
    title: 'Developers',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/AdaptChat',
      },
      {
        name: 'API Documentation',
        href: 'https://api.adapt.chat/docs',
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
        <div class="flex gap-x-2 items-center">
          <img src="/coined.png" class="w-14 h-14" alt="Coined Icon" />
          <span class="normal-case text-2xl font-title font-bold">Coined</span>
        </div>
        <div class="mx-5 my-1 border-2 self-stretch rounded opacity-20 hidden md:flex" />
        <div class="flex items-center gap-4">
          <SocialIcon href="https://discord.gg/BjzrQZjFwk" src="/icons/discord.svg" alt="Discord" />
          <SocialIcon href="https://github.com/jay3332" src="/icons/github.svg" alt="Discord" />
        </div>
      </div>
      <p class="text-white text-opacity-50">
        Copyright &copy; 2023-present jay3332
      </p>
    </footer>
  )
}