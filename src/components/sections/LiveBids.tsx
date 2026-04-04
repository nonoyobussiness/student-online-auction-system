import { LiveBidTile } from "./LiveBidTile";

function LiveBidsDot() {
  return <span aria-hidden className="live-bids-status-dot" />;
}

function LiveBidsDotMobile() {
  return <span aria-hidden className="live-bids-status-dot live-bids-status-dot--sm" />;
}

const gridShellClass =
  "mx-auto flex w-full max-w-[calc(4*230px+3*0.5rem)] flex-col items-center";

const gridShellClassMobile =
  "mx-auto flex w-full max-w-[calc(2*159px+0.375rem)] flex-col items-center px-0.1";

function LiveBidsHeaderDesktop({ theme }: { theme: "dark" | "light" }) {
  const titleClass =
    theme === "dark"
      ? "text-white"
      : "text-gray-900";

  return (
    <div className="mb-8 flex w-full items-center justify-start gap-2">
      <LiveBidsDot />
      <h2
        className={`font-dm-sans flex h-[49px] w-[199px] shrink-0 items-center pl-2 text-[40px] font-bold leading-none tracking-tight ${titleClass}`}
      >
        Live Bids
      </h2>
    </div>
  );
}

function LiveBidsHeaderMobile({ theme }: { theme: "dark" | "light" }) {
  const titleClass =
    theme === "dark"
      ? "font-bold text-white"
      : "font-semibold text-gray-900";

  return (
    <div className="mb-5 flex w-full items-center justify-start gap-1.5">
      <LiveBidsDotMobile />
      <h2
        className={`font-dm-sans flex h-[34px] w-[138px] shrink-0 items-center pl-2 text-[28px] leading-none tracking-tight ${titleClass}`}
      >
        Live Bids
      </h2>
    </div>
  );
}

export default function LiveBids() {
  return (
    <div className="min-h-screen bg-live-bids-page p-6">
      <div className={gridShellClass}>
        <LiveBidsHeaderDesktop theme="dark" />
        <div className="grid w-full grid-cols-4 justify-items-center gap-x-28 gap-y-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidTile
              key={i}
              theme="dark"
              size="desktop"
              isLive={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveBidsLight() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className={gridShellClass}>
        <LiveBidsHeaderDesktop theme="light" />
        <div className="grid w-full grid-cols-4 justify-items-center gap-x-28 gap-y-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidTile
              key={i}
              theme="light"
              size="desktop"
              isLive={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveBidsMobile() {
  return (
    <div className="min-h-screen bg-live-bids-page px-3 py-4">
      <div className={gridShellClassMobile}>
        <LiveBidsHeaderMobile theme="dark" />
        <div className="grid w-full grid-cols-2 justify-items-center gap-x-12 gap-y-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidTile
              key={i}
              theme="dark"
              size="mobile"
              isLive={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveBidsLightMobile() {
  return (
    <div className="min-h-screen bg-white px-3 py-4">
      <div className={gridShellClassMobile}>
        <LiveBidsHeaderMobile theme="light" />
        <div className="grid w-full grid-cols-2 justify-items-center gap-x-1.5 gap-y-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidTile
              key={i}
              theme="light"
              size="mobile"
              isLive={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
