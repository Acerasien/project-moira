export default function AtmosphericGlow() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "400px",
        height: "400px",
        background: `radial-gradient(
          ellipse at 50% 45%,
          rgba(20, 27, 45, 0.5) 0%,
          rgba(200, 169, 106, 0.03) 40%,
          transparent 70%
        )`,
      }}
      aria-hidden="true"
    />
  );
}
