interface ChatBotProps {
  variant?:
    | "purpleOnBlack"
    | "pinkOnBlack"
    | "yellowOnBlack"
    | "grayOnBlack"
    | "whiteOnBlack"
    | "blackOnPurple"
    | "blackOnPink"
    | "blackOnYellow"
    | "blackOnGray";
}

const variants = {
  purpleOnBlack: { bg: "#000000", fill: "#985DF6" },
  pinkOnBlack: { bg: "#000000", fill: "#E98493" },
  yellowOnBlack: { bg: "#000000", fill: "#F3BB47" },
  grayOnBlack: { bg: "#000000", fill: "#E5E5E5" },
  whiteOnBlack: { bg: "#000000", fill: "#FFFFFF" },

  blackOnPurple: { bg: "#985DF6", fill: "#000000" },
  blackOnPink: { bg: "#E98493", fill: "#000000" },
  blackOnYellow: { bg: "#F3BB47", fill: "#000000" },
  blackOnGray: { bg: "#E5E5E5", fill: "#000000" },
} as const;

export function ChatBot({ variant = "whiteOnBlack" }: ChatBotProps) {
    const { bg, fill } = variants[variant];
    return (
        <>
    <div
      className="fixed bottom-4 right-4 z-50 rounded-full p-4 cursor-pointer hover:scale-105 transition"
          style={{ backgroundColor: bg }}
      aria-label="Open chat"
>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" className="size-7" fill="none">
            <path className="opacity-100" fill={fill} d="M55 110c30.376 0 55-24.624 55-55S85.376 0 55 0 0 24.624 0 55c0 8.798 2.066 17.114 5.739 24.489.976 1.96 1.301 4.2.735 6.314L3.198 98.046c-1.422 5.316 3.44 10.178 8.755 8.755l12.244-3.275c2.115-.566 4.355-.241 6.314.735C37.886 107.934 46.202 110 55 110Z" />
            </svg>
        </span>
    </div>
        </>
    )
}