"use client";
const CustomButton = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return <button onClick={handleClick}>Click Me!!!</button>;
};

export default CustomButton;
