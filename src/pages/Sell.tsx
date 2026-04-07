/**
 * Sell - Premium listing creation page
 * Drag-drop upload, live preview card, form validation, progress
 */

import { useState, useRef, useCallback, type DragEvent, type ChangeEvent } from "react";
import { PageShell } from "../components/layout";
import { useApp } from "../context/AppContext";

/* ─── Constants ─────────────────────────────────── */

const CATEGORIES = ["Electronics", "Books", "Furniture", "Sports", "Education", "Fashion", "Music", "Other"];
const CONDITIONS = [
  { value: "New",      label: "New",       desc: "Never used, in original packaging" },
  { value: "Like New", label: "Like New",  desc: "Used once or twice, no visible wear" },
  { value: "Used",     label: "Used",      desc: "Shows signs of regular use" },
] as const;
const DURATIONS = [
  { value: "1",    label: "1 Day",    sub: "Fast close" },
  { value: "3",    label: "3 Days",   sub: "Recommended" },
  { value: "7",    label: "7 Days",   sub: "More bids" },
  { value: "custom", label: "Custom", sub: "Pick dates" },
];

type Condition = "New" | "Like New" | "Used";

/* ─── Helpers ────────────────────────────────────── */

function Step({ n, label, active, done }: { n: number; label: string; active: boolean; done: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 12, fontWeight: 700, flexShrink: 0,
        background: done ? "#20B2B2" : active ? "rgba(32,178,178,0.2)" : "rgba(255,255,255,0.06)",
        border: `2px solid ${done || active ? "#20B2B2" : "rgba(255,255,255,0.12)"}`,
        color: done ? "#131B23" : active ? "#20B2B2" : "#666",
        transition: "all 0.3s",
      }}>
        {done ? "✓" : n}
      </div>
      <span style={{
        fontSize: 12, fontWeight: 500,
        color: active ? "#ECEBE4" : done ? "#20B2B2" : "#666",
        fontFamily: "DM Sans, sans-serif",
        transition: "color 0.3s",
      }}>{label}</span>
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}>
      {children}
    </label>
  );
}

function Input({ value, onChange, placeholder, type = "text", className = "" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string; className?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%", padding: "11px 14px", borderRadius: 8, fontSize: 14,
        background: "#0b1820", border: "1.5px solid rgba(32,178,178,0.35)",
        color: "#ECEBE4", fontFamily: "DM Sans, sans-serif", outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box",
      }}
      onFocus={(e) => { e.target.style.borderColor = "#20B2B2"; e.target.style.boxShadow = "0 0 0 3px rgba(32,178,178,0.15)"; }}
      onBlur={(e) => { e.target.style.borderColor = "rgba(32,178,178,0.35)"; e.target.style.boxShadow = "none"; }}
      className={className}
    />
  );
}

/* ─── Live Preview Card ──────────────────────────── */

function PreviewCard({ title, category, condition, price, imageUrl, timer }: {
  title: string; category: string; condition: string; price: string; imageUrl?: string; timer: string;
}) {
  const displayTitle = title || "Your Item Title";
  const displayPrice = price || "0";

  return (
    <div style={{
      width: 220, borderRadius: 14, overflow: "hidden",
      background: "rgba(53,126,126,0.12)", border: "1px solid rgba(32,178,178,0.2)",
      fontFamily: "DM Sans, sans-serif", flexShrink: 0,
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      {/* Image area */}
      <div style={{
        height: 140, background: imageUrl ? "transparent" : "#1F2A36",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {imageUrl ? (
          <img src={imageUrl} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a6070" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span style={{ fontSize: 10, color: "#4a6070" }}>Image Preview</span>
          </div>
        )}
        {/* Live badge */}
        <div style={{
          position: "absolute", top: 8, left: 8,
          background: "rgba(255,0,0,0.85)", borderRadius: 20,
          padding: "2px 7px", display: "flex", alignItems: "center", gap: 4,
        }}>
          <span style={{ width: 5, height: 5, background: "#fff", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ fontSize: 9, color: "#fff", fontWeight: 700 }}>LIVE</span>
        </div>
        {category && (
          <div style={{
            position: "absolute", top: 8, right: 8,
            background: "rgba(32,178,178,0.2)", border: "1px solid rgba(32,178,178,0.4)",
            borderRadius: 20, padding: "2px 7px",
          }}>
            <span style={{ fontSize: 9, color: "#20B2B2", fontWeight: 600 }}>{category}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "12px 12px 14px" }}>
        <p style={{ fontSize: 10, color: "#ECEBE4", fontWeight: 600, marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {displayTitle}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#FC5000", fontFamily: "JetBrains Mono, monospace" }}>
            {timer.split(":")[0]}
          </span>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#008B32", fontFamily: "JetBrains Mono, monospace" }}>
            :{timer.split(":").slice(1).join(":")}
          </span>
        </div>
        {condition && (
          <span style={{
            display: "inline-block", fontSize: 9, padding: "2px 7px", borderRadius: 20, marginBottom: 8,
            background: condition === "New" ? "rgba(34,197,94,0.15)" : condition === "Like New" ? "rgba(32,178,178,0.15)" : "rgba(245,158,11,0.15)",
            color: condition === "New" ? "#22c55e" : condition === "Like New" ? "#20B2B2" : "#f59e0b",
            border: `1px solid ${condition === "New" ? "rgba(34,197,94,0.3)" : condition === "Like New" ? "rgba(32,178,178,0.3)" : "rgba(245,158,11,0.3)"}`,
            fontWeight: 600,
          }}>
            {condition}
          </span>
        )}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 8, color: "#888", marginBottom: 1 }}>Starting Bid</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#20B2B2" }}>
              <span style={{ fontSize: 10 }}>U </span>{displayPrice}
            </p>
          </div>
          <button style={{
            background: "rgba(32,178,178,0.2)", border: "1px solid rgba(32,178,178,0.4)",
            borderRadius: 20, padding: "4px 10px", fontSize: 9, color: "#20B2B2", fontWeight: 600, cursor: "pointer",
          }}>
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────── */

export default function Sell() {
  const { theme, addToast, balance } = useApp();
  const isDark = theme === "dark";

  // Form state
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState<Condition | "">("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("3");
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Timer preview value
  const timerPreview = duration === "1" ? "01:00:00" : duration === "3" ? "03:00:00" : duration === "7" ? "07:00:00" : "XX:XX:XX";

  // Completeness for progress indicator
  const fields = [images.length > 0, title, category, condition, description, price, duration];
  const completedCount = fields.filter(Boolean).length;
  const progressPct = Math.round((completedCount / fields.length) * 100);

  const bgCard   = isDark ? "#111C24" : "#fff";
  const textMuted = isDark ? "#888" : "#666";
  const border   = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  /* ── Image handling ── */
  const processFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadProgress(0);
    const newImages: string[] = [];
    let loaded = 0;
    Array.from(files).slice(0, 4).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target?.result as string);
        loaded++;
        setUploadProgress(Math.round((loaded / files.length) * 100));
        if (loaded === Math.min(files.length, 4)) {
          setImages((prev) => [...prev, ...newImages].slice(0, 4));
          setTimeout(() => { setUploading(false); setUploadProgress(0); }, 300);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault(); setDragging(false);
    processFiles(e.dataTransfer.files);
  }, [processFiles]);

  /* ── Validation + Submit ── */
  const validate = () => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Item title is required";
    if (!category) e.category = "Please select a category";
    if (!condition) e.condition = "Please select a condition";
    if (!description.trim()) e.description = "Description is required";
    if (!price || Number(price) < 1) e.price = "Enter a valid starting price";
    return e;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); addToast("Please fix the errors below", "error"); return; }
    setErrors({});
    setSubmitted(true);
    addToast("🎉 Your item is now live!", "success");
  };

  /* ─── Styles ─── */
  const sectionCard = {
    background: bgCard,
    border: `1px solid ${border}`,
    borderRadius: 14,
    fontFamily: "DM Sans, sans-serif",
  };

  if (submitted) {
    return (
      <PageShell>
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-16 flex flex-col items-center justify-center min-h-[500px] space-y-8">
          <div style={{
            width: 80, height: 80, borderRadius: "50%", background: "rgba(32,178,178,0.12)",
            border: "2px solid #20B2B2", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 36 }}>🎉</span>
          </div>
          <div className="text-center space-y-2">
            <h2 style={{ color: "#ECEBE4", fontSize: 26, fontWeight: 800, fontFamily: "DM Sans, sans-serif" }}>Item Listed Successfully!</h2>
            <p style={{ color: "#888", fontSize: 15, fontFamily: "DM Sans, sans-serif" }}>
              Your item "<strong style={{ color: "#20B2B2" }}>{title}</strong>" is now live and accepting bids.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { setSubmitted(false); setTitle(""); setDescription(""); setPrice(""); setImages([]); setCategory(""); setCondition(""); }}
              style={{ background: "rgba(32,178,178,0.15)", border: "1px solid rgba(32,178,178,0.4)", borderRadius: 10, padding: "10px 24px", color: "#20B2B2", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
              List Another Item
            </button>
            <button onClick={() => window.location.href = "/history"}
              style={{ background: "#20B2B2", border: "none", borderRadius: 10, padding: "10px 24px", color: "#131B23", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
              View My Listings →
            </button>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-8 space-y-10">

        {/* Header */}
        <section className="space-y-2">
          <h1 style={{ fontSize: 24, fontWeight: 800, color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif" }}>
            List an Item
          </h1>
          <p style={{ color: textMuted, fontSize: 14, fontFamily: "DM Sans, sans-serif" }}>
            Reach hundreds of campus buyers — list your item in under 2 minutes.
          </p>
        </section>

        {/* Progress bar */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <span style={{ fontSize: 12, color: textMuted, fontFamily: "DM Sans, sans-serif" }}>Listing completeness</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#20B2B2", fontFamily: "DM Sans, sans-serif" }}>{progressPct}%</span>
          </div>
          <div style={{ height: 5, background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg,#247B7B,#20B2B2)", borderRadius: 99, transition: "width 0.4s ease" }} />
          </div>
          <div className="flex flex-wrap gap-5">
            {["Photos", "Details", "Condition", "Description", "Pricing", "Duration"].map((s, i) => (
              <Step key={s} n={i + 1} label={s} active={!fields[i] && !fields.slice(0, i).every(Boolean)} done={!!fields[i]} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* ── Left: Form ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image Upload */}
            <section className="p-6 lg:p-8 space-y-6" style={sectionCard}>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif" }}>
                  📸 Photos
                  <span style={{ fontSize: 12, fontWeight: 400, color: textMuted, marginLeft: 8 }}>Up to 4 images</span>
                </h3>
              </div>

              {/* Drop zone */}
              <div
                className="flex flex-col items-center justify-center p-8 gap-3"
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: `2px dashed ${dragging ? "#20B2B2" : "rgba(32,178,178,0.3)"}`,
                  borderRadius: 12,
                  cursor: "pointer", transition: "all 0.2s",
                  background: dragging ? "rgba(32,178,178,0.06)" : isDark ? "rgba(32,178,178,0.03)" : "rgba(32,178,178,0.03)",
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => processFiles(e.target.files)}
                />
                {uploading ? (
                  <div className="flex flex-col items-center gap-2">
                    <div style={{ width: 120, height: 4, background: "rgba(32,178,178,0.2)", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${uploadProgress}%`, background: "#20B2B2", borderRadius: 99, transition: "width 0.1s" }} />
                    </div>
                    <span style={{ fontSize: 12, color: "#20B2B2" }}>Uploading {uploadProgress}%...</span>
                  </div>
                ) : (
                  <>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={dragging ? "#20B2B2" : "#4a6070"} strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <p style={{ fontSize: 13, color: dragging ? "#20B2B2" : textMuted, fontWeight: 500, fontFamily: "DM Sans, sans-serif" }}>
                      Drag & drop photos here
                    </p>
                    <p style={{ fontSize: 11, color: "#666", fontFamily: "DM Sans, sans-serif" }}>or <span style={{ color: "#20B2B2", fontWeight: 600 }}>browse files</span></p>
                  </>
                )}
              </div>

              {/* Image previews */}
              {images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {images.map((img, i) => (
                    <div key={i} style={{ position: "relative", width: 72, height: 72, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(32,178,178,0.3)" }}>
                      <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <button
                        onClick={(e) => { e.stopPropagation(); setImages((prev) => prev.filter((_, j) => j !== i)); }}
                        style={{
                          position: "absolute", top: 2, right: 2, width: 18, height: 18, borderRadius: "50%",
                          background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10,
                        }}
                      >×</button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Details */}
            <section className="p-6 lg:p-8 space-y-6" style={sectionCard}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif" }}>📋 Item Details</h3>
              <div className="space-y-2">
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={setTitle} placeholder="e.g. MacBook Air M2 (2023)" />
                {errors.title && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "DM Sans, sans-serif" }}>{errors.title}</p>}
              </div>
              <div className="grid grid-cols-1 justify-items-stretch grid-rows-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <FormLabel>Category</FormLabel>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: "100%", padding: "11px 14px", borderRadius: 8, fontSize: 14,
                      background: isDark ? "#0b1820" : "#f5f5f0", border: `1.5px solid ${errors.category ? "#ef4444" : "rgba(32,178,178,0.35)"}`,
                      color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif", outline: "none", cursor: "pointer",
                    }}
                  >
                    <option value="">Select category</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.category && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "DM Sans, sans-serif" }}>{errors.category}</p>}
                </div>
                <div className="space-y-2">
                  <FormLabel>Condition</FormLabel>
                  <div className="flex flex-col gap-2">
                    {CONDITIONS.map((c) => (
                      <label key={c.value} className="flex items-center gap-2 cursor-pointer">
                        <div
                          onClick={() => setCondition(c.value)}
                          style={{
                            width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                            border: `2px solid ${condition === c.value ? "#20B2B2" : "rgba(32,178,178,0.3)"}`,
                            background: condition === c.value ? "#20B2B2" : "transparent",
                            transition: "all 0.2s", cursor: "pointer",
                          }}
                        />
                        <span style={{ fontSize: 13, color: condition === c.value ? isDark ? "#ECEBE4" : "#131B23" : textMuted, fontFamily: "DM Sans, sans-serif" }}>
                          {c.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.condition && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "DM Sans, sans-serif" }}>{errors.condition}</p>}
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="p-6 lg:p-8 space-y-6" style={sectionCard}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif" }}>📝 Description</h3>
              <div className="space-y-2">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your item — be honest about any scratches, wear, or issues. Better descriptions get more bids!"
                  rows={5}
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 8, fontSize: 14,
                    background: isDark ? "#0b1820" : "#f5f5f0", border: `1.5px solid ${errors.description ? "#ef4444" : "rgba(32,178,178,0.35)"}`,
                    color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif", outline: "none",
                    resize: "vertical", lineHeight: 1.6, boxSizing: "border-box",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#20B2B2"; e.target.style.boxShadow = "0 0 0 3px rgba(32,178,178,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.description ? "#ef4444" : "rgba(32,178,178,0.35)"; e.target.style.boxShadow = "none"; }}
                />
                <div className="flex justify-between items-center">
                  {errors.description && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "DM Sans, sans-serif" }}>{errors.description}</p>}
                  {!errors.description && <span />}
                  <span style={{ fontSize: 11, color: textMuted, fontFamily: "DM Sans, sans-serif" }}>{description.length}/500</span>
                </div>
              </div>
            </section>

            {/* Pricing + Duration */}
            <section className="p-6 lg:p-8 space-y-6" style={sectionCard}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif" }}>💰 Pricing & Duration</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <FormLabel>Starting Price (Unicoin)</FormLabel>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-extrabold text-[#20B2B2] font-mono text-sm">
                      U
                    </span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0"
                      min={1}
                      style={{
                        width: "100%", padding: "11px 14px 11px 30px", borderRadius: 8, fontSize: 14,
                        background: isDark ? "#0b1820" : "#f5f5f0", border: `1.5px solid ${errors.price ? "#ef4444" : "rgba(32,178,178,0.35)"}`,
                        color: isDark ? "#ECEBE4" : "#131B23", fontFamily: "DM Sans, sans-serif", outline: "none", boxSizing: "border-box",
                      }}
                    />
                  </div>
                  {errors.price && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "DM Sans, sans-serif" }}>{errors.price}</p>}
                  {price && Number(price) > 0 && (
                    <p style={{ fontSize: 11, color: "#20B2B2", fontFamily: "DM Sans, sans-serif" }}>
                      Starting at {Number(price).toLocaleString()} Unicoin
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <FormLabel>Auction Duration</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {DURATIONS.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setDuration(d.value)}
                        className="py-2 px-1 rounded-lg border-2 text-center transition-all duration-200"
                        style={{
                          borderColor: duration === d.value ? "#20B2B2" : "rgba(32,178,178,0.25)",
                          background: duration === d.value ? "rgba(32,178,178,0.15)" : "transparent",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        <p style={{ fontSize: 13, fontWeight: 700, color: duration === d.value ? "#20B2B2" : textMuted }}>{d.label}</p>
                        <p style={{ fontSize: 10, color: "#666" }}>{d.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Submit */}
            <div className="space-y-4">
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-xl text-[#131B23] text-base font-extrabold cursor-pointer transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #247B7B, #20B2B2)",
                  fontFamily: "DM Sans, sans-serif", boxShadow: "0 4px 20px rgba(32,178,178,0.35)",
                }}
                onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.target as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(32,178,178,0.45)"; }}
                onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.transform = "translateY(0)"; (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(32,178,178,0.35)"; }}
              >
                🚀 List Item Now
              </button>
              <p className="text-center text-[11px] font-sans" style={{ color: textMuted }}>
                A 2% platform fee applies to successful sales • Your wallet balance: <strong style={{ color: "#20B2B2" }}>U {balance.toLocaleString()}</strong>
              </p>
            </div>
          </div>

          {/* ── Right: Live Preview ── */}
          <div className="lg:col-span-1 sticky top-8 space-y-4 pt-2">
            <div className="space-y-1">
              <h3 style={{ fontSize: 13, fontWeight: 700, color: textMuted, fontFamily: "DM Sans, sans-serif", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
                Live Preview
              </h3>
              <p style={{ fontSize: 11, color: "#555", fontFamily: "DM Sans, sans-serif" }}>Updates as you fill in details</p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <PreviewCard
                title={title}
                category={category}
                condition={condition}
                price={price}
                imageUrl={images[0]}
                timer={timerPreview}
              />
            </div>
            
            {completedCount === fields.length && (
              <div className="p-3 rounded-xl" style={{
                background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)",
              }}>
                <p style={{ fontSize: 12, color: "#22c55e", fontWeight: 700, fontFamily: "DM Sans, sans-serif" }}>
                  ✓ Listing complete & ready!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
