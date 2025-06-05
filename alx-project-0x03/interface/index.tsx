// interface/index.ts

import { ReactNode } from "react";

// For Home page routing
export interface PageRouteProps {
  pageRoute: string;
}

// For Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// For Layout component
export interface LayoutProps {
  children: ReactNode;
}