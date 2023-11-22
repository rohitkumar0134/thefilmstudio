import React from "react";

const Service = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black">
      <div className="">
        <div className="flex flex-wrap text-gray-300 ">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[4rem]">
      <div className="w-full  px-[2.5rem]">
        {/* about cards */}
        <div className="about-cards flex gap-10 flex-col md:flex-row">
          <ServiceCard />
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};

// export default Service;

const ServiceCard = ({ icon, title, details }) => {
  // Card data
 const cardList = [
  {
    img: "https://i.imgur.com/w5HYiQZ.png",
    title: "Growth",
    description:
      " with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.Our group of specialists will collaborate with you to develop aOur group of specialists will collaborate with you to develop aOur group of specialists will collaborate with you to develop a",
  },
  {
    img: "https://i.imgur.com/4wouHGC.png",
    title: "Fitness",
    description:
      "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
  },
  {
    img: "https://i.imgur.com/UdPvj8T.png",
    title: "Diet",
    description:
      "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  },
];
  return (
    <>
       {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
        >
          <img src={card.img} alt="box_img" className="w-[75px] mb-4" />
          <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default Service;