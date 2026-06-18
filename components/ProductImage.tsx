import Image from "next/image";
import { accentGradients, type Product } from "@/lib/products";
import { cn } from "@/lib/cn";

/**
 * Renders the product photo when available, otherwise a styled
 * claymorphic gradient placeholder with a paint-palette motif.
 */
export function ProductImage({
  product,
  className,
  rounded = "rounded-[1.5rem]",
  aspect = "aspect-[4/3]",
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  product: Pick<Product, "name" | "accent" | "image">;
  className?: string;
  rounded?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspect,
        rounded,
        fit === "contain" && "bg-linear-to-br from-brand-50 to-brand-100",
        className,
      )}
    >
      {product.image ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={fit === "contain" ? "object-contain p-2" : "object-cover"}
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center bg-linear-to-br",
            accentGradients[product.accent],
          )}
        >
          <PalettePlaceholder />
        </div>
      )}
    </div>
  );
}

function PalettePlaceholder() {
  return (
    <div className="flex flex-col items-center gap-3 text-white/90">
      <div className="grid grid-cols-3 gap-2">
        {["#ffffff", "#ffeeb0", "#ffc9de", "#c2e3ff", "#b8e6d4", "#ffd6c2"].map(
          (c) => (
            <span
              key={c}
              className="h-5 w-5 rounded-full shadow-inner ring-2 ring-white/50"
              style={{ background: c }}
            />
          ),
        )}
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
        Paint me!
      </span>
    </div>
  );
}
