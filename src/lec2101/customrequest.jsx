import { useState, useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 5000);
  });
}
function NewComponent1() {
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");
  useEffect(() => {
    const promise = fetchUser().then((var1) => {
      setId(var1.id);
      setName(var1.name);
    });
    return () => {
      promise.cancel();
    };
  });
  return (
    <div>
      User ID: {id}, <br />
      Name: {name}
    </div>
  );
}
export default NewComponent1;

// 1. Create carousel (image changer)
// using useeffect. Place 4 images
// in public directory and
// chnage image at interval of 4
// seconds

// 2. Implement count down timer
// using useEffect 5:00 4:59 4:00
// 3:59 3:00
