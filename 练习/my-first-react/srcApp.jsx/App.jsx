import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>加一</button>
      <button onClick={() => setCount(count - 1)}>减一</button>
      <button onClick={() => setCount(0)}>归零</button>
    </div>
  );
}