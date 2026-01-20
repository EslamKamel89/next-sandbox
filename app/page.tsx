import CustomButton from "@/components/CustomButton";

export default function Home() {
  const secret = process.env.SECRET;
  console.log(secret);
  return (
    <div>
      <main>hello from the server</main>
      <CustomButton />
    </div>
  );
}
