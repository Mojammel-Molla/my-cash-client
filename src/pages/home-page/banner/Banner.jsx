import BankImage from '../../../assets/bank-image.jpeg';
import BannerImage from '../../../assets/banner-image.jpeg';
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImage})` }}
      className="hero min-h-[86vh] bg-base-100"
    >
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <img src={BankImage} className="md:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">
            Welcome to <span className=" text-[#0074d9]">My Cash</span>{' '}
          </h1>
          <p className="py-6 font-\">
            We provides secure and user-friendly online banking services,
            allowing customers to <br />
            effortlessly manage accounts, transfer funds, and access various
            financial products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
