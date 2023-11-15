import React from "react";
import SidebarNavListItem from "./SidebarNavListItem";
import SidebarNavList from "./SidebarNavList";
import { toStep } from "../../redux/slices/add-new-college-step-form";
import { useDispatch } from "react-redux";

const ReduceChildRoutes = (props) => {
  const dispatch = useDispatch();
  const { items, page, depth, currentRoute } = props;
  const handleMultiStep = (step) => {
    dispatch(toStep(step));
  };

  if (page.children) {
    const open = currentRoute.includes(page.href);

    items.push(
      <SidebarNavListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        open={!!open}
        title={page.title}
        href={page.href}
      >
        <SidebarNavList depth={depth + 1} pages={page.children} />
      </SidebarNavListItem>
    );
  } else {
    items.push(
      <SidebarNavListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        title={page.title}
        onClick={page.step >= 0 ? handleMultiStep(page.step) : undefined}
      />
    );
  }

  return items;
};

export default ReduceChildRoutes;
