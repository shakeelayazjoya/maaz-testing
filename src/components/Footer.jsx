import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="text-center py-4 space-y-5">
        <h1 className="text-2xl font-semibold ">
          Subscribe for New And Updates{" "}
        </h1>
        <input
          type="email"
          placeholder=" Email Address ...  "
          className="h-15 w-80 px-4 py-2 border border-gray-300 bg-white rounded outline-none"
        />{" "}
        <br />
        <button className="button text-base px-8 py-4 mt-4  bg-green-500 text-black rounded outline-none ">
          Subscribe
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
