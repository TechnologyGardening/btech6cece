// 1. implement image changer (carousel)
//    take 4 images, replace image at interval of 4 seconds

// 2. implment count down timer using useEffect
//    start 04:00 03:59 03:00 02:59 00:00
import { useState, useEffect } from "react";
function Exercise1() {
  const arr1 = [
    "../../public/1.jpeg",
    "../../public/2.jpeg",
    "../../public/3.jpg",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setIndex((index + 1) % arr1.length);
    }, 4000);
  });
  return (
    <div>
      <img src={arr1[index]} alt="carousel" height={200} width={200} />
    </div>
  );
}
export default Exercise1;
