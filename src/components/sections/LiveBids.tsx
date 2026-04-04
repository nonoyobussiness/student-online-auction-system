import { Badge } from "../ui";

function LiveBidsDot() {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0"
      style={{
        width: 17,
        height: 17,
        borderRadius: "50%",
        backgroundColor: "#FF0000",
        display: "inline-block",
        flexShrink: 0,
        boxShadow:
          "0 0 0 1px rgba(7, 7, 7, 0.2), inset 0 0 0 3px rgba(180,0,0,0.45)",
      }}
    />
  );
}

function LiveBidsDotMobile() {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0"
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "#FF0000",
        display: "inline-block",
        flexShrink: 0,
        boxShadow:
          "0 0 0 1px rgba(7, 7, 7, 0.2), inset 0 0 0 2px rgba(180,0,0,0.45)",
      }}
    />
  );
}

const gridShellClass =
  "mx-auto flex w-full max-w-[calc(4*230px+3*0.5rem)] flex-col items-center";

const gridShellClassMobile =
  "mx-auto flex w-full max-w-[calc(2*159px+0.375rem)] flex-col items-center px-0.1";

function LiveBidCardDark({ isLive }: { isLive: boolean }) {
  return (
    <div className="flex h-[290px] w-[230px] flex-col rounded-[10px] border border-[#1f3a40] bg-[#0f2a30]">
      <div className="relative h-[176px] shrink-0 rounded-[10px] bg-[#7f7f7f]">
        <div className="absolute left-2 top-2 z-10">
          <Badge
            variant={isLive ? "live" : "ended"}
            theme="dark"
            size="desktop"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="-mt-2 font-jetbrains-mono text-[22px] tracking-wider text-green-400">
            00:23:44
          </p>
          <p className="-mt-2 text-[8px] text-gray-400">Remaining</p>
          <p className="mt-2 text-[10px] text-gray-300">Product Title</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[8px] text-gray-400">Current Bid</p>
            <p className="-mt-1.5 text-[21px] font-bold">
              <span className="font-extrabold text-[#20B2B2]">U</span>
              <span className="ml-[3px] font-jetbrains-mono text-white">95</span>
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-[#20B2B2] px-4 py-1.5 text-[12px] font-medium text-black hover:bg-cyan-600"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

function LiveBidCardDarkMobile({ isLive }: { isLive: boolean }) {
  return (
    <div className="flex h-[200px] w-[159px] flex-col rounded-[8px] border border-[#1f3a40] bg-[#0f2a30]">
      <div className="relative h-[121px] shrink-0 rounded-[8px] bg-[#7f7f7f]">
        <div className="absolute left-1.5 top-1.5 z-10">
          <Badge
            variant={isLive ? "live" : "ended"}
            theme="dark"
            size="mobile"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-2">
        <div>
          <p className="-mt-1 font-jetbrains-mono text-[15px] tracking-wide text-green-400">
            00:23:44
          </p>
          <p className="-mt-1 text-[6px] text-gray-400">Remaining</p>
          <p className="mt-1 text-[7px] text-gray-300">Product Title</p>
        </div>

        <div className="mt-1 flex items-end justify-between gap-1">
          <div>
            <p className="text-[6px] text-gray-400">Current Bid</p>
            <p className="-mt-0.5 text-[14px] font-bold leading-none">
              <span className="font-extrabold text-[#20B2B2]">U</span>
              <span className="ml-0.5 font-jetbrains-mono text-[13px] text-white">
                95
              </span>
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-full bg-[#20B2B2] px-2 py-1 text-[8px] font-medium leading-none text-black hover:bg-cyan-600"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

function LiveBidCardLight({ isLive }: { isLive: boolean }) {
  return (
    <div className="flex h-[290px] w-[230px] flex-col rounded-[10px] border border-[#b5b5b5] bg-[#cfcfcf]">
      <div className="relative h-[176px] shrink-0 rounded-[10px] bg-[#7f7f7f]">
        <div className="absolute left-2 top-2 z-10">
          <Badge
            variant={isLive ? "live" : "ended"}
            theme="light"
            size="desktop"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="-mt-2 font-jetbrains-mono text-[22px] tracking-wider text-green-600">
            00:23:44
          </p>
          <p className="-mt-2 text-[8px] text-gray-600">Remaining</p>
          <p className="mt-2 text-[10px] text-gray-800">Product Title</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[8px] text-gray-600">Current Bid</p>
            <p className="-mt-1.5 text-[21px] font-bold">
              <span className="font-extrabold text-[#357E7E]">
                U
              </span>
              <span className="ml-[3px] font-jetbrains-mono text-black">95</span>
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-[#e6e6e6] px-4 py-1.5 text-[12px] font-medium text-[#357E7E]"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

function LiveBidCardLightMobile({ isLive }: { isLive: boolean }) {
  return (
    <div className="flex h-[200px] w-[159px] flex-col rounded-[8px] border border-[#b5b5b5] bg-[#cfcfcf]">
      <div className="relative h-[121px] shrink-0 rounded-[8px] bg-[#7f7f7f]">
        <div className="absolute left-1.5 top-1.5 z-10">
          <Badge
            variant={isLive ? "live" : "ended"}
            theme="light"
            size="mobile"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-2">
        <div>
          <p className="-mt-1 font-jetbrains-mono text-[15px] tracking-wide text-green-600">
            00:23:44
          </p>
          <p className="-mt-1 text-[6px] text-gray-600">Remaining</p>
          <p className="mt-1 text-[7px] text-gray-800">Product Title</p>
        </div>

        <div className="mt-1 flex items-end justify-between gap-1">
          <div>
            <p className="text-[6px] text-gray-600">Current Bid</p>
            <p className="-mt-0.5 text-[14px] font-bold leading-none">
              <span className="font-extrabold text-[13px] font-bold text-[#357E7E]">
                U
              </span>
              <span className="ml-0.5 font-jetbrains-mono text-[13px] text-black">
                95
              </span>
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-full bg-[#e6e6e6] px-2 py-1 text-[8px] font-medium leading-none text-[#357E7E]"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LiveBids() {
  return (
    <div className="min-h-screen bg-[#0b1e23] p-6">
      <div className={gridShellClass}>
        <div className="mb-8 flex w-full items-center justify-start gap-2">
          <LiveBidsDot />
          <h2 className="font-dm-sans flex h-[49px] w-[199px] shrink-0 items-center pl-2 text-[40px] font-bold leading-none tracking-tight text-white">
            Live Bids
          </h2>
        </div>

        <div className="grid w-full grid-cols-4 justify-items-center gap-x-28 gap-y-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidCardDark key={i} isLive={i % 2 === 0} />
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
        <div className="mb-8 flex w-full items-center justify-start gap-2">
          <LiveBidsDot />
          <h2 className="font-dm-sans flex h-[49px] w-[199px] shrink-0 items-center pl-2 text-[40px] font-bold leading-none tracking-tight text-gray-900">
            Live Bids
          </h2>
        </div>

        <div className="grid w-full grid-cols-4 justify-items-center gap-x-28 gap-y-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidCardLight key={i} isLive={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveBidsMobile() {
  return (
    <div className="min-h-screen bg-[#0b1e23] px-3 py-4">
      <div className={gridShellClassMobile}>
        <div className="mb-5 flex w-full items-center justify-start gap-1.5">
          <LiveBidsDotMobile />
          <h2 className="font-dm-sans flex h-[34px] w-[138px] shrink-0 items-center pl-2 text-[28px] font-bold leading-none tracking-tight text-white">
            Live Bids
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 justify-items-center gap-x-12 gap-y-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidCardDarkMobile key={i} isLive={i % 2 === 0} />
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
        <div className="mb-5 flex w-full items-center justify-start gap-1.5">
          <LiveBidsDotMobile />
          <h2 className="font-dm-sans flex h-[34px] w-[138px] shrink-0 items-center pl-2 text-[28px] font-semibold leading-none tracking-tight text-gray-900">
            Live Bids
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 justify-items-center gap-x-1.5 gap-y-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <LiveBidCardLightMobile key={i} isLive={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
