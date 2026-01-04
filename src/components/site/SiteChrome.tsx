import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import BottomBookNow from "./BottomBookNow";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Push page content below fixed header */}
      <div className="pt-[var(--wl-header-h)]">{children}</div>
      {/* <BottomBookNow />  */}
    </div>
  );
}

