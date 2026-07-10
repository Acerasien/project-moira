import CelestialDivider from "../decorative/CelestialDivider";

export default function Footer() {
  return (
    <footer className="pt-3xl pb-2xl">
      <div className="mx-auto max-w-[480px] px-lg text-center">
        <CelestialDivider />
        <p
          className="mt-xl font-body text-label text-text-muted"
          style={{ letterSpacing: "0.12em", opacity: 0.6 }}
        >
          MOIRA
        </p>
        <p
          className="mt-sm font-body text-body text-text-muted"
          style={{ opacity: 0.5 }}
        >
          Tarot as reflection, not prediction.
        </p>
      </div>
    </footer>
  );
}
