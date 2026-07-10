interface CardFaceProps {
  image: string;
  name: string;
}

export default function CardFace({ image, name }: CardFaceProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-md"
      style={{ border: "1px solid var(--color-accent)", borderColor: "rgba(200, 169, 106, 0.3)" }}>
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
