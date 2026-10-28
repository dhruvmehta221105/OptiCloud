export function AnalyticsSection() {
  const spendPoints = [1120, 980, 1240, 1310, 1190, 1060, 1280];
  const savingsPoints = [320, 410, 380, 450, 520, 480, 618];

  return (
    <section className="lp-analytics" id="analytics">
      <div className="lp-analytics-header">
        <h2>Cost analytics at a glance</h2>
        <p className="lp-analytics-sub">
          Track cloud spend by service and identify optimization opportunities across your infrastructure.
        </p>
      </div>

      <div className="lp-analytics-grid lp-analytics-desktop">
        <article className="lp-analytics-card">
          <div className="lp-analytics-card-body">
            <div className="lp-analytics-copy">
              <strong>Monthly spend</strong>
              <span>Track cloud spend by service.</span>
            </div>
            <div className="lp-chart-panel">
              <div className="lp-chart-toolbar">
                <span>Spend trend</span>
                <span className="lp-chart-pill">Monthly</span>
              </div>
              <div className="lp-chart-body">
                <div className="lp-chart-y">
                  <span>10k</span>
                  <span>6k</span>
                  <span>5k</span>
                </div>
                <div className="lp-chart-plot">
                  <Sparkline points={spendPoints} max={1400} />
                  <div className="lp-chart-marker">
                    <div className="lp-chart-tip">
                      <strong>$2,846</strong>
                      <small>Monthly spend</small>
                    </div>
                    <div className="lp-chart-dot-outer" />
                    <div className="lp-chart-dot-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="lp-analytics-card">
          <div className="lp-analytics-card-body">
            <div className="lp-analytics-copy">
              <strong>Potential savings</strong>
              <span>Identified optimization opportunities.</span>
            </div>
            <div className="lp-chart-panel">
              <div className="lp-chart-toolbar">
                <span>Estimated savings</span>
                <span className="lp-chart-pill">Monthly</span>
              </div>
              <div className="lp-chart-body">
                <div className="lp-chart-y">
                  <span>$800</span>
                  <span>$400</span>
                  <span>$0</span>
                </div>
                <div className="lp-chart-plot">
                  <Sparkline points={savingsPoints} max={800} fill="#fb432c" />
                  <div className="lp-chart-marker">
                    <div className="lp-chart-tip">
                      <strong>$618</strong>
                      <small>/ month, est.</small>
                    </div>
                    <div className="lp-chart-dot-outer" />
                    <div className="lp-chart-dot-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Sparkline({ points, max, fill }) {
  const width = 260;
  const height = 110;
  const padding = 12;
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;
  const step = plotWidth / (points.length - 1);
  const maxVal = Math.max(...points);

  const line = points
    .map((p, i) => {
      const x = padding + i * step;
      const y = height - padding - (p / maxVal) * plotHeight;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const lastY = height - padding - (points[points.length - 1] / maxVal) * plotHeight;
  const lastX = padding + (points.length - 1) * step;

  return (
    <svg width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="grad-fill" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={fill || "#fb432c"} stopOpacity={0.35} offset="0%" />
          <stop stopColor={fill || "#fb432c"} stopOpacity={0.05} offset="100%" />
        </linearGradient>
      </defs>
      <path
        d={line}
        stroke={fill || "#fb432c"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d={`${line} L${lastX.toFixed(1)},${height - padding} L${padding},${height - padding} Z`}
        fill="url(#grad-fill)"
      />
      <circle cx={lastX} cy={lastY} r={4} fill={fill || "#fb432c"} />
    </svg>
  );
}
