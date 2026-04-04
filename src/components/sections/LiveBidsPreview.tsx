import { useState } from "react";
import LiveBids, {
  LiveBidsLight,
  LiveBidsLightMobile,
  LiveBidsMobile,
} from "./LiveBids";

export default function LiveBidsPreview() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const View =
    device === "desktop"
      ? theme === "dark"
        ? LiveBids
        : LiveBidsLight
      : theme === "dark"
        ? LiveBidsMobile
        : LiveBidsLightMobile;

  return (
    <>
      <div
        className="fixed right-4 top-4 z-50 flex flex-col gap-2 sm:flex-row sm:items-start"
        role="presentation"
      >
        <div
          className="flex rounded-lg border border-white/20 bg-[#0b1e23]/90 p-1 shadow-lg backdrop-blur-sm"
          role="group"
          aria-label="Preview device size"
        >
          <button
            type="button"
            onClick={() => setDevice("desktop")}
            aria-pressed={device === "desktop"}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              device === "desktop"
                ? "bg-white/15 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Desktop
          </button>
          <button
            type="button"
            onClick={() => setDevice("mobile")}
            aria-pressed={device === "mobile"}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              device === "mobile"
                ? "bg-white/15 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Mobile
          </button>
        </div>

        <div
          className="flex rounded-lg border border-white/20 bg-[#0b1e23]/90 p-1 shadow-lg backdrop-blur-sm"
          role="group"
          aria-label="Preview theme"
        >
          <button
            type="button"
            onClick={() => setTheme("dark")}
            aria-pressed={theme === "dark"}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              theme === "dark"
                ? "bg-white/15 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Dark
          </button>
          <button
            type="button"
            onClick={() => setTheme("light")}
            aria-pressed={theme === "light"}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              theme === "light"
                ? "bg-white text-gray-900"
                : "text-white/70 hover:text-white"
            }`}
          >
            Light
          </button>
        </div>
      </div>

      <View />
    </>
  );
}
