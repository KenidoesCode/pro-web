export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/30 rounded-full animate-float-slower" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-cyan-400/20 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-float-slower" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-cyan-400/25 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
