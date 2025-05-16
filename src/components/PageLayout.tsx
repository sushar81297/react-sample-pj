import type { HTMLProps, ReactNode } from "react";
import Header from "./Header";

type HeaderProps = {
  children: ReactNode;
  isHomePage: boolean;
  autoHeight: boolean;
} & HTMLProps<HTMLDivElement>;

export default function PageLayout({
  children,
  isHomePage = false,
  autoHeight = false,
  ...properties
}: HeaderProps) {
  return (
    <div {...properties}>
      <div className="container">
        <div
          className={`${!isHomePage ? "inner-container" : "inner"} ${
            !autoHeight ? "inner-height" : ""
          }`}
        >
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
