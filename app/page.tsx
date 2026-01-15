export default function Home() {
  const secret = process.env.SECRET;
  console.log("where i am running?!!!");
  console.log(`Mode: ${secret}`);
  return (
    <div>
      <main>hello from the server</main>
    </div>
  );
}
