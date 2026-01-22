export default function Record() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Record</h1>
        <p className="text-muted">Capture your thoughts and moments.</p>
      </div>

      {/* Record button card */}
      <div className="bg-card rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center">
        <button className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 transition-all duration-200 flex items-center justify-center shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white" />
        </button>
        <p className="mt-6 text-muted">Tap to start recording</p>
      </div>
    </div>
  );
}
