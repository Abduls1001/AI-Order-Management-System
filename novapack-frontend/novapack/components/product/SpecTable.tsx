import type { ProductSpec } from "@/lib/types";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="border border-line">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-canvas"}>
              <th
                scope="row"
                className="w-1/3 border-b border-line px-4 py-3 text-left font-medium text-ink/55"
              >
                {spec.label}
              </th>
              <td className="border-b border-line px-4 py-3 font-mono text-ink/85">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
