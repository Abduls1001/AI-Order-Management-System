export function ProductStockBadge({stock}:{stock:string}) {
  return <span className="rounded-full border px-2 py-1 text-xs">{stock}</span>;
}
