"use client";

import { useState } from "react";
import {
  categoryLabels,
  type Product,
  type ProductCategory,
} from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/cn";

type Filter = "all" | ProductCategory;

export function ProductsExplorer({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const categories = Array.from(
    new Set(products.map((p) => p.category)),
  ) as ProductCategory[];

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Kits" },
    ...categories.map((c) => ({ key: c, label: categoryLabels[c] })),
  ];

  const visible =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition",
              filter === f.key
                ? "btn-primary"
                : "neu-btn text-brand-600",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
