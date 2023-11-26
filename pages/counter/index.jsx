import { useState, useEffect } from "react";

// let counter = 0;

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Sayfa Yüklendi...!");
  }, []);

  useEffect(() => {
    alert("Sayaç Değişti.....!");
  }, [counter]);

  const arttir = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Counter page</h2>
      <b>Sayaç:{counter} </b>

      <button
        className="bg-blue-600 rounded px-2 py-3"
        onClick={() => {
          arttir();
        }}
      >
        Artır
      </button>

      <button
        className="bg-red-600 rounded px-2 py-3"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Azalt
      </button>
    </>
  );
}
