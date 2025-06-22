'use client';

import { STARTUPS_DATA, FOUNDER_DATA } from '@/constants';
import StartupDetailPage from '@/components/startup/StartupDetailPage';
import ModernLayout from '@/components/layout/ModernLayout';

export default function CreaovateDetailPage() {
  const startup = STARTUPS_DATA.find(s => s.name === 'Creaovate');
  
  if (!startup) {
    return <div>Startup not found</div>;
  }

  return (
    <ModernLayout founder={FOUNDER_DATA}>
      <StartupDetailPage startup={startup} />
    </ModernLayout>
  );
}
