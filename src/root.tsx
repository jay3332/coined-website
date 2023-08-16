// @refresh reload
import {Suspense} from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Footer from "~/components/Footer";

const META_MESSAGE = "Have fun with your friends and boost your server's engagement by participating in a "
  + "carefully crafted, action-packed, and competitive global economy system.";
const EXTERNAL_ICON = "https://cdn.discordapp.com/attachments/690619923000721438/1140375576331431996/image-3.png";
const SITE_URL = "https://coined.jay3332.tech"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Coined</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <Meta charset="UTF-8" />
        <Meta name="viewport" content="width=device-width" />
    
        {/* Primary Meta Tags */}
        <Meta name="title" content={"Coined \u{2013} Economy, reimagined"} />
        <Meta name="description" content={META_MESSAGE} />
        <Meta name="theme-color" content="#ffcc20" />
    
        {/* Open Graph / Facebook / Discord */}
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content={SITE_URL} />
        <Meta property="og:title" content={"Coined \u{2013} Economy, reimagined"} />
        <Meta property="og:description" content={META_MESSAGE} />
        <Meta property="og:image" content={EXTERNAL_ICON} />
    
        {/* Twitter */}
        <Meta property="twitter:url" content={SITE_URL} />
        <Meta property="twitter:title" content={"Coined \u{2013} Economy, reimagined"} />
        <Meta property="twitter:description" content={META_MESSAGE} />
        <Meta property="twitter:image" content={EXTERNAL_ICON} />
      </Head>
      <Body class="bg-gray-950">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
