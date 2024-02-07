import Button from "../components/Button";
import {statistics} from '../constants/index'
import {arrowRight} from '../assets/icons'
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-10">The New Arrivals</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish nike arrivals, quality life and innovation for your
          active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
          {statistics.map((stat,id) => (
            <div key={id}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center relative flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} width={610} height={500} className="object-contain relative z-10" alt="bigshoe" />
      </div>
    </section>
  );
};

export default Hero;
