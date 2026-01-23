import CustomButton from "@/components/CustomButton";

export default function Home() {
  const secret = process.env.SECRET;
  console.log(secret);
  const sayHello = () => {
    console.log("Hello");
  };
  sayHello();
  return (
    <div>
      <main>hello from the server</main>
      <CustomButton />
    </div>
  );
}
