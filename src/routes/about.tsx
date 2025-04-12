import { createFileRoute } from "@tanstack/react-router";
import { Crumb } from "../types";
import { HelpCircle } from "lucide-react";

const crumb: Crumb = {
  label: "About",
  icon: HelpCircle,
};

export const Route = createFileRoute("/about")({
  component: About,
  loader: () => {
    return {
      crumb,
    };
  },
});

function About() {
  return <div className="p-2">Hello from About!</div>;
}
