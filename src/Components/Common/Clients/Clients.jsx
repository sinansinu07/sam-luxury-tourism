import "./Clients.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';


import client1 from "../../../Assets/Clients/Aquaventure-World.png"
import client2 from "../../../Assets/Clients/Green-Planet-Dubai.png"
import client3 from "../../../Assets/Clients/IMG_Worlds_of_Adventure.png"
import client4 from "../../../Assets/Clients/Museum-of-the-Future-removebg-preview.png"
// import client5 from "../../../Assets/Clients/aquaventure-atlantis.png"
import client6 from "../../../Assets/Clients/deep-dive-dubai.png"
import client7 from "../../../Assets/Clients/dubai-dolphinarium.png"
import client8 from "../../../Assets/Clients/dubai-parks.png"
import client9 from "../../../Assets/Clients/falcon-tours.png"
import client10 from "../../../Assets/Clients/ferrari-world.png"
import client11 from "../../../Assets/Clients/heli-dubai.png"
import client12 from "../../../Assets/Clients/legoland.png"
import client13 from "../../../Assets/Clients/motiongate.png"
import client14 from "../../../Assets/Clients/real-madrid-world.png"
import client15 from "../../../Assets/Clients/ski-dubai.png"
// import client16 from "../../../Assets/Clients/sky_walker_yachts.jpeg"
import client17 from "../../../Assets/Clients/skydive-dubai.png"
// import client18 from "../../../Assets/Clients/warner-bros-picture.png"
import client19 from "../../../Assets/Clients/wild-wadi-water-park.png"
import client20 from "../../../Assets/Clients/x-line-dubai.png"
import client21 from "../../../Assets/Clients/xclusive-yatch.png"
// import client22 from "../../../Assets/Clients/rpm.png"
// import client23 from "../../../Assets/Clients/saudi-aramco.png"
// import client24 from "../../../Assets/Clients/shazam.png"
// import client25 from "../../../Assets/Clients/siemens.png"
// import client26 from "../../../Assets/Clients/snapchat.png"
// import client27 from "../../../Assets/Clients/toshiba.png"
// import client28 from "../../../Assets/Clients/yamaha.png"

const data = [
  { img: client1, },
  { img: client2, },
  { img: client3, },
  { img: client4, },
  // { img: client5, },
  { img: client6, },
  { img: client7, },
  { img: client8, },
  { img: client9, },
  { img: client10, },
  { img: client11, },
  { img: client12, },
  { img: client13, },
  { img: client14, },
  { img: client15, },
  // { img: client16, },
  { img: client17 },
  // { img: client18 },
  { img: client19 },
  { img: client20 },
  { img: client21 },
  // { img: client22 },
  // { img: client23 },
  // { img: client24 },
  // { img: client25 },
  // { img: client26 },
  // { img: client27 },
  // { img: client28 },
];

const textVariants = {
  initial: {
      y: 50,
      opacity: 0
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
      duration: 1,
      staggerChildren: 0.3
      }
  },
}

const childVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Client() {
    return (
      <section className="client">
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 6,
            autoScroll: {
              speed: 1,
            },
            pagination: false,
            arrows: false,
            speed: 5000,
            rewind: true,
            rewindByDrag: true,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              600: {
                perPage: 3,
              },
              480: {
                  perPage: 2,
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {data.map((data, i) => (
            <SplideSlide key={i}>
              <img className="data-img" src={data.img} alt="2D Animation" />
            </SplideSlide>
          ))}
        </Splide>
      </section>
    );
}

export default Client;