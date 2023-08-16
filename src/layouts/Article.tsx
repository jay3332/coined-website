import {ParentProps} from "solid-js";
import {MDXProvider} from "solid-jsx";
import {Dynamic} from "solid-js/web";
import NavBar from "~/components/NavBar";
import style from "~/article.module.css";
import classNames from "classnames";

const generateHeading = (component: string, className: string) => (props: ParentProps & { id: any }) => (
  <span class="flex items-center">
    <Dynamic component={component} {...props} />
    <a href={`#${props.id}`} class={classNames("anchor text-gray-800 hover:text-gray-700 transition pl-4", className)}>
      #
    </a>
  </span>
)

export function Article(props: ParentProps) {
  return (
    <MDXProvider components={{
      h1: generateHeading('h1', 'text-4xl'),
      h2: generateHeading('h2', 'text-3xl'),
      h3: generateHeading('h3', 'text-2xl'),
    }}>
      <NavBar />
      <main class={style.main}>
        <div {...props} />
      </main>
    </MDXProvider>
  )
}
