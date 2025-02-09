// // src/components/ServerSideSaveQueryParamsVisitors.tsx
// 'use client'

// import { useEffect, useRef } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';

// const ServerSideSaveQueryParamsVisitors: React.FC = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       const saveData = async () => {
//         const params: Record<string, string> = {};
//         searchParams.forEach((value, key) => {
//           params[key] = value;
//         });

//         try {
//           const response = await fetch('/api/postVisitWithGPS', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               query: params,
//               urlPath: pathname,
//             }),
//           });

//           if (!response.ok) {
//             console.error('Error:', response.statusText);
//           } else {
//             const result = await response.json();
//             console.log(result);
//           }
//         } catch (error) {
//           console.error('Fetch error:', error);
//         }
//       };

//       saveData();
//     }, 500); // Adjust the debounce delay as needed

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [pathname, searchParams]);

//   return null;
// };

// export default ServerSideSaveQueryParamsVisitors;
