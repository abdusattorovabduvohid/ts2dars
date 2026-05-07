"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="app-shell">
      <div className="section-head">
        <span className="status-pill status-pill--client">CSR</span>
        <h1 className="section-title">User Directory</h1>
        <p className="section-copy">Client-side data with hover-ready controls.</p>
      </div>

      {loading && (
        <div className="loader-wrap">
          <div className="loader-ring" />
        </div>
      )}

      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <div className="panel-grid">
          {users.map((user) => (
            <article key={user.id} className="user-card">
              <div className="user-title-row">
                <div className="avatar-circle">{user.name.charAt(0)}</div>
                <div>
                  <p className="user-name">{user.name}</p>
                  <p className="user-handle">@{user.username}</p>
                </div>
              </div>

              <ul className="info-list">
                <li>✉️ {user.email}</li>
                <li>📞 {user.phone}</li>
                <li>🌐 {user.website}</li>
                <li>🏙️ {user.address.city}</li>
                <li>🏢 {user.company.name}</li>
              </ul>

              <button className="action-btn action-btn--secondary">Open profile</button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
