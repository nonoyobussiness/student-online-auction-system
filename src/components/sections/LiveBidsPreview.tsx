import { useState } from "react";
import LiveBids, {
  LiveBidsLight,
  LiveBidsLightMobile,
  LiveBidsMobile,
} from "./LiveBids";

const previewControlBar =
  "flex rounded-lg border border-white/20 bg-live-bids-page/90 p-1 shadow-lg backdrop-blur-sm";

const inactiveToggle = "text-white/70 hover:text-white";
const activeToggleDefault = "bg-white/15 text-white";

function SegmentedToggle<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly { id: T; label: string; activeClass: string }[];
}) {
  return (
    <div className={previewControlBar} role="group" aria-label={label}>
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-pressed={active}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              active ? opt.activeClass : inactiveToggle
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

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
        <SegmentedToggle
          label="Preview device size"
          value={device}
          onChange={setDevice}
          options={[
            { id: "desktop", label: "Desktop", activeClass: activeToggleDefault },
            { id: "mobile", label: "Mobile", activeClass: activeToggleDefault },
          ]}
        />
        <SegmentedToggle
          label="Preview theme"
          value={theme}
          onChange={setTheme}
          options={[
            { id: "dark", label: "Dark", activeClass: activeToggleDefault },
            {
              id: "light",
              label: "Light",
              activeClass: "bg-white text-gray-900",
            },
          ]}
        />
      </div>

      <View />
    </>
  );
}
