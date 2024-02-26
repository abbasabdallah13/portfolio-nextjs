import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { client, urlFor } from "@/utils/client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       

    }
        
        const [testimonialsData, setTestimonialsData] = useState([]);


    useEffect(() => {  
        const query = `*[_type == 'testimonials']`;

        client.fetch(query).then(data => {setTestimonialsData(data)});

    }, []);

    return (
        <div id="testimonials" className="testimonials h-fit p-8 overflow-x-hidden">
            <h1 className="inter uppercase text-[22px] lg:text-4xl font-semibold text-[#646463] text-center">TESTIMONIALS</h1>
            <Slider {...settings}>
               {
                testimonialsData.map((el: any,i) => ( 
                        <div className="h-full slick-slide-next p-4 gap-y-4" key={i}>
                            <Image className="w-40 h-40 rounded-full" src={urlFor(el.image).url()} alt={el.name} width={100} height={100} />
                            <h3 className="inter font-semibold text-center text-[#646463] mt-2">{el.name}</h3>
                            <p className="px-2 w-4/5 md:w-[45%] text-justify text-base font-normal text-[#646463] mt-2">{el.quote}</p>
                        </div>
                    ))
                }
            </Slider> 
    </div>
  )
};

export default Testimonials;
