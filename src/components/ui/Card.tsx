import type { ReactNode } from "react";

type CardPadding = "none" | "sm" | "md" | "lg";
type CardVariant =
  | "default"
  | "elevated"
  | "auction"
  | "cta"
  | "how-it-works";
type CardTheme = "dark" | "light";

export interface CardProps {
  children?: ReactNode;
  padding?: CardPadding;
  variant?: CardVariant;
  theme?: CardTheme;
  onClick?: () => void;
  className?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  remaining?: string;
  timerPrefix?: string;
  timerSuffix?: string;
  currentBid?: string;
  placeBidLabel?: string;
  currencySymbol?: string;
  heading?: string;
  bodyText?: string;
  ctaLabel?: string;
  icon?: ReactNode;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const baseStyles = `
  rounded-xl
  overflow-hidden
  transition-all duration-300 ease-out
`;

const themeStyles: Record<CardTheme, string> = {
  dark: `
    bg-[#0B1F23]
    border border-[#1E3A3F]
  `,
  light: `
    bg-white
    border border-gray-200
  `,
};

const variantStyles: Record<CardVariant, string> = {
  default: "",
  elevated: "shadow-lg",
  auction: "",
  cta: "",
  "how-it-works": "",
};

const hoverStyles: Record<CardTheme, string> = {
  dark: `
    hover:shadow-md
    hover:-translate-y-[2px]
  `,
  light: `
    hover:shadow-lg
    hover:-translate-y-[2px]
  `,
};

export default function Card({
  children,
  padding = "md",
  variant = "default",
  theme = "dark",
  onClick,
  className = "",
  title = "MacBook Air M2",
  description = "Turn your old gear into cash in minutes",
  imageUrl,
  remaining = "remaining",
  timerPrefix = "02",
  timerSuffix = ":34:56",
  currentBid = "95",
  placeBidLabel = "Place Bid",
  currencySymbol = "U",
  heading = "Sell fast and safely",
  bodyText = "List your product in minutes and reach campus buyers with verified bidding.",
  ctaLabel = "Get Started Now",
  icon,
}: CardProps) {
  const isInteractive = !!onClick;
  const themeTokens =
    theme === "dark"
      ? {
          text: "text-[#ECEBE4]",
          subtext: "text-[#ECEBE4]/85",
          cardBg: "bg-[rgba(53,126,126,0.17)]",
          currency: "text-[#20B2B2]",
          placeBid:
            "bg-[rgba(32,178,178,0.2)] text-[#131B23] border border-[rgba(32,178,178,0.45)]",
          ctaText: "text-[#131B23]",
          iconBox: "bg-[#0C1218] border border-[#1F2A36]",
          howText: "text-[#ECEBE4]",
        }
      : {
          text: "text-[#131B23]",
          subtext: "text-[#131B23]/80",
          cardBg: "bg-[rgba(0,0,0,0.2)]",
          currency: "text-[#357E7E]",
          placeBid: "bg-[#357E7E] text-[#ECEBE4] border border-[#357E7E]",
          ctaText: "text-[#ECEBE4]",
          iconBox: "bg-[rgba(53,126,126,0.17)] border border-transparent",
          howText: "text-[#131B23]",
        };

  if (variant === "auction") {
    return (
      <article
        className={[
          "w-[153px] h-[194px] md:w-[230px] md:h-[290px]",
          "rounded-[10px] md:rounded-[12px] overflow-hidden",
          "flex flex-col",
          themeTokens.cardBg,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="h-[100px] md:h-[150px] w-full bg-[#1F2A36]">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-[#8F8F8F]" />
          )}
        </div>
        <div className="flex-1 p-2 md:p-3 flex flex-col justify-between">
          <div className="space-y-0.5 md:space-y-1">
            <p className={`${themeTokens.text} text-[8px] md:text-[10px] font-medium truncate`}>
              {title}
            </p>
            <div className="flex items-end gap-1">
              <span className="font-mono text-[22px] leading-none font-medium text-[#FC5000]">
                {timerPrefix}
              </span>
              <span className="font-mono text-[22px] leading-none font-medium text-[#008B32]">
                {timerSuffix}
              </span>
            </div>
            <p className={`${themeTokens.subtext} text-[6px] md:text-[8px] font-medium`}>
              {remaining}
            </p>
            <p className={`${themeTokens.subtext} text-[6px] md:text-[8px] font-medium`}>
              Current Bid
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className={`text-[10px] md:text-[12px] font-semibold ${themeTokens.currency}`}>
              {currencySymbol} {currentBid}
            </p>
            <button
              type="button"
              className={[
                "rounded-full font-medium leading-none",
                "w-[49px] h-[16px] md:w-[92px] md:h-[29px]",
                "text-[8px] md:text-[12px]",
                themeTokens.placeBid,
              ].join(" ")}
            >
              {placeBidLabel}
            </button>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "cta") {
    return (
      <article
        className={[
          "w-[339px] h-[240px] md:w-[1037px] md:h-[390px]",
          "rounded-[10px] md:rounded-[20px]",
          "px-[30px] py-[35px] md:px-[40px] md:py-[77px]",
          "bg-[#357E7E]",
          "flex flex-col justify-between",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="max-w-[580px] space-y-3 md:space-y-5">
          <h3 className={`${themeTokens.ctaText} text-[18px] md:text-[34px] font-black leading-tight`}>
            {heading}
          </h3>
          <p className={`${themeTokens.ctaText} text-[8px] md:text-[14px] leading-relaxed`}>
            {bodyText}
          </p>
        </div>
        <button
          type="button"
          className="w-fit rounded-full bg-[#0C1218] px-4 py-2 md:px-6 md:py-3 text-[8px] md:text-[12px] font-medium text-[#ECEBE4]"
        >
          {ctaLabel}
        </button>
      </article>
    );
  }

  if (variant === "how-it-works") {
    return (
      <article
        className={[
          "rounded-[12px] md:rounded-[16px] p-4 md:p-6",
          theme === "dark" ? "bg-[#131B23]" : "bg-white",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "w-[75px] h-[75px] rounded-2xl grid place-items-center mb-3 md:mb-4",
            themeTokens.iconBox,
          ].join(" ")}
        >
          {icon ?? <span className={`${themeTokens.howText} text-xl`}>?</span>}
        </div>
        <h3 className={`${themeTokens.howText} text-[18px] md:text-[26px] font-black leading-tight`}>
          {heading}
        </h3>
        <p className={`${themeTokens.howText} mt-2 text-[8px] md:text-[16px] leading-relaxed`}>
          {description}
        </p>
      </article>
    );
  }

  return (
    <div
      className={`
        ${baseStyles}
        ${themeStyles[theme]}
        ${paddingStyles[padding]}
        ${variantStyles[variant]}

        ${isInteractive ? `cursor-pointer ${hoverStyles[theme]}` : ""}

        ${className}
      `.trim().replace(/\s+/g, " ")}
      onClick={onClick}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {children}
    </div>
  );
}