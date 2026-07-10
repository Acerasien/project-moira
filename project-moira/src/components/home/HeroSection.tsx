import ConstellationLines from "../decorative/ConstellationLines";
import AstrolabeCircles from "../decorative/AstrolabeCircles";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-3xl pb-2xl"
      aria-label="Moira — Home"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(20, 27, 45, 0.6) 0%, #0B1020 70%)",
        }}
      />
      <ConstellationLines />
      <AstrolabeCircles />

      <div className="relative z-10 flex flex-col items-center px-lg text-center">
        <h1
          className="font-display text-display-xl text-text"
          style={{ letterSpacing: "0.08em" }}
        >
          MOIRA
        </h1>
        <p className="mt-xl max-w-[480px] font-body text-tagline text-text-muted text-balance">
          Every card is a mirror.
          <br />
          Every reading begins with intention.
        </p>
      </div>
    </section>
  );
}
