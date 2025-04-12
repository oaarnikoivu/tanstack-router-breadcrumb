import { Crumb } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { Folder } from "lucide-react";

const crumb: Crumb = {
  label: "Workspace",
  icon: Folder,
};

export const Route = createFileRoute("/_settings/settings/workspace")({
  component: RouteComponent,
  loader: () => {
    return { crumb };
  },
});

function RouteComponent() {
  return <div>Hello "/_settings/settings/workspace"!</div>;
}
