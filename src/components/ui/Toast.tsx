/**
 * Toast - Global floating notification toasts
 */

import { useApp } from "../../context/AppContext";

const TYPE_STYLES = {
  success: { bg: "#0F2A1A", border: "rgba(34,197,94,0.4)", icon: "✓", color: "#22c55e" },
  error:   { bg: "#2A0F0F", border: "rgba(239,68,68,0.4)",  icon: "✕", color: "#ef4444" },
  warning: { bg: "#2A1F0F", border: "rgba(245,158,11,0.4)", icon: "⚠", color: "#f59e0b" },
  info:    { bg: "#0F1F2A", border: "rgba(32,178,178,0.4)", icon: "ℹ", color: "#20B2B2" },
};

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
      }}
    >
      {toasts.map((toast) => {
        const s = TYPE_STYLES[toast.type];
        return (
          <div
            key={toast.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: s.bg,
              border: `1px solid ${s.border}`,
              borderRadius: 10,
              padding: "10px 14px",
              minWidth: 240,
              maxWidth: 340,
              pointerEvents: "auto",
              animation: "slideIn 0.25s ease",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            <span style={{ color: s.color, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
              {s.icon}
            </span>
            <span style={{ color: "#ECEBE4", fontSize: 13, flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ color: "#666", background: "none", border: "none", cursor: "pointer", fontSize: 16, lineHeight: 1, flexShrink: 0 }}
            >
              ×
            </button>
          </div>
        );
      })}
      <style>{`@keyframes slideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}