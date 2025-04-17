import { ActiveLinkResult, NavItem } from "@/types";
import { isCurrentPage } from ".";

export const findActiveLinkIndex = (
  links: NavItem[],
  pathname: string,
  isCollapsed: number | null
): ActiveLinkResult => {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    // Check if the current link is active
    const path = link.pattern || link.path;
    if (path && isCurrentPage(pathname, path)) {
      const collapsedLinkIndex = links.findIndex(
        (link) => link.id === isCollapsed
      );
      const collapsedLink = links.find((link) => link.id === isCollapsed);
      const additionalItems = isCollapsed
        ? i > collapsedLinkIndex
          ? collapsedLink?.links?.length || 0
          : 0
        : 0;
      return { activeIndex: i + additionalItems, parentId: null };
    }

    // If the link has sublinks, recursively check them
    if (link.links && link.links.length > 0) {
      const subLinkResult = findActiveLinkIndex(
        link.links,
        pathname,
        isCollapsed
      );
      if (subLinkResult.activeIndex !== -1) {
        const collapsedLinkIndex = links.findIndex(
          (link) => link.id === isCollapsed
        );
        const collapsedLink = links.find((link) => link.id === isCollapsed);

        const additionalItems =
          isCollapsed === link.id
            ? subLinkResult.activeIndex + 1
            : i > collapsedLinkIndex
            ? collapsedLink?.links?.length || 0
            : 0;
        return {
          activeIndex: i + additionalItems,
          parentId: link.id,
        };
      }
    }
  }

  // If no active link is found, return -1
  return { activeIndex: -1, parentId: null };
};
