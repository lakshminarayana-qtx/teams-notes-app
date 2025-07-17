import React, { useState } from 'react';
import { GEMINI_API_KEY } from '../config.js';

const defaultPrompts = {
  mom: "Generate MoM from the transcript :",
  actionItems: "List action items from the transcript :",
  summary: "Summarize the meeting in 3 bullets :",
  notes: "Extract key notes from this meeting transcript :",
};

export default function App() {
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState('');
  const [template, setTemplate] = useState(defaultPrompts.mom);

  async function generate() {
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: template + "\n" + transcript }] }] })
    });
    const data = await res.json();
    setResult(data.candidates?.[0]?.content?.parts?.[0]?.text || 'No result');
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-2">Teams MoM Generator</h1>
      <select onChange={e => setTemplate(e.target.value)} className="border p-2 mb-2 w-full">
        {Object.entries(defaultPrompts).map(([k, v]) => (
          <option key={k} value={v}>{k}</option>
        ))}
      </select>
      <textarea placeholder="Paste transcript here..." className="border p-2 w-full h-40" value={transcript} onChange={e => setTranscript(e.target.value)} />
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" onClick={generate}>Generate</button>
      <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-2 rounded">{result}</div>
    </div>
  );
}
