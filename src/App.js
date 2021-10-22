import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
  
    (async function () {
      console.log("tt")
      const { text } = await( await fetch(`/api/message`)).json();
      console.log(text)
      setData(text);
    })();
  },[]);
  console.log("aabb",data)
  return (
    <div>SSSSSSSSSS {data}</div>
  );
}

export default App;
