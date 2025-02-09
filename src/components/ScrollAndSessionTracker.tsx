// src/components/ScrollAndSessionTracker.tsx

'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Function to detect device type
const getDeviceType = () => {
  const ua = navigator.userAgent;
  return /tablet|ipad|playbook|silk/i.test(ua) ? 'Tablet' :
         /Mobile|Android|iP(hone|od)/i.test(ua) ? 'Mobile' : 'Desktop';
};

// Function to detect operating system
const getos = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'Windows';
  if (ua.includes('mac')) return 'MacOS';
  if (ua.includes('linux')) return 'Linux';
  if (ua.includes('android')) return 'Android';
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) return 'iOS';
  return 'Unknown';
};

// Function to detect browser
const getBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('chrome') && !ua.includes('edg') ? 'Chrome' :
         ua.includes('firefox') ? 'Firefox' :
         ua.includes('safari') && !ua.includes('chrome') ? 'Safari' :
         ua.includes('edg') ? 'Edge' : 'Unknown';
};

const ScrollAndSessionTracker: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname.includes('/admin/')) {
      return;
    }
    let scrollPercentages: number[] = [];
    const startTimestamp = new Date().toISOString();
    const sessionId = Math.random().toString(36).substring(2, 15);

    // Track scrolling activity
    const trackScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((window.scrollY / totalHeight) * 100);
      scrollPercentages.push(scrollPercentage);
    };

    const intervalId = setInterval(trackScroll, 1000);

    // Send session data on exit
    const sendData = async (event: string) => {
      const params: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      const data = {
        event,
        sessionId,
        startTimestamp,
        endTimestamp: new Date().toISOString(),
        sessionLengthSeconds: scrollPercentages.length,
        scrolls: scrollPercentages,
        deviceType: getDeviceType(),
        os: getos(),
        browser: getBrowser(),
        urlPath: pathname,
        queryParams: params,
      };

      navigator.sendBeacon('/api/trackSession', JSON.stringify(data));
    };

    window.addEventListener('beforeunload', () => sendData('exit'));

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('beforeunload', () => sendData('exit'));
    };
  }, [pathname, searchParams]);

  return null;
};

export default ScrollAndSessionTracker;
