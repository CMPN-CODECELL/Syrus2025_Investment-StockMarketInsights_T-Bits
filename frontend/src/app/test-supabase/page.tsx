'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function TestSupabase() {
  const [status, setStatus] = useState<string>('Testing connection...');

  useEffect(() => {
    async function testConnection() {
      try {
        // Simple health check
        const { data, error } = await supabase.rpc('get_status');
        
        if (error) {
          setStatus(`Connection Error: ${error.message}`);
          console.error('Supabase connection error:', error);
        } else {
          setStatus('Successfully connected to Supabase!');
          console.log('Connection successful!');
        }
      } catch (err) {
        setStatus(`Unexpected Error: ${err instanceof Error ? err.message : String(err)}`);
        console.error('Unexpected error:', err);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      <div className={`p-4 rounded ${
        status.includes('Success') ? 'bg-green-100 text-green-700' : 
        status.includes('Error') ? 'bg-red-100 text-red-700' : 
        'bg-blue-100 text-blue-700'
      }`}>
        {status}
      </div>
    </div>
  );
} 