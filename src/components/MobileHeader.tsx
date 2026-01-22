'use client';

import { useSidebar } from './SidebarContext';

export default function MobileHeader() {
  const { toggleMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-30 md:hidden bg-card border-b border-subtle px-4 py-3 flex items-center justify-between">
      <button
        onClick={toggleMobile}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-card-hover text-muted hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 className="text-lg font-semibold">Vidy</h1>
      <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light" />
      </div>
    </header>
  );
}
