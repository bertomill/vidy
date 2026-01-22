'use client';

import { useSidebar } from './SidebarContext';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={`
        min-h-screen bg-bg transition-all duration-300 ease-in-out
        md:ml-64 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}
      `}
    >
      {children}
    </main>
  );
}
