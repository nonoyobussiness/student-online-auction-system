import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return "Something went wrong. Please try again.";
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        studentId: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isUniversityEmail = (val: string) =>
        val.endsWith("@mahindrauniversity.edu.in");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (!form.fullName || !form.studentId || !form.email || !form.password || !form.confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (!isUniversityEmail(form.email)) {
            setError("Only university email addresses are allowed.");
            return;
        }
        if (form.password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: form.fullName,
                    studentId: form.studentId,
                    email: form.email,
                    password: form.password,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            alert("Account created successfully!");
            navigate("/login");
        } catch (err: unknown) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        backgroundColor: "rgba(236,235,228,0.06)",
        border: "1px solid rgba(236,235,228,0.12)",
        color: "#ECEBE4",
    };

    const focusHandlers = {
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
            e.target.style.border = "1px solid #247B7B";
            e.target.style.boxShadow = "0 0 0 3px rgba(36,123,123,0.15)";
        },
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            e.target.style.border = "1px solid rgba(236,235,228,0.12)";
            e.target.style.boxShadow = "none";
        },
    };

    const fields: {
        label: string;
        name: keyof typeof form;
        type: string;
        placeholder: string;
        hint?: string;
    }[] = [
        { label: "Full Name", name: "fullName", type: "text", placeholder: "Raju Kothapally" },
        { label: "Student ID", name: "studentId", type: "text", placeholder: "e.g. SE22UCSE081" },
        {
            label: "University Email",
            name: "email",
            type: "email",
            placeholder: "e.g. se22ucse081@mahindrauniversity.edu.in",
            hint: "Must be your official university email",
        },
    ];

    return (
        <div
            className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden py-10"
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
                            className="w-9 h-9 rounded-xl flex items-center justify-center"
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

                    <h1 className="text-2xl font-bold mb-1" style={{ color: "#ECEBE4" }}>Create account</h1>
                    <p className="text-sm mb-7" style={{ color: "rgba(236,235,228,0.5)" }}>
                        Register with your university credentials to start bidding.
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

                            {fields.map(({ label, name, type, placeholder, hint }) => (
                                <div key={name} className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium" style={{ color: "rgba(236,235,228,0.75)" }}>
                                        {label}
                                    </label>
                                    <input
                                        type={type}
                                        name={name}
                                        value={form[name]}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        className="text-sm rounded-xl px-4 py-2.5 outline-none transition"
                                        style={{ ...inputStyle }}
                                        {...focusHandlers}
                                    />
                                    {hint && (
                                        <p className="text-xs" style={{ color: "rgba(236,235,228,0.3)" }}>
                                            {hint}
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium" style={{ color: "rgba(236,235,228,0.75)" }}>
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Min. 8 characters"
                                        className="w-full text-sm rounded-xl px-4 py-2.5 pr-11 outline-none transition"
                                        style={{ ...inputStyle }}
                                        {...focusHandlers}
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

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium" style={{ color: "rgba(236,235,228,0.75)" }}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    className="text-sm rounded-xl px-4 py-2.5 outline-none transition"
                                    style={{
                                        backgroundColor: "rgba(236,235,228,0.06)",
                                        border:
                                            form.confirmPassword && form.confirmPassword !== form.password
                                                ? "1px solid rgba(239,68,68,0.5)"
                                                : "1px solid rgba(236,235,228,0.12)",
                                        color: "#ECEBE4",
                                    }}
                                    onFocus={(e) => {
                                        if (!(form.confirmPassword && form.confirmPassword !== form.password)) {
                                            e.target.style.border = "1px solid #247B7B";
                                            e.target.style.boxShadow = "0 0 0 3px rgba(36,123,123,0.15)";
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.border =
                                            form.confirmPassword && form.confirmPassword !== form.password
                                                ? "1px solid rgba(239,68,68,0.5)"
                                                : "1px solid rgba(236,235,228,0.12)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                                {form.confirmPassword && form.confirmPassword !== form.password && (
                                    <p className="text-xs" style={{ color: "#f87171" }}>
                                        Passwords do not match
                                    </p>
                                )}
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
                                if (!loading) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2d9494";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#247B7B";
                            }}
                        >
                            {loading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Creating account...
                                </>
                            ) : (
                                "Create account"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm mt-5" style={{ color: "rgba(236,235,228,0.4)" }}>
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium transition" style={{ color: "#247B7B" }}>
                            Sign in
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
