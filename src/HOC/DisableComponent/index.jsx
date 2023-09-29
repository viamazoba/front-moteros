'use client'
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { usePathname } from "next/navigation";

const DisableComponent = ({ disablePaths, children }) => {
  const location = usePathname();
  if (!disablePaths.includes(location)) {
    return children;
  }

  return '';
};

export default DisableComponent;