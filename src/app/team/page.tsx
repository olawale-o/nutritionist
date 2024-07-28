import { Hero } from "./components/Hero";
import { JoinOurTeam } from "./components/JoinOurTeam";
import { Teams } from "./components/Teams";
import "./page.css";

export default function Team() {
  return (
    <main>
      <Hero />
      <Teams />
      <JoinOurTeam />
    </main>
  );
}
