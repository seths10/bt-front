import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-3">
        <Link
          to={"/"}
          className="font-inter text-white bg-white border border-gray px-2 py-1 rounded-lg"
        >
          <button className="font-inter text-black rounded-md mb-3">
            <MdArrowBack />
          </button>
        </Link>
        <h1 className="font-extrabold text-[#222328] text-[32px]">About</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          This is a project for our final year
        </p>
      </div>
    </section>
  );
};

export default About;
