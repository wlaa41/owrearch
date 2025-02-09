// src/app/visits/page.tsx

"use client";

export const dynamic = 'force-dynamic'

import React, { useEffect, useState, lazy, Suspense } from 'react';

interface Visit {
  _id: string;
  name: string;
  ip: string;
  urlPath: string;
  time: string;
  device: string;
  browser: string;
  os: string;
  loc: string;
  query: Record<string, string>;
}

const VisitsPage: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchVisits = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/getVisits', { cache: 'no-store' });
      const data: Visit[] = await response.json();
      data.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
      setVisits(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  const handleRefresh = () => {
    fetchVisits();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Visit Data: {" "}{visits.length}{" "} Entries </h1>
      <button onClick={handleRefresh} className="btn btn-primary mb-3">Refresh Data</button>
      {visits.length === 0 ? (
        <p>No visits data found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>query</th>
              <th>IP</th>
              <th>location</th>
              <th>URL Path</th>
              <th>Time</th>
              <th>Device</th>
              <th>Browser</th>
              <th>os</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit._id}>
              <td>
                  {Object.entries(visit.query).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </td>
                <td>{visit.ip}</td>
                <td>{visit.loc}</td>
                <td>{visit.urlPath}</td>
                <td>{new Date(visit.time).toLocaleString()}</td>
                <td>{visit.device}</td>
                <td>{visit.browser}</td>
                <td>{visit.os}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VisitsPage;
