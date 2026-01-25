import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Noah Hendry's Portfolio" }];
}

export default function Home() {
  return <Welcome />;
}
