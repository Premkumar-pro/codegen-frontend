import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GitHubCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      (async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/api/github-login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ code }),
          });
          const data = await res.json();
          if (res.ok) {
            navigate('/dashboard');
          } else {
            alert(data.error || 'GitHub login failed');
            navigate('/login');
          }
        } catch (err) {
          alert('Network error during GitHub login');
          navigate('/login');
        }
      })();
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <p>Processing GitHub login...</p>;
}
