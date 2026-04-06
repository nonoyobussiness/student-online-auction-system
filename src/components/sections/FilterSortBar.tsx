/**
 * FilterSortBar - Filter icon + Sort: Ending Soon bar
 */

export default function FilterSortBar() {
  return (
    <div className="flex items-center justify-end gap-3 mt-6">
      {/* Filter button */}
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition"
        style={{
          color: "rgba(236,235,228,0.7)",
          backgroundColor: "transparent",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
        <span>Filter</span>
      </button>

      {/* Sort */}
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition"
        style={{
          color: "rgba(236,235,228,0.7)",
          backgroundColor: "transparent",
        }}
      >
        <span>Sort: Ending Soon</span>
      </button>
    </div>
  );
}