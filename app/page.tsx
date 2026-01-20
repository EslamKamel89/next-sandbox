"use client";
export default function Home() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <main>hello from the server</main>
      <button onClick={handleClick}>Click Me!!!</button>
    </div>
  );
}
