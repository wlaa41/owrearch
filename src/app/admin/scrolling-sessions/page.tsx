"use client";

import React, { useEffect, useState, lazy, Suspense, useCallback } from 'react';


export const dynamic = 'force-dynamic'

const Plot = lazy(() => import('react-plotly.js'));

interface Session {
  _id: string;
  event: string;
  sessionId: string;
  startTimestamp: string;
  endTimestamp: string;
  sessionLengthSeconds: number;
  scrolls: number[];
  deviceType: string;
  os: string;
  browser: string;
  urlPath: string;
  queryParams: Record<string, string>;
  ip: string;
}

const ScrollingSessionsPage: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSessions = useCallback(async () => {
    setLoading(true);
    const response = await fetch('/api/getScrollingSessions');
    const data: Session[] = await response.json();

    data.sort((a, b) => new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime());
    setSessions(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const handleRefresh = () => {
    fetchSessions();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Scrolling Sessions Data: {' '}{sessions.length}{' '}Entries</h1>
      <button onClick={handleRefresh} className="btn btn-primary mb-3">Refresh Data</button>
      {sessions.length === 0 ? (
        <p>No sessions data found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Session ID</th>
              <th>Event</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Duration (s)</th>
              <th>Scrolls</th>
              <th>Device</th>
              <th>OS</th>
              <th>Browser</th>
              <th>URL Path</th>
              <th>IP</th>
              <th>Query Params</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session._id}>
                <td>{session.sessionId}</td>
                <td>{session.event}</td>
                <td>{new Date(session.startTimestamp).toLocaleString()}</td>
                <td>{new Date(session.endTimestamp).toLocaleString()}</td>
                <td>{session.sessionLengthSeconds}</td>
                <td>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <Plot
                      data={[
                        {
                          x: session.scrolls,
                          type: 'histogram',
                          marker: { color: 'blue' },
                        },
                      ]}
                      layout={{
                        width: 400,
                        height: 250,
                        title: 'Scrolls Histogram',
                        xaxis: { title: 'Scroll Values (0-100)', range: [0, 100] },
                        yaxis: { title: 'Occurrences' },
                      }}
                    />
                  </Suspense>
                </td>
                <td>{session.deviceType}</td>
                <td>{session.os}</td>
                <td>{session.browser}</td>
                <td>{session.urlPath}</td>
                <td>{session.ip}</td>
                <td>
                  {Object.entries(session.queryParams).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScrollingSessionsPage;
