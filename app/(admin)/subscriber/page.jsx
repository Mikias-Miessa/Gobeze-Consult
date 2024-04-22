'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const response = await axios.get('/api/emails');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    }

    fetchEmails();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold ">Subscribers Email</h1>
      <ul>
        {emails.map((email) => (
          <li key={email._id}>{email.email}</li>
        ))}
      </ul>
      <div>Subscribers</div>
    </div>
  );
};

export default DashboardPage;
