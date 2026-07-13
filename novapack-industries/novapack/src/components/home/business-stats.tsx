const stats = [
  { value: "31", label: "Years in operation" },
  { value: "1,200+", label: "Active SKUs" },
  { value: "6,400+", label: "Business accounts served" },
  { value: "99.2%", label: "On-time dispatch rate" },
];

export function BusinessStats() {
  return (
    <section className="border-b border-line bg-steel">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-white/20 pl-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
