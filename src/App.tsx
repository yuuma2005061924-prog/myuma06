import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">TODOアプリ</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2"
        placeholder="タスクを入力"
      />
      <p className="mt-4">入力中の文字: {text}</p>
    </div>
  );
}

export default App;
