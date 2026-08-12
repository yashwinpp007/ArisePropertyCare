import Image from "next/image";

interface FullBleedImageProps {
  src: string;
  alt: string;
  /** Tailwind height classes — defaults to a large but responsive banner height. */
  heightClass?: string;
  /** Optional dark gradient overlay for legibility when content sits on top. */
  overlay?: boolean;
  priority?: boolean;
  /** CSS object-position for the image crop — defaults to centered. Use to keep faces/heads in frame on short, wide crops. */
  objectPosition?: string;
}

/**
 * Edge-to-edge banner image that breaks out of the container-premium
 * max-width, spanning the full viewport width. Use between content
 * sections to create large, magazine-style photo breaks.
 */
export function FullBleedImage({
  src,
  alt,
  heightClass = "h-[50vh] max-h-[560px] min-h-[280px] sm:h-[60vh]",
  overlay = false,
  priority = false,
  objectPosition = "center",
}: FullBleedImageProps) {
  return (
    <div className={`relative w-full ${heightClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-brand-navy-950/10 to-transparent" />
      )}
    </div>
  );
}
