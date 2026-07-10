import PrimaryCTA from "./PrimaryCTA";
import SecondaryCTA from "./SecondaryCTA";

export default function ActionPanels() {
  return (
    <section id="actions" className="pt-2xl pb-xl">
      <div className="mx-auto max-w-[720px] px-lg">
        <PrimaryCTA
          label="Draw Today's Card"
          description="A single card for a moment of reflection."
          to="/draw/daily"
        />
        <div className="mt-lg flex flex-col gap-lg md:flex-row">
          <SecondaryCTA
            label="Start a New Reading"
            description="Choose a spread and explore the cards in depth."
            to="/spreads"
          />
          <SecondaryCTA
            label="Explore the Card Library"
            description="Browse all seventy-eight cards and their meanings."
            to="/cards"
          />
        </div>
      </div>
    </section>
  );
}
