
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CraftItems from './CraftItems';
import { useLoaderData } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter'
import ArtCraftCategories from './ArtCraftCategories';


const Banner = () => {
    const crafts = useLoaderData()

    const [text] = useTypewriter({
        words: ['Craft Items', 'Craft Items'],
        loop: 0
      })

    return (
        <div>

            <div className=' lg:mx-10 md:mx-2 sm:mx-1'>
                <Swiper className=' lg:h-96 md:h-40'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img className=' lg:h-full md:h-[80%] w-full rounded-lg' src="https://i.ibb.co/7tRFCgZ/pexels-andre-taissin-3252911-6086478.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className=' lg:h-full md:h-[80%] w-full rounded-lg' src="https://i.ibb.co/3hG6Wj7/priscilla-du-preez-Zkf-WNqu3m04-unsplash.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className=' lg:h-full md:h-[80%] w-full rounded-lg' src="https://i.ibb.co/Rv17DzD/top-view-pasta-frame-with-cloth.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>

            <div className='flex justify-center'>
                <div>
                    <div className='App h-20'>
                    <h1 className="text-5xl font-extrabold items-center text-center my-5"><span>{text}</span></h1>
                    </div>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-0'>
                        {crafts.map(craft => <CraftItems key={craft._id} craft={craft}></CraftItems>)}
                    </div>
                </div>
            </div>
            <div>
                <ArtCraftCategories></ArtCraftCategories>
            </div>
        </div>
    );
};

export default Banner;
