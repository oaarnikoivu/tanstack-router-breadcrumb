import { isMatch, Link, useMatches } from "@tanstack/react-router";
import { Home, LucideIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import React from "react";

export function Header() {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, "loaderData.crumb")
  );

  const getLastIcon = () => {
    let result: LucideIcon = Home;

    for (const item of [...matchesWithCrumbs].reverse()) {
      if (item.loaderData?.crumb.icon) {
        result = item.loaderData.crumb.icon;
        break;
      }
    }

    return result;
  };

  const Icon = getLastIcon();

  return (
    <header className="w-full p-2 border-b">
      <div className="flex items-center gap-1.5">
        <Icon className="size-3.5" />
        <Breadcrumb>
          <BreadcrumbList>
            {matchesWithCrumbs.map(({ id, pathname, loaderData }, index) => (
              <React.Fragment key={id}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={pathname}>{loaderData?.crumb.label ?? ""}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < matchesWithCrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
