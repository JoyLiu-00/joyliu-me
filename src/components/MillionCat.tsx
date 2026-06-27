export function MillionCat() {
  return (
    <div className="group fixed bottom-6 right-6 z-50 cursor-pointer select-none">
      <div
        className="pointer-events-none absolute bottom-full right-0 mb-3 w-44 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs leading-relaxed text-gray-700 opacity-0 shadow-sm transition-all duration-300 ease-out scale-95 group-hover:opacity-100 group-hover:scale-100"
        aria-hidden="true"
      >
        <p>🐱 Mrrp. I&apos;m Million. Stay a while. 🐾</p>
        <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-gray-200 bg-white" />
      </div>

      <div className="million-cat-float">
        <svg
          width="120"
          height="130"
          viewBox="0 0 120 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Million the cat"
          role="img"
        >
          {/* Tail — anchored to body, drawn behind */}
          <g transform="translate(84, 88)">
            <g className="million-cat-tail">
              <circle cx="0" cy="0" r="7" fill="#FDD080" />
              <path
                d="M0 1C8 0 14 -5 20 -12C24 -16 22 -20 18 -17"
                stroke="#F5B830"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M0 1C8 0 14 -5 20 -12C24 -16 22 -20 18 -17"
                stroke="#FDD080"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          {/* Body */}
          <ellipse cx="60" cy="92" rx="28" ry="22" fill="#FDD080" />
          <ellipse cx="60" cy="94" rx="18" ry="14" fill="#FFF4D6" />
          <ellipse cx="48" cy="90" rx="8" ry="12" fill="#F5B830" opacity="0.35" />

          {/* Paws */}
          <ellipse cx="44" cy="110" rx="9" ry="6" fill="#FDD080" />
          <ellipse cx="60" cy="112" rx="10" ry="6" fill="#FDD080" />
          <ellipse cx="76" cy="110" rx="9" ry="6" fill="#FDD080" />
          <ellipse cx="44" cy="110" rx="6" ry="3.5" fill="#FFF4D6" />
          <ellipse cx="60" cy="112" rx="7" ry="3.5" fill="#FFF4D6" />
          <ellipse cx="76" cy="110" rx="6" ry="3.5" fill="#FFF4D6" />

          {/* Head */}
          <circle cx="60" cy="50" r="34" fill="#FDD080" />
          <ellipse cx="46" cy="54" rx="10" ry="12" fill="#F5B830" opacity="0.25" />

          {/* Ears */}
          <g className="million-cat-ear-left">
            <path
              d="M34 28C30 10 42 6 48 22C44 24 38 26 34 28Z"
              fill="#FDD080"
            />
            <path
              d="M36 26C34 16 42 14 45 23C42 24 38 25 36 26Z"
              fill="#FFB7C5"
            />
          </g>
          <g className="million-cat-ear-right">
            <path
              d="M86 28C90 10 78 6 72 22C76 24 82 26 86 28Z"
              fill="#FDD080"
            />
            <path
              d="M84 26C86 16 78 14 75 23C78 24 82 25 84 26Z"
              fill="#FFB7C5"
            />
          </g>

          {/* Cheeks */}
          <circle className="million-cat-blush" cx="38" cy="58" r="7" fill="#FFB7C5" opacity="0.55" />
          <circle className="million-cat-blush" cx="82" cy="58" r="7" fill="#FFB7C5" opacity="0.55" />

          {/* Eyes */}
          <g className="million-cat-eyes">
            <circle cx="48" cy="48" r="6" fill="#2D2A26" />
            <circle cx="72" cy="48" r="6" fill="#2D2A26" />
            <circle cx="50" cy="46" r="2" fill="white" />
            <circle cx="74" cy="46" r="2" fill="white" />
          </g>

          {/* Nose & mouth */}
          <ellipse cx="60" cy="58" rx="4" ry="3" fill="#FFB7C5" />
          <path
            d="M60 61C57 64 54 64 52 62"
            stroke="#D4956A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60 61C63 64 66 64 68 62"
            stroke="#D4956A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Whiskers */}
          <path d="M30 52H14" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 58H12" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 64H14" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M90 52H106" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M92 58H108" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M90 64H106" stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <style>{`
        @keyframes million-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes million-tail-wag {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(8deg); }
        }

        @keyframes million-blink {
          0%, 46%, 48%, 100% { transform: scaleY(1); }
          47% { transform: scaleY(0.08); }
        }

        @keyframes million-ear-twitch-left {
          0%, 88%, 100% { transform: rotate(0deg); }
          90%, 92% { transform: rotate(-10deg); }
        }

        @keyframes million-ear-twitch-right {
          0%, 90%, 100% { transform: rotate(0deg); }
          92%, 94% { transform: rotate(10deg); }
        }

        @keyframes million-blush-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.72; }
        }

        .million-cat-float {
          animation: million-float 3s ease-in-out infinite;
        }

        .million-cat-tail {
          transform-origin: 0 0;
          animation: million-tail-wag 1.4s ease-in-out infinite;
        }

        .million-cat-eyes {
          transform-box: fill-box;
          transform-origin: center;
          animation: million-blink 4s ease-in-out infinite;
        }

        .million-cat-ear-left {
          transform-box: fill-box;
          transform-origin: 34px 28px;
          animation: million-ear-twitch-left 6s ease-in-out infinite;
        }

        .million-cat-ear-right {
          transform-box: fill-box;
          transform-origin: 86px 28px;
          animation: million-ear-twitch-right 6s ease-in-out infinite 0.15s;
        }

        .million-cat-blush {
          animation: million-blush-pulse 2.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
