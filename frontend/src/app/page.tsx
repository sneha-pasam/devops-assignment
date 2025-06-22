'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/message')
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <main className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Frontend - FastAPI Message</h1>
      <p className="text-lg">{message}</p>
    </main>
  );
}
