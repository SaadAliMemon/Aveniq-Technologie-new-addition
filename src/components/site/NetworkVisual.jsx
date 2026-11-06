const NODES = [
  { x: 40, y: 200, label: "BUSINESS" },
  { x: 160, y: 90, label: "CRM" },
  { x: 160, y: 310, label: "API" },
  { x: 290, y: 200, label: "AUTOMATION" },
  { x: 420, y: 100, label: "AI" },
  { x: 420, y: 300, label: "DATA" },
  { x: 540, y: 200, label: "RESULT" },
];
const EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
];
export function NetworkVisual() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="glow-orb left-1/4 top-1/4 h-[320px] w-[320px]"
        style={{ background: "var(--violet)" }}
      />
      <svg
        viewBox="0 0 600 400"
        className="relative w-full"
        role="img"
        aria-label="Abstract diagram: business systems flowing through automation and AI into results"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="var(--soft)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="nodeFill">
            <stop offset="0%" stopColor="var(--soft)" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.25" />
          </radialGradient>
        </defs>

        {EDGES.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          const mx = (from.x + to.x) / 2;
          return (
            <path
              key={`${a}-${b}`}
              d={`M ${from.x} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#edge)"
              strokeWidth="1.2"
              strokeDasharray="6 10"
              style={{
                animation: `dash-flow ${8 + i}s linear infinite`,
              }}
            />
          );
        })}

        {NODES.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r="22"
              fill="url(#nodeFill)"
              opacity="0.18"
              style={{
                transformOrigin: `${n.x}px ${n.y}px`,
                animation: `pulse-node ${3.4 + i * 0.4}s ease-in-out infinite`,
              }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="7"
              fill="var(--background)"
              stroke="var(--soft)"
              strokeWidth="1.4"
            />
            <text
              x={n.x}
              y={n.y + 40}
              textAnchor="middle"
              fontSize="9"
              letterSpacing="2.4"
              fill="var(--muted-foreground)"
              fontFamily="var(--font-mono)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
