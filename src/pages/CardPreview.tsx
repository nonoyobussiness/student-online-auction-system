import Card from "../components/ui/Card";

export default function CardPreview() {
  return (
    <div className="min-h-screen bg-bg px-8 py-12 space-y-16">

      <h1 className="text-3xl font-bold text-white">
        Card Component System
      </h1>

      {/* ================= DARK THEME ================= */}
      <section className="space-y-8">
        <h2 className="text-xl text-white font-semibold">Dark Theme</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

          <Card theme="dark">
            <h3 className="text-white font-semibold">Default Card</h3>
            <p className="text-gray-400 text-sm">Basic usage</p>
          </Card>

          <Card theme="dark" onClick={() => alert("Clicked!")}>
            <p className="text-white">Interactive Card</p>
          </Card>

          <Card theme="dark" padding="lg">
            <p className="text-white">Large Padding</p>
          </Card>

        </div>

        {/* Auction Row */}
        <div className="grid grid-cols-4 gap-6 max-w-6xl">

          <Card variant="auction" theme="dark" padding="none" className="overflow-hidden">

            <div className="h-[140px] bg-gray-600" />

            {/* ✅ UPDATED COLOR HERE */}
            <div className="bg-[#192b32] p-3 space-y-1">
              <p className="text-xs text-gray-300">Product Title</p>
              <p className="text-white font-semibold">U 95</p>
            </div>

          </Card>

        </div>
      </section>

      {/* ================= LIGHT THEME ================= */}
      <section className="space-y-8 bg-white p-8 rounded-2xl">

        <h2 className="text-xl text-gray-800 font-semibold">Light Theme</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

          <Card theme="light">
            <h3 className="text-gray-800 font-semibold">Default Card</h3>
            <p className="text-gray-500 text-sm">Basic usage</p>
          </Card>

          <Card theme="light" padding="sm">
            <p className="text-gray-800">Small Padding</p>
          </Card>

          <Card theme="light" variant="elevated">
            <p className="text-gray-800">Elevated Card</p>
          </Card>

        </div>

        {/* Auction Row */}
        <div className="grid grid-cols-4 gap-6 max-w-6xl">

          <Card variant="auction" theme="light" padding="none" className="overflow-hidden">

            <div className="h-[140px] bg-gray-300" />

            <div className="bg-[#5FA8A9] p-3 space-y-1">
              <p className="text-xs text-white/80">Product Title</p>
              <p className="text-white font-semibold">U 95</p>
            </div>

          </Card>

        </div>
      </section>

    </div>
  );
}