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

    const handleSubmit = () => {
        setError("");
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        if (!isUniversityEmail(email)) {
            setError("Only university email addresses are allowed.");
            return;
        }
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">

            <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-sky-500 opacity-15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-md px-6">
                <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-8 shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold leading-none">UniAuction</p>
                        </div>
                    </div>
                <h1 className="text-2xl font-bold text-white mb-1">Sign in</h1>
                <p className="text-slate-400 text-sm mb-7">Use your university credentials to access the platform.</p>

                {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    {error}
                    </div>
                )}
                <div className="flex flex-col gap-4 mb-6">

                    <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-300">University Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="se24ucseXXX@mahindrauniversity.edu.in"
                        className="bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-4 py-2.5 outline-none placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                    />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-slate-300">Password</label>
                            <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-4 py-2.5 pr-11 outline-none placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
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
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl py-2.5 transition shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                    {loading ? (
                    <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Signing in...
                    </>
                    ) : "Sign in"}
                </button>

                <p className="text-center text-sm text-slate-500 mt-5">
                    New student?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-400 hover:text-indigo-300 transition font-medium">
                        Create an account
                    </Link>
                </p>
                </div>

                    <p className="text-center text-xs text-slate-600 mt-4">
                        Access restricted to verified university students only.
                    </p>
            </div>
        </div>
    );
    }