import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className=" text-coral-red">Super</span>
          <span className=" text-coral-red">Quality</span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, Our meticulously crafted footwear
          is designed to elevate your experience providing with the unmatched
          quality, innovation and a touch elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text"></p>

        <div>
          {/* button */}
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          height={522}
          width={570}
          className="object-contain "
        ></img>
      </div>
    </section>
  );
};

export default SuperQuality;
