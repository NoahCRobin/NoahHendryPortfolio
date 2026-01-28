import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Wordle } from "~/wordle/wordle";
import { useState } from "react";
import { MouseTracker } from "~/mouseTracker/mouseTracker";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Noah Hendry's Portfolio" }];
}

export default function Home() {
  return (
    <main>
      <MouseTracker />
    </main>
  );
}
