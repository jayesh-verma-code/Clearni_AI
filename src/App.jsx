import Home from "./components/Home";
import { Sparkles, Zap, Crown, Cpu } from "lucide-react";
// App.js
const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden text-white">
            {/* Background Effects of hero section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_50%)] absolute inset-0" />
                <div className="bg-[radial-gradient(circle_at_80%_70%,rgba(217,119,6,0.06),transparent_50%)] absolute inset-0" />
                <div className="bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.04),transparent_70%)] absolute inset-0" />
                <div className="bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:60px_60px] mask-image-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)] animate-pulse absolute inset-0" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[["top-20", "right-20", "w-80", "h-80"], ["top-32", "right-32", "w-56", "h-56"], ["bottom-20", "left-20", "w-72", "h-72"]].map(([top, side, w, h], i) => (
                    <div key={i} className={`absolute ${top} ${side} ${w} ${h} border border-amber-500/10 rounded-full animate-spin-slow`} style={{ animationDuration: `${30 + i * 15}s`, animationDirection: i % 2 ? 'reverse' : 'normal' }} />
                ))}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent rotate-12" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/15 to-transparent -rotate-12" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { top: "top-[16%]", left: "left-[16%]", size: "w-3 h-3" },
                    { top: "top-[33%]", right: "right-[20%]", size: "w-2 h-2", delay: "1s", duration: "4s" },
                    { top: "top-[66%]", left: "left-[25%]", size: "w-2.5 h-2.5", delay: "2s", duration: "5s" },
                    { top: "top-[83%]", right: "right-[33%]", size: "w-1.5 h-1.5", delay: "3s", duration: "6s" }
                ].map((p, i) => (
                    <div
                        key={i}
                        className={`absolute ${p.top} ${p.left || p.right} ${p.size} bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-float`}
                        style={{ animationDelay: p.delay, animationDuration: p.duration }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
                {/* Logo */}
                <div className="mb-16 animate-fade-in-elegant">
                    <div className="relative inline-flex items-center justify-center w-32 h-32 mb-10 rounded-3xl border-2 border-amber-500/30 bg-gradient-to-br from-gray-800/80 via-gray-700/60 to-gray-800/80 shadow-2xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-700 hover:scale-105 backdrop-blur-xl group">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/15 group-hover:to-orange-500/15 transition-all duration-700" />
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl flex items-center justify-center relative z-10 shadow-inner">
                            <Sparkles className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-xl scale-110 opacity-50 group-hover:opacity-75 transition-all duration-700" />
                    </div>

                    <h1 className="text-7xl font-extralight tracking-tight bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent mb-6 relative">
                        Cleari AI
                        <span className="absolute inset-0 text-7xl text-amber-500/10 blur-2xl">Cleari AI</span>
                    </h1>

                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 shadow-sm shadow-amber-400/50" />

                    <p className="text-lg max-w-3xl mx-auto font-light text-gray-300">
                        AI-powered image enhancement platform tailored for professional creatives 
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        {[{ Icon: Zap, label: "Lightning Fast" }, { Icon: Cpu, label: "AI Enhanced" }, { Icon: Crown, label: "Premium Quality" }].map(({ Icon, label }, i) => (
                            <div key={i} className="flex items-center space-x-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl shadow-lg shadow-black/20 hover:shadow-amber-500/10 hover:bg-white/10 backdrop-blur-xl transition duration-500 group">
                                <Icon className="w-6 h-6 text-amber-400 group-hover:text-amber-300" strokeWidth={2} />
                                <span className="text-gray-200 group-hover:text-white font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Home Component Card */}
                <section className="w-full max-w-6xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-3xl shadow-xl shadow-black/30 overflow-hidden backdrop-blur-2xl">
                        <div className="p-10">
                            <Home />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-20 animate-fade-in-elegant">
                    <div className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 rounded-full shadow-md shadow-black/20 hover:shadow-amber-500/20 hover:bg-white/10 backdrop-blur-2xl transition-all duration-500">
                        <span className="text-gray-400 mr-3">Developed by</span> 
                        <span className="font-semibold text-xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"><a target="main" href="https://www.linkedin.com/in/jayesh-verma-connect459/">Jayesh [NIT R]</a></span>
                        <span className="ml-3 w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse shadow shadow-amber-400/40" />
                    </div>
                </footer>
            </main>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

                * {
                    font-family: 'Inter', sans-serif;
                }

                @keyframes fade-in-elegant {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-20px) rotate(120deg);
                    }
                    66% {
                        transform: translateY(10px) rotate(240deg);
                    }
                }

                .animate-fade-in-elegant {
                    animation: fade-in-elegant 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }

                .animate-spin-slow {
                    animation: spin-slow 40s linear infinite;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default App;
