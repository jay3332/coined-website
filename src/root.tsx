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
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import {useLocation} from "@solidjs/router";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Coined</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="bg-gray-900">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Footer />
        <Scripts />
      </Body>
    </Html>
  );
}
