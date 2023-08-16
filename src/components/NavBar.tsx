import classNames from "classnames";
import {A} from "solid-start";
import {COINED_INVITE} from "~/routes";

type Links = (
  {
    name: string,
    href: string,
  } | {
    name: string,
    links: Links,
  }
)[]

const LINKS: Links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Commands',
    href: '/commands',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'More',
    links: [
      {
        name: 'Legal',
        links: [
          {
            name: 'Terms of Service',
            href: '/terms',
          },
          {
            name: 'Privacy Policy',
            href: '/privacy',
          },
        ]
      },
      {
        name: 'Links',
        links: [
          {
            name: 'Add Coined',
            href: (
              'https://discord.com/oauth2/authorize?client_id=753017377922482248&scope=bot+applications.commands&permissions=414531833025'
            ),
          },
          {
            name: 'Support Server',
            href: 'https://discord.gg/BjzrQZjFwk',
          }
        ]
      }
    ]
  }
]

function VerticalLink({ link }: { link: Links[number] }) {
  return (
    <li>
      {"href" in link ? (
        <A class="!bg-base-content !bg-opacity-0 hover:!bg-opacity-10" href={link.href}>{link.name}</A>
      ) : (
        <>
          <a>{link.name}</a>
          <ul>
            {link.links.map(link => <VerticalLink link={link} />)}
          </ul>
        </>
      )}
    </li>
  )
}

function HorizontalLink({ link, transparent }: { link: Links[number], transparent: boolean }) {
  return (
    <li>
      {"href" in link ? (
        <A class="!bg-base-content !bg-opacity-0 hover:!bg-opacity-10" href={link.href}>{link.name}</A>
      ) : (
        <details>
          <summary>{link.name}</summary>
          <ul class={classNames('p-2', { 'bg-gray-900': !transparent })}>
            {link.links.map(link => <HorizontalLink link={link} transparent={transparent} />)}
          </ul>
        </details>
      )}
    </li>
  )
}

export default function NavBar({ transparent = false }: { transparent?: boolean } = {}) {
  return (
    <div class={classNames("navbar", transparent ? 'bg-transparent absolute z-[9999]' : 'bg-gray-950')}>
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex={0} class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} class={classNames(
            "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
            { 'bg-gray-900': !transparent }
          )}>
            {LINKS.map(link => <VerticalLink link={link} />)}
          </ul>
        </div>
        <A class="btn btn-ghost flex gap-x-2" href="/">
          <img src="/coined.png" class="w-12 h-12" alt="Coined Icon" />
          <span class="normal-case text-xl hidden lg:flex">Coined</span>
        </A>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          {LINKS.map(link => <HorizontalLink link={link} transparent={transparent} />)}
        </ul>
      </div>
      <div class="navbar-end gap-x-2">
        <a class="btn btn-primary">Log In</a>
        <a class="btn btn-accent hidden lg:flex" href={COINED_INVITE}>Add Coined</a>
      </div>
    </div>
  )
}
