import { createFileRoute } from "@tanstack/react-router";
import { Crumb } from "../types";
import { Home } from "lucide-react";

const crumb: Crumb = {
  label: "Home",
  icon: Home,
};

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => {
    return { crumb };
  },
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
