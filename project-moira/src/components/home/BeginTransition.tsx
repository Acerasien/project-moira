import SectionDivider from "../decorative/SectionDivider";

export default function BeginTransition() {
  return (
    <section className="py-2xl">
      <div className="mx-auto max-w-[480px] px-lg text-center">
        <SectionDivider glyph="☉" width={80} />
        <h2 className="mt-lg font-display text-display-lg text-text text-balance">
          Begin
        </h2>
        <p className="mt-md font-body text-body text-text-muted text-balance">
          Choose how you would like to reflect today.
        </p>
      </div>
    </section>
  );
}
