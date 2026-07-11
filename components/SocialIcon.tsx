type SocialIconProps = {
  label: string;
  text: string;
  className?: string;
};

function PlatformMark({ label, text }: Pick<SocialIconProps, "label" | "text">) {
  const normalizedLabel = label.toLowerCase();
  const iconProps = {
    "aria-hidden": true,
    className: "social-icon-mark",
    focusable: "false",
    viewBox: "0 0 24 24",
  } as const;

  if (normalizedLabel.includes("instagram")) {
    return (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="social-icon-fill" />
      </svg>
    );
  }

  if (normalizedLabel.includes("youtube")) {
    return (
      <svg {...iconProps}>
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path d="m10 9 5 3-5 3Z" className="social-icon-fill" />
      </svg>
    );
  }

  if (normalizedLabel.includes("spotify") || normalizedLabel.includes("podcast") || text.toLowerCase() === "sp") {
    return (
      <svg {...iconProps}>
        <circle className="spotify-icon-disc" cx="12" cy="12" r="9.5" />
        <path className="spotify-icon-wave" d="M6.5 9.3c3.1-1 8.1-.9 11 .3" />
        <path className="spotify-icon-wave" d="M6.2 12.3c3.2-1.1 8.6-1 11.6.3" />
        <path className="spotify-icon-wave" d="M6.5 15.2c2.9-.9 7.6-.8 10.3.3" />
      </svg>
    );
  }

  if (normalizedLabel.includes("tiktok")) {
    return (
      <svg {...iconProps}>
        <path d="M14 4v9.1a3.9 3.9 0 1 1-3-3.8" />
        <path d="M14 4c.5 2 1.7 3.3 4 3.6" />
      </svg>
    );
  }

  if (text.toLowerCase() === "no") {
    return (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 17V7l8 10V7" />
      </svg>
    );
  }

  return <span aria-hidden="true">{text}</span>;
}

export function SocialIcon({ label, text, className = "" }: SocialIconProps) {
  return (
    <span className={`social-icon ${className}`.trim()}>
      <PlatformMark label={label} text={text} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
