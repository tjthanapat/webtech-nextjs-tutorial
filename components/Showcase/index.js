import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const WebSlide = (props) => {
  return (
    <div className="border rounded-xl p-5 mb-14 mx-auto max-w-2xl shadow-2xl">
      <img src={props.imageSrc} alt={props.title} />
      <div className="text-center mt-3">
        <h6 className="font-medium text-lg">{props.title}</h6>
        <a
          href={props.link}
          target="_blank"
          className="text-gray-400 hover:text-gray-700"
        >
          {props.link}
        </a>
      </div>
    </div>
  );
};

const Showcase = () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <WebSlide
          title="Tiktok"
          imageSrc="/showcase/tiktok.jpg"
          link="https://www.tiktok.com/en"
        />
      </SwiperSlide>
      <SwiperSlide>
        <WebSlide
          title="Netflix Jobs"
          imageSrc="/showcase/netflixjobs.jpg"
          link="https://jobs.netflix.com"
        />
      </SwiperSlide>
      <SwiperSlide>
        <WebSlide
          title="GitHub Copilot"
          imageSrc="/showcase/githubcopilot.jpg"
          link="https://copilot.github.com/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <WebSlide
          title="Hilton"
          imageSrc="/showcase/hilton.jpg"
          link="https://www.hilton.com/en/hilton"
        />
      </SwiperSlide>

      <SwiperSlide>
        <WebSlide
          title="IGN"
          imageSrc="/showcase/ign.jpg"
          link="https://www.ign.com/"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
