// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('song', selectedFile);
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({
          artistAddress: 'YOUR_TEST_ADDRESS'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('Upload failed');
      alert('Song uploaded successfully!');
    } catch (error) {
      alert('Upload failed');
    }
  };

  const handlePlay = async () => {
    try {
      const response = await fetch('/api/play/1', {
        method: 'POST'
      });
      
      if (!response.ok) throw new Error('Play failed');
      alert('Play recorded!');
    } catch (error) {
      alert('Play failed');
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto space-y-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            className="mb-4 block w-full"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Upload Song
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <button
            onClick={handlePlay}
            className="w-full px-4 py-2 bg-green-500 text-white rounded"
          >
            Play Song
          </button>
        </div>
      </div>
    </main>
  );
}