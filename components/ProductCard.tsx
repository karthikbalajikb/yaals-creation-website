import Link from "next/link";
import { categoryLabels, type Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="clay-card group flex flex-col overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="relative">
        <ProductImage product={product} aspect="aspect-[4/5]" />
        {product.badge && (
          <span className="neu-chip absolute left-3 top-3 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-brand-600">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
          {categoryLabels[product.category]}
        </span>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-brand-600">
              ₹{product.price}
            </span>
            {product.compareAt && (
              <span className="text-sm text-muted line-through">
                ₹{product.compareAt}
              </span>
            )}
            {product.shippingNote && (
              <span className="text-xs text-muted">{product.shippingNote}</span>
            )}
          </div>
          <span className="neu-btn flex h-9 w-9 items-center justify-center rounded-full text-brand-600 transition group-hover:text-brand-700">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
