// src/app/visits/page.tsx

"use client";

import React, { useEffect, useState, lazy, Suspense } from 'react';

export const dynamic = 'force-dynamic'

interface Visit {
  _id: string;
  fullAddress: string;
  city: string;
  postcode: string;
  road: string;
  area: string;
  ip: string;
  time: string;
  query: Record<string, string>;
}

const VisitsPage: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchVisits = async () => {
    setLoading(true);
    const response = await fetch('/api/getVisitsGPS');
    const data: Visit[] = await response.json();
    data.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    setVisits(data);
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
      <h1>Visit Data: {' '}{visits.length}{' '}Entries</h1>
      <button onClick={handleRefresh} className="btn btn-primary mb-3">Refresh Data</button>
      {visits.length === 0 ? (
        <p>No visits data found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>query</th>
              <th>IP</th>
              <th>postcode</th>
              <th>Time</th>
              <th>area</th>
              <th>road</th>
              <th>city</th>
              <th>fullAddress</th>
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
                <td>{visit.postcode}</td>
                <td>{new Date(visit.time).toLocaleString()}</td>
                <td>{visit.area}</td>
                <td>{visit.road}</td>
                <td>{visit.city}</td>
                <td>{visit.fullAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VisitsPage;
