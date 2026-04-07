/**
 * Settings - Appearance, Account, Preferences, Security
 */

import { useState } from "react";
import { PageShell } from "../components/layout";
import { useApp, type Theme } from "../context/AppContext";

/* ─── Small components ───────────────────────────── */

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6 rounded-[14px] px-[26px] py-[22px]" style={{
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 14, padding: "22px 26px", marginBottom: 18, fontFamily: "DM Sans, sans-serif",
    }}>
      <h3 className="flex items-center gap-2" style={{ fontSize: 15, fontWeight: 700, color: "#ECEBE4", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
        <span>{icon}</span> {title}
      </h3>
      {children}
    </section>
  );
}

function Toggle({ checked, onChange, label, sub }: { checked: boolean; onChange: (v: boolean) => void; label: string; sub?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div>
        <p style={{ fontSize: 13, fontWeight: 500, color: "#ECEBE4", fontFamily: "DM Sans, sans-serif" }}>{label}</p>
        {sub && <p style={{ fontSize: 11, color: "#666", marginTop: 2, fontFamily: "DM Sans, sans-serif" }}>{sub}</p>}
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{
          width: 44, height: 24, borderRadius: 12, border: "none",
          background: checked ? "#20B2B2" : "rgba(255,255,255,0.1)",
          position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0, marginLeft: 16,
        }}
      >
        <span style={{
          position: "absolute", top: 3, left: checked ? 23 : 3, width: 18, height: 18,
          borderRadius: "50%", background: "#fff", transition: "left 0.2s",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }} />
      </button>
    </div>
  );
}

function SettingInput({ label, value, onChange, type = "text", placeholder = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#888", marginBottom: 6, fontFamily: "DM Sans, sans-serif" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%", padding: "10px 13px", borderRadius: 8, fontSize: 13,
          background: "#0b1820", border: "1.5px solid rgba(32,178,178,0.3)",
          color: "#ECEBE4", fontFamily: "DM Sans, sans-serif", outline: "none", boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#20B2B2")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(32,178,178,0.3)")}
      />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────── */

export default function Settings() {
  const { setTheme, addToast } = useApp();

  // Account
  const [name, setName]   = useState("Raja the Great");
  const [email, setEmail] = useState("raja@mahindra.edu.in");

  // Notifications
  const [emailNotifs,    setEmailNotifs]    = useState(true);
  const [bidReminders,   setBidReminders]   = useState(true);
  const [outbidAlerts,   setOutbidAlerts]   = useState(true);
  const [winAlerts,      setWinAlerts]      = useState(true);
  const [weeklyDigest,   setWeeklyDigest]   = useState(false);

  // Accessibility
  const [fontSize,      setFontSize]       = useState<"sm" | "md" | "lg">("md");
  const [reducedMotion, setReducedMotion]  = useState(false);

  // Password
  const [currentPw,  setCurrentPw]  = useState("");
  const [newPw,      setNewPw]      = useState("");
  const [confirmPw,  setConfirmPw]  = useState("");

  const THEME_OPTIONS: { value: Theme | "system"; label: string; icon: string; desc: string }[] = [
    { value: "dark",   label: "Dark",   icon: "🌙", desc: "Dark background, easy on the eyes" },
    { value: "light",  label: "Light",  icon: "☀️", desc: "Light background, high contrast" },
    { value: "system", label: "System", icon: "💻", desc: "Follows your OS preference" },
  ];

  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light" | "system">("dark");

  const handleThemeChange = (t: "dark" | "light" | "system") => {
    setSelectedTheme(t);
    if (t !== "system") setTheme(t);
    addToast(`Theme changed to ${t}`, "info");
  };

  const applyThemeOption = (value: Theme | "system") => {
    handleThemeChange(value);
  };

  const handleSaveAccount = () => {
    if (!name.trim() || !email.trim()) { addToast("Name and email are required", "error"); return; }
    addToast("Account settings saved!", "success");
  };

  const handleChangePassword = () => {
    if (!currentPw || !newPw || !confirmPw) { addToast("All password fields are required", "error"); return; }
    if (newPw !== confirmPw) { addToast("New passwords do not match", "error"); return; }
    if (newPw.length < 8) { addToast("Password must be at least 8 characters", "error"); return; }
    addToast("Password updated successfully!", "success");
    setCurrentPw(""); setNewPw(""); setConfirmPw("");
  };

  const handleLogout = () => {
    addToast("Logged out successfully. See you soon!", "info");
    setTimeout(() => window.location.href = "/login", 1200);
  };

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-10 lg:px-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <section className="space-y-6">
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#ECEBE4", marginBottom: 4 }}>Settings</h1>
          <p style={{ color: "#888", fontSize: 14 }}>Customize your UniAuction experience</p>
        </section>

        <Section title="Appearance" icon="🎨">
          <p style={{ fontSize: 12, color: "#888", marginBottom: 14 }}>Choose how UniAuction looks on your device</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {THEME_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => applyThemeOption(opt.value)}
                style={{
                  padding: "16px 14px", borderRadius: 12, border: `2px solid ${selectedTheme === opt.value ? "#20B2B2" : "rgba(255,255,255,0.08)"}`,
                  background: selectedTheme === opt.value ? "rgba(32,178,178,0.12)" : "rgba(255,255,255,0.03)",
                  cursor: "pointer", textAlign: "left", transition: "all 0.2s", fontFamily: "DM Sans, sans-serif",
                }}
              >
                <p style={{ fontSize: 20, marginBottom: 6 }}>{opt.icon}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: selectedTheme === opt.value ? "#20B2B2" : "#ECEBE4", marginBottom: 3 }}>{opt.label}</p>
                <p style={{ fontSize: 11, color: "#666" }}>{opt.desc}</p>
              </button>
            ))}
          </div>
        </Section>

        <Section title="Account" icon="👤">
          <div className="flex items-center gap-4">
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#247B7B,#20B2B2)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#131B23",
              flexShrink: 0, border: "3px solid rgba(32,178,178,0.4)",
            }}>
              {name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <button style={{
                padding: "7px 14px", borderRadius: 8, border: "1px solid rgba(32,178,178,0.35)",
                background: "transparent", color: "#20B2B2", fontSize: 12, fontWeight: 600, cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}>
                Change Photo
              </button>
              <p style={{ fontSize: 11, color: "#555", marginTop: 5 }}>JPG, PNG or GIF · Max 2MB</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <SettingInput label="Full Name" value={name} onChange={setName} placeholder="Your name" />
            </div>
            <div>
              <SettingInput label="Email" value={email} onChange={setEmail} type="email" placeholder="you@university.edu" />
            </div>
          </div>
          <button
            onClick={handleSaveAccount}
            style={{
              padding: "9px 20px", borderRadius: 10, border: "none",
              background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
              fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
            }}
          >
            Save Account Info
          </button>
        </Section>

        <Section title="Preferences" icon="🔔">
          <section className="space-y-4">
            <p style={{ fontSize: 12, fontWeight: 600, color: "#888", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Notifications</p>
            <div className="space-y-0">
              <Toggle checked={emailNotifs}  onChange={setEmailNotifs}  label="Email Notifications"  sub="Receive updates via email" />
              <Toggle checked={bidReminders} onChange={setBidReminders} label="Auction Reminders"     sub="Get notified when an auction you bid on is ending soon" />
              <Toggle checked={outbidAlerts} onChange={setOutbidAlerts} label="Outbid Alerts"         sub="Instantly know when someone outbids you" />
              <Toggle checked={winAlerts}    onChange={setWinAlerts}    label="Win Notifications"     sub="Celebrate your auction wins" />
              <Toggle checked={weeklyDigest} onChange={setWeeklyDigest} label="Weekly Digest"         sub="Summary of activity every Monday" />
            </div>
          </section>

          <section className="space-y-4">
            <p style={{ fontSize: 12, fontWeight: 600, color: "#888", marginBottom: 8, marginTop: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>Accessibility</p>
            <div className="space-y-3 border-b py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#ECEBE4", marginBottom: 10, fontFamily: "DM Sans, sans-serif" }}>Font Size</p>
            <div className="flex gap-2">
              {([["sm", "Small", "A"], ["md", "Medium", "A"], ["lg", "Large", "A"]] as const).map(([val, , letter]) => (
                <button
                  key={val}
                  onClick={() => setFontSize(val)}
                  style={{
                    padding: "8px 16px", borderRadius: 8, cursor: "pointer",
                    border: `1.5px solid ${fontSize === val ? "#20B2B2" : "rgba(255,255,255,0.1)"}`,
                    background: fontSize === val ? "rgba(32,178,178,0.12)" : "transparent",
                    color: fontSize === val ? "#20B2B2" : "#888",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: val === "sm" ? 11 : val === "md" ? 13 : 16, fontWeight: 700,
                    transition: "all 0.15s",
                  }}
                >
                  {letter}
                </button>
              ))}
            </div>
            </div>

            <Toggle checked={reducedMotion} onChange={setReducedMotion} label="Reduce Motion" sub="Minimize animations and transitions" />
          </section>

          <button
            onClick={() => addToast("Preferences saved!", "success")}
            style={{
              marginTop: 16, padding: "9px 20px", borderRadius: 10, border: "none",
              background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
              fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
            }}
          >
            Save Preferences
          </button>
        </Section>

        <Section title="Security" icon="🔒">
          <div className="grid max-w-[420px] grid-cols-1 gap-4">
            <SettingInput label="Current Password" value={currentPw} onChange={setCurrentPw} type="password" placeholder="••••••••" />
            <SettingInput label="New Password"     value={newPw}     onChange={setNewPw}     type="password" placeholder="Min. 8 characters" />
            <SettingInput label="Confirm Password" value={confirmPw} onChange={setConfirmPw} type="password" placeholder="Repeat new password" />
          </div>
          {newPw && newPw.length < 8 && (
            <p style={{ fontSize: 11, color: "#ef4444", marginBottom: 12, fontFamily: "DM Sans, sans-serif" }}>⚠ Password must be at least 8 characters</p>
          )}
          {newPw && confirmPw && newPw !== confirmPw && (
            <p style={{ fontSize: 11, color: "#ef4444", marginBottom: 12, fontFamily: "DM Sans, sans-serif" }}>⚠ Passwords do not match</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleChangePassword}
              style={{
                padding: "9px 20px", borderRadius: 10, border: "none",
                background: "linear-gradient(135deg,#247B7B,#20B2B2)", color: "#131B23",
                fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
              }}
            >
              Update Password
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: "9px 20px", borderRadius: 10,
                border: "1px solid rgba(239,68,68,0.35)",
                background: "rgba(239,68,68,0.08)", color: "#ef4444",
                fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.08)"; }}
            >
              Log Out
            </button>
          </div>
          <div className="rounded-[10px] p-3.5" style={{ marginTop: 20, padding: "14px", borderRadius: 10, background: "rgba(32,178,178,0.06)", border: "1px solid rgba(32,178,178,0.15)" }}>
            <p style={{ fontSize: 12, color: "#888", fontFamily: "DM Sans, sans-serif" }}>
              💡 <strong style={{ color: "#20B2B2" }}>Security tip:</strong> Use a strong, unique password and never share it with anyone. Your Unicoin balance is protected by your account credentials.
            </p>
          </div>
        </Section>
      </div>
    </PageShell>
  );
}
