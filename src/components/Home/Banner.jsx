import bookimg from "@/assets/books.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[60vh] my-5">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={bookimg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="book banner image"
        />
        <div>
          <h1 className="text-5xl font-bold">New Book released!</h1>
          <p className="py-6">
            Checkout our store for new listed books from al over the world
          </p>
          <button className="btn btn-primary">Get Started not fixed</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
