export default function WaveDivider({ flip = false, from = "#FFFFFF", to = "#F5F8FF" }) {
  return (
    <div
      className={`relative -mb-px overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[52px] w-full sm:h-[72px] lg:h-[90px]"
      >
        <path
          fill={to}
          d="M0,48 C180,88 320,8 520,40 C720,72 820,96 1020,56 C1180,24 1320,8 1440,36 L1440,90 L0,90 Z"
        />
        <path
          fill={from}
          opacity="0.35"
          d="M0,28 C220,70 380,0 560,28 C760,58 900,82 1100,38 C1240,10 1360,18 1440,32 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}
