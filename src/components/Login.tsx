import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const isUniversityEmail = (val: string) =>
        val.endsWith("@mahindrauniversity.edu.in");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            return setError("Please fill in all fields.");
        }
        if (!isUniversityEmail(email)) {
            setError("Only university email addresses are allowed.");
            return;
        }
        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            localStorage.setItem("token", data.token);
            window.location.href = "/home";
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-screen h-screen flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: "#131B23" }}
        >
            {/* Background glows */}
            <div
                className="absolute top-[-100px] left-[-100px] w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: "#247B7B" }}
            />
            <div
                className="absolute bottom-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ backgroundColor: "#247B7B" }}
            />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `linear-gradient(#ECEBE4 1px, transparent 1px), linear-gradient(90deg, #ECEBE4 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 w-full max-w-md px-6">
                <div
                    className="rounded-2xl p-8 shadow-2xl"
                    style={{
                        backgroundColor: "rgba(236, 235, 228, 0.04)",
                        border: "1px solid rgba(236, 235, 228, 0.1)",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                                backgroundColor: "#247B7B",
                                boxShadow: "0 4px 16px rgba(36, 123, 123, 0.4)",
                            }}
                        >
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-wide" style={{ color: "#ECEBE4" }}>UniAuction</p>
                            <p className="text-xs" style={{ color: "rgba(236,235,228,0.4)" }}>Student Marketplace</p>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-1" style={{ color: "#ECEBE4" }}>Sign in</h1>
                    <p className="text-sm mb-7" style={{ color: "rgba(236,235,228,0.5)" }}>
                        Use your university credentials to access the platform.
                    </p>

                    {error && (
                        <div
                            className="flex items-center gap-2 text-sm rounded-xl px-4 py-3 mb-5"
                            style={{
                                backgroundColor: "rgba(239,68,68,0.08)",
                                border: "1px solid rgba(239,68,68,0.25)",
                                color: "#f87171",
                            }}
                        >
                            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 mb-6">

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium" style={{ color: "rgba(236,235,228,0.75)" }}>
                                    University Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. se22ucse081@mahindrauniversity.edu.in"
                                    className="text-sm rounded-xl px-4 py-2.5 outline-none transition"
                                    style={{
                                        backgroundColor: "rgba(236,235,228,0.06)",
                                        border: "1px solid rgba(236,235,228,0.12)",
                                        color: "#ECEBE4",
                                    }}
                                    onFocus={e => {
                                        e.target.style.border = "1px solid #247B7B";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(36,123,123,0.15)";
                                    }}
                                    onBlur={e => {
                                        e.target.style.border = "1px solid rgba(236,235,228,0.12)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium" style={{ color: "rgba(236,235,228,0.75)" }}>
                                        Password
                                    </label>
                                    <a href="#" className="text-xs transition" style={{ color: "#247B7B" }}>
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full text-sm rounded-xl px-4 py-2.5 pr-11 outline-none transition"
                                        style={{
                                            backgroundColor: "rgba(236,235,228,0.06)",
                                            border: "1px solid rgba(236,235,228,0.12)",
                                            color: "#ECEBE4",
                                        }}
                                        onFocus={e => {
                                            e.target.style.border = "1px solid #247B7B";
                                            e.target.style.boxShadow = "0 0 0 3px rgba(36,123,123,0.15)";
                                        }}
                                        onBlur={e => {
                                            e.target.style.border = "1px solid rgba(236,235,228,0.12)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 transition"
                                        style={{ color: "rgba(236,235,228,0.4)" }}
                                        tabIndex={-1}
                                    >
                                        {showPassword ? (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a9.95 9.95 0 015.857 1.928M15 12a3 3 0 11-4.5-2.6M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full text-sm font-semibold rounded-xl py-2.5 transition flex items-center justify-center gap-2"
                            style={{
                                backgroundColor: "#247B7B",
                                color: "#ECEBE4",
                                boxShadow: "0 4px 20px rgba(36,123,123,0.35)",
                                opacity: loading ? 0.6 : 1,
                                cursor: loading ? "not-allowed" : "pointer",
                            }}
                            onMouseEnter={e => {
                                if (!loading) (e.target as HTMLButtonElement).style.backgroundColor = "#2d9494";
                            }}
                            onMouseLeave={e => {
                                (e.target as HTMLButtonElement).style.backgroundColor = "#247B7B";
                            }}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <p className="text-center text-sm mt-5" style={{ color: "rgba(236,235,228,0.4)" }}>
                        New student?{" "}
                        <Link to="/register" className="font-medium transition" style={{ color: "#247B7B" }}>
                            Create an account
                        </Link>
                    </p>
                </div>

                <p className="text-center text-xs mt-4" style={{ color: "rgba(236,235,228,0.2)" }}>
                    Access restricted to verified university students only.
                </p>
            </div>
        </div>
    );
}