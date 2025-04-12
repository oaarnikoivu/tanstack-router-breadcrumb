import { Crumb } from "@/types";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Settings } from "lucide-react";

const crumb: Crumb = {
  label: "Settings",
  icon: Settings,
};

export const Route = createFileRoute("/_settings")({
  component: RouteComponent,
  loader: () => {
    return { crumb };
  },
});

function RouteComponent() {
  return <Outlet />;
}
