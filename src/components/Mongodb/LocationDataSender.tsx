// // components/LocationDataSender.tsx
// import { useEffect } from 'react';

// const LocationDataSender = () => {
//   useEffect(() => {
//     const fetchDataAndSend = async () => {
//       try {
//         const response = await fetch('http://ip-api.com/json/');
//         const ipInfo = await response.json();
//         const location = `${ipInfo.city}, ${ipInfo.regionName}`;

//         const currentTime = new Date().toISOString();
//         const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
//         const browserName = navigator.userAgentData?.brands?.[0]?.brand || 'Unknown';
//         const osInfo = navigator.userAgentData?.platform || 'Unknown';

//         await fetch('/api/postVisitWithGPS', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             urlPath: window.location.pathname,
//             time: currentTime,
//             device: deviceType,
//             browser: browserName,
//             os: osInfo,
//             location
//           }),
//         });
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchDataAndSend();
//   }, []);

//   return null; // This component does not render anything
// };

// export default LocationDataSender;
