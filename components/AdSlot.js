import { useEffect } from 'react';

export default function AdSlot({ slot = 'YOUR-AD-SLOT-ID', label = 'Sponsored' }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {}
  }, []);

  return (
    <div className="my-6" role="region" aria-label={label}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 112 }}
        data-ad-client="ca-pub-YOUR-ADSENSE-PUB-ID"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}