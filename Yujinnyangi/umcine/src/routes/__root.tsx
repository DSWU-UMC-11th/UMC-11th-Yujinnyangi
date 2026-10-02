import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-svh flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <main className="mx-auto w-full max-w-[1440px] p-10">
      페이지를 찾을 수 없어요.
    </main>
  ),
});
