export default function Home() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Good evening</h1>
        <p className="text-muted">Let&apos;s take a look at how today went.</p>
      </div>

      {/* Progress Card */}
      <div className="bg-card rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
        <div className="text-center mb-6">
          {/* Decorative icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <p className="text-muted mb-2">Tasks completed</p>
          {/* Progress bar */}
          <div className="w-full max-w-xs mx-auto h-2 bg-subtle rounded-full overflow-hidden mb-3">
            <div className="h-full w-4/5 bg-gradient-to-r from-accent to-accent-light rounded-full" />
          </div>
          <p className="text-2xl font-semibold">
            <span className="text-accent-light">4</span>
            <span className="text-muted">/5</span>
          </p>
        </div>

        <div className="border-t border-subtle pt-4 md:pt-6">
          <h3 className="text-center text-muted mb-4">Task breakdown</h3>
          <div className="space-y-2 md:space-y-3">
            <div className="flex justify-between items-center bg-card-hover rounded-xl px-4 py-3">
              <span>Focus Time</span>
              <span className="text-muted">2</span>
            </div>
            <div className="flex justify-between items-center bg-card-hover rounded-xl px-4 py-3">
              <span>Learning</span>
              <span className="text-muted">1</span>
            </div>
            <div className="flex justify-between items-center bg-card-hover rounded-xl px-4 py-3">
              <span>Wellness</span>
              <span className="text-muted">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="bg-card rounded-2xl p-4 md:p-6">
          <h3 className="font-medium mb-1">Duration</h3>
          <div className="w-full h-px bg-subtle mb-3" />
          <p className="text-muted text-sm">No updates on your activity.</p>
        </div>
        <div className="bg-card rounded-2xl p-4 md:p-6">
          <h3 className="font-medium mb-1">Quality</h3>
          <div className="w-full h-px bg-subtle mb-3" />
          <p className="text-muted text-sm">No updates on your progress.</p>
        </div>
      </div>

      {/* Check-in Card */}
      <div className="bg-card rounded-2xl p-4 md:p-6">
        <h3 className="font-medium mb-1">Check-In</h3>
        <p className="text-2xl font-semibold mb-4">Good</p>

        {/* Week days */}
        <div className="flex justify-between mb-6 overflow-x-auto">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-2 min-w-[40px]">
              <span className="text-xs text-muted">{day}</span>
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                i >= 3 && i <= 5
                  ? 'bg-gradient-to-br from-pink-500/30 to-blue-500/30 ring-2 ring-accent/50'
                  : 'bg-card-hover'
              }`}>
                {i >= 3 && i <= 5 && (
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-pink-400 to-blue-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <h4 className="text-sm text-muted mb-3">What helped you today?</h4>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Focus music', count: 1 },
            { label: 'No distractions', count: 1 },
            { label: 'Exercise', count: 1 },
            { label: 'Good sleep', count: 2 },
            { label: 'Planning', count: 2 },
            { label: 'Breaks', count: 1 },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-card-hover rounded-full text-sm"
            >
              {tag.label}
              <span className="text-muted">{tag.count}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
