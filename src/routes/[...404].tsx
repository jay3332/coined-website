import { A } from "solid-start";
import NavBar from "~/components/NavBar";

export default function NotFound() {
  return (
    <main class="text-center mx-auto">
      <NavBar />
      <div class="flex flex-col items-center justify-center h-[80vh]">
        <h1 class="text-9xl font-title font-bold text-white/60">404</h1>
        <p class="text-2xl text-white/60">Page not found</p>
        <A class="btn btn-primary mt-4" href="/">Go Home</A>
      </div>
    </main>
  );
}
