import React, { useState } from "react";

const Service = () => {
  const cardList = [
    {
      img: "https://i.ibb.co/5jryT2P/Lovepik-com-400394223-wedding-photo-wedding-photo-1.png",
      title: "Weddings",
      description: "we paint your love story with light and emotion, transforming your special day into a timeless masterpiece.",
    backgroundImage:"https://i.ibb.co/99VVrQy/TBK-162-min.jpg"
    },
    {
      img: "https://i.ibb.co/XkndXjz/olhretric56m938tp80k38ibk0.png",
      title: "Commercials",
      description: "In the world of commercials, we craft narratives that not only sell products but also leave lasting impressions in hearts and minds."
    },
    {
      img: "https://i.ibb.co/30btg0j/24176934-removebg-preview.png",
      title: "Fashion",
      description: "Elevate your style with our fashion shoot. Vibrant colors, diverse styles, and attention to detail. Urban and natural settings, confident model poses.",
    },
    {
      img: "https://i.imgur.com/UdPvj8T.png",
      title: "Short Films",
      description: "Short films are our canvas for artistic expression, where we breathe life into unique stories that linger in your thoughts long after the credits roll.",
    },
  ];

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
         {cardList.map((card, id) => (
        <ServiceCard key={id} cardData={card} />
      ))}
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};

// export default Service;

const ServiceCard = ({ cardData }) => {
  // Card data
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    backgroundImage: isHovered
      ? `url("${cardData.backgroundImage}")`
      : "Initial", // Use the card image when not hovered
    // Add other styles as needed
  };

  return (
    <div
      className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
      style={divStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={cardData.img}
       alt="box_img" className="w-[75px] mb-4"
      
       />
      <p className="text-[24px] font-bold uppercase mb-7">{cardData.title}</p>
      <p className="text-[15px] font-medium leading-2 w-full">
        {cardData.description}
      </p>
    </div>
  );
};

export default Service;