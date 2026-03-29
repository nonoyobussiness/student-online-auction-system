import Badge from "./Badge";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <p className="text-[11px] font-medium tracking-widest uppercase text-[#888] mb-3 pb-2 border-b border-white/10">
      {title}
    </p>
    {children}
  </div>
);

const Row = ({ label, children }: { label?: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-4 flex-wrap mb-3">
    {label && <span className="text-[11px] text-[#666] min-w-[56px] shrink-0">{label}</span>}
    {children}
  </div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] text-[#888] bg-white/5 px-2 py-0.5 rounded">{children}</span>
);

const DarkBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/8 p-4 flex-1 min-w-[220px]" style={{ background: "#0C1218" }}>
    <p className="text-[11px] font-medium text-white/30 mb-3">Dark</p>
    {children}
  </div>
);

const LightBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-black/10 p-4 flex-1 min-w-[220px] bg-[#ECEBE4]">
    <p className="text-[11px] font-medium text-black/30 mb-3">Light</p>
    {children}
  </div>
);

const statusVariants = ["live", "success", "ended", "upcoming", "reserved", "cancelled"] as const;

export default function BadgePreview() {
  return (
    <div className="p-8 min-h-screen bg-[#0C1218] text-[#ECEBE4] font-sans">
      <h2 className="text-lg font-semibold mb-1">Badge</h2>
      <p className="text-sm text-[#666] mb-8">All variants · UniAuction Design System</p>

      {/* ── Status pill badges ── */}
      <Section title="Status badges">
        <div className="flex gap-4 flex-wrap">
          <DarkBlock>
            <Row label="desktop">
              {statusVariants.map((v) => (
                <Badge key={v} variant={v} theme="dark" size="desktop" />
              ))}
            </Row>
            <Row label="mobile">
              {statusVariants.map((v) => (
                <Badge key={v} variant={v} theme="dark" size="mobile" />
              ))}
            </Row>
          </DarkBlock>
          <LightBlock>
            <Row label="desktop">
              {statusVariants.map((v) => (
                <Badge key={v} variant={v} theme="light" size="desktop" />
              ))}
            </Row>
            <Row label="mobile">
              {statusVariants.map((v) => (
                <Badge key={v} variant={v} theme="light" size="mobile" />
              ))}
            </Row>
          </LightBlock>
        </div>
      </Section>

      {/* ── Student Seller ── */}
      <Section title="Student Sellers Only">
        <div className="flex gap-4 flex-wrap">
          <DarkBlock>
            <Row label="desktop"><Badge variant="studentSeller" theme="dark" size="desktop" /></Row>
            <Row label="mobile"><Badge variant="studentSeller" theme="dark" size="mobile" /></Row>
          </DarkBlock>
          <LightBlock>
            <Row label="desktop"><Badge variant="studentSeller" theme="light" size="desktop" /></Row>
            <Row label="mobile"><Badge variant="studentSeller" theme="light" size="mobile" /></Row>
          </LightBlock>
        </div>
      </Section>

      {/* ── Dot badges ── */}
      <Section title="Dot badges">
        <Row>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="notification" size="desktop" />
            <Chip>notification 6×6</Chip>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="notification" size="mobile" />
            <Chip>notification 7×7</Chip>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="liveBids" />
            <Chip>live bids 17×17</Chip>
          </div>
        </Row>
      </Section>

      {/* ── In-context ── */}
      <Section title="In-context usage">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10 w-fit">
            <span className="text-sm">Leica M6 Film Camera</span>
            <Badge variant="live" theme="dark" size="desktop" />
            <Badge variant="studentSeller" theme="dark" size="mobile" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10 w-fit">
            <span className="text-sm">Vintage Polaroid 600</span>
            <Badge variant="success" theme="dark" size="desktop" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10 w-fit">
            <span className="text-sm">Sony A7R IV Body</span>
            <Badge variant="upcoming" theme="dark" size="desktop" />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="notification" size="desktop" />
            <span className="text-sm text-[#888]">3 new bids</span>
            <span className="mx-2 text-[#444]">·</span>
            <Badge variant="liveBids" />
            <span className="text-sm text-[#888]">Live bids · 12 active</span>
          </div>
        </div>
      </Section>
    </div>
  );
}