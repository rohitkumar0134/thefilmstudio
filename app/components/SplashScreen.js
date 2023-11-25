import Image from "next/image";
import anime from "animejs"
import { useEffect, useState } from "react";


const SplashScreen = ({finishLoading}) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.15,
        duration: 500,
        easing: "easeInOutExpo",
      }).add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 50,
        duration: 500,
        easing: "easeInOutExpo",
      });
  }
 
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="splash-screen bg-white h-screen flex justify-center items-center flex-col gap-10">
      <img id="logo" src={"https://i.ibb.co/P5L7r9J/TFM-logo-White-potrait-3x.jpg"}
       alt="logo" className="h-32 w-32" />
      <div>
        <p className="md:text-xl text-7xl font-bold mx-2 text-blackß">
          Loading...
        </p>
        {/* <p className="text-black text-center">
          Delivering health to your doorstep.
        </p> */}
      </div>
    </div>
  );
};

export default SplashScreen;