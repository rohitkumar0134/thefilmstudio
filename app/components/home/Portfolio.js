import { ArrowForward } from "@mui/icons-material";
import React, { useEffect } from "react";
import BeforeAfter from "../BeforeAfter";
import { useRouter } from "next/navigation";




const Portfolio = () => {
  const router=useRouter()
  useEffect(() => {
    // Load GLightbox only on the client side
    if (typeof window !== 'undefined') {
      import('glightbox').then((GLightbox) => {
        const lightboxInstance = GLightbox.default({
          selector: '.glightbox',
        });
      });
    }
  }, []);

  return (
    <section className=" pb-12  ">
      <div className="bg-[url('https://j.gifs.com/KeX0g7.gif')] bg-cover bg-center">


        <div className="flex flex-wrap  z-50">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold ">
                Portfolio
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                You dream it, We film it              </h2>
              <p className="text-base text-body-color text-gray-300">
                Step into a world where dreams take center stage and stories unfold with cinematic finesse.

              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="mx-auto w-full px-4 md:w-1/2 lg:w-1/3 rounded-md flex flex-col items-center">
            <BeforeAfter
              before={"https://i.ibb.co/SB1Yw5b/006-626120c91bc23-88f0-1.jpg"}
              after={"https://i.ibb.co/4fmct4p/006-626120c91bcd23-880.jpg"}
            />

            <p
              className="text-center text-gray-200 text-lg font-bold mt-2"
            >
              Slide to see before after
            </p>
          </div>


          <div className="mx-auto w-full p-4 md:w-1/2 lg:w-1/3 rounded-md flex flex-col items-center">
            <a href="https://www.youtube.com/watch?v=bviZnwdKCfk&ab_channel=TheFilmHouseOfficial" class="glightbox">
              <img src="https://i.ibb.co/QrMkJkd/377789794-681959780656958-6239793211952923349-n.jpg"
                alt="https://i.ibb.co/QrMkJkd/377789794-681959780656958-6239793211952923349-n.jpg"
                className="w-full rounded-lg       
  transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer mx-2"
              />
            </a>
            <p
              className="text-center text-gray-200 text-lg font-bold mt-3"
            >
              Click image to see video
            </p>
          </div>

          <div className="mx-auto w-full p-4 md:w-1/2 lg:w-1/3 rounded-md flex flex-col items-center">
            <a href="https://i.ibb.co/fkdZ76X/378063640-841419490995085-4222226732765789378-n.jpg" class="glightbox">
              <img src="https://i.ibb.co/fkdZ76X/378063640-841419490995085-4222226732765789378-n.jpg"
                alt="https://biati-digital.github.io/glightbox/demo/img/small/gm10.jpg"
                className="w-full rounded-lg       
  transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer mx-2"
              />

            </a>
            <p
              className="text-center text-gray-200 text-lg font-bold mt-3"
            >
              Click image to see video
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button 
          onClick={()=>router.push("/portfolio")}
          className="border-black border-4 m-1 p-2 md:m-3 md:p-2 rounded-lg text-center text-sm md:text-2xl font-bold text-black">
            view more
            <ArrowForward />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;


