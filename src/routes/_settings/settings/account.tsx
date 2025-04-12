import { Crumb } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";

const crumb: Crumb = {
  label: "Account",
  icon: User,
};

export const Route = createFileRoute("/_settings/settings/account")({
  component: RouteComponent,
  loader: () => {
    return { crumb };
  },
});

function RouteComponent() {
  return <div>Hello "/_settings/account"!</div>;
}
