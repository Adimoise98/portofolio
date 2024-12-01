import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

//COMPONENTS

import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="px-8 sm:px-12 lg:px-24 w-auto h-full">
        <div className="flex flex-col xl:flex-row xl:mt-20 items-cover justify-around items-center xl:pt-8 xl:pb-24">
          {/*HERO TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none gap-8">
            <span className="text-xl">Junior Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hi There! I am <br />{" "}
              <span className="text-green-600">
                Adrian Moise <span>.</span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Aspiring Front-End Developer passionate about building impactful
              web experiences through diverse technologies and continuous
              growth.
            </p>
            {/*Buttons and social media links */}
            <div className="flex flex-col xl:flex-row items-start gap-10">
              <div className="flex flex-col justify-center items-start gap-8">
                <Link
                  href="/assets/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>

                <Link
                  href="/assets/Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download Cover Letter</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles=" flex gap-6"
                  iconStyles="w-16 h-16 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/*PHOTO */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
