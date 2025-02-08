import Tutor_1 from "@/assets/images/tutor-1.jpg";
import Tutor_2 from "@/assets/images/tutor-2.jpg";
import Tutor_3 from "@/assets/images/tutor-3.png";
import {
  ArrowRight,
  BadgeCheck,
  Book,
  CircleCheck,
  CirclePlay,
  Earth,
  File,
  Handshake,
  IdCard,
  Layers,
  Mail,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import image_2 from "@/assets/images/image-2.jpg";
import IconBtn from "@/components/UI/Buttons/IconBtn";
import TestimonialCard from "@/components/UI/TestimonialCard";

type Testimonial = {
  id: number;
  quote: string;
  number: number; // Change to number
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: 1,
  },
  {
    id: 2,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: 2,
  },
];

const BecomeTutor: React.FC = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="md:text-5xl text-3xl font-bold my-20 md:text-start text-center">
            Become an Tutor
          </h1>
        </div>
        <div className="flex items-center bg-[#eee] min-h-[130px] p-6 justify-between">
          <div className="container mx-auto px-6 lg:max-w-[1170px] flex justify-between gap-10 lg:gap-4 flex-wrap  ">
            <div className="flex gap-3  justify-start  w-[170px] sm:w-[200px]">
              <UsersRound className="text-[#FF6636]" size={30} />
              <div>
                <h1 className="text-2xl font-semibold">67.1K</h1>
                <span className="text-secondary text-sm">Students</span>
              </div>
            </div>
            <div className="flex gap-3  justify-start lg:justify-start w-[170px] sm:w-[200px]">
              <Book className="text-[#564FFD]" size={30} />
              <div>
                <h1 className="text-2xl font-semibold">26k</h1>
                <span className="text-secondary text-sm">
                  Certified Instructor
                </span>
              </div>
            </div>
            <div className="flex gap-5  justify-start lg:justify-start w-[170px] sm:w-[200px]">
              <Earth className="text-[#E34444]" size={30} />
              <div>
                <h1 className="text-2xl font-semibold">72</h1>
                <span className="text-secondary text-sm">Country Language</span>
              </div>
            </div>
            <div className="flex gap-3  justify-start lg:justify-start w-[170px] sm:w-[200px]">
              <BadgeCheck className="text-[#23BD33]" size={30} />
              <div>
                <h1 className="text-2xl font-semibold">99.9%</h1>
                <span className="text-secondary text-sm">Success Rate</span>
              </div>
            </div>
            <div className="flex gap-3  justify-start lg:justify-start w-[170px] sm:w-[200px]">
              <Layers className="text-[#FD8E1F]" size={30} />
              <div>
                <h1 className="text-2xl font-semibold">57</h1>
                <span className="text-secondary text-sm">
                  Trusted Companies
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col lg:flex-row gap-5 py-20">
            <div className="w-full">
              <Image
                className="rounded-xl object-cover"
                src={image_2}
                alt="image-content"
              />
            </div>
            <div className="w-full p-3 ">
              <h1 className="text-3xl font-semibold mb-4">
                Why you will start teaching on Tutor Hub
              </h1>
              <p className="text-secondary mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s
              </p>
              <div>
                <div className="flex gap-4 mb-6">
                  <CircleCheck className="text-primary" size={30} />
                  <div>
                    <h2>Tech your students as you want.</h2>
                    <p className="text-secondary text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <CircleCheck className="text-primary" size={30} />
                  <div>
                    <h2>Tech your students as you want.</h2>
                    <p className="text-secondary text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <CircleCheck className="text-primary" size={30} />
                  <div>
                    <h2>Tech your students as you want.</h2>
                    <p className="text-secondary text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eee] min-h-[130px] py-16 ">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <h2 className="m-auto text-center mb-8 md:text-3xl text-2xl  md:w-[400px] font-semibold">
            How you ll become successful instructor
          </h2>
          <div className="flex gap-4 flex-col flex-wrap sm:flex-row justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-[220px] h-[220px] ">
              <div className="flex justify-center items-center m-auto rounded-md mb-3 w-20 h-20 bg-[#564FFD1A]">
                <File size={30} className="text-[#564FFD]" />
              </div>
              <h2 className="m-auto text-center text-lg mb-3 font-semibold">
                1. Apply to become instructor.
              </h2>
              <p className="text-center text-secondary text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg w-[220px] h-[220px]">
              <div className="flex justify-center items-center m-auto rounded-md mb-3 w-20 h-20 bg-[#14B3E030]">
                <IdCard size={30} className="text-[#2BA149]" />
              </div>
              <h2 className="m-auto text-center text-lg mb-3 font-semibold">
                2. Setup & edit your profile.
              </h2>
              <p className="text-center text-secondary text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg w-[220px] h-[220px]">
              <div className="flex justify-center items-center m-auto rounded-md mb-3 w-20 h-20 bg-[#FFEEE8]">
                <CirclePlay size={30} className="#FF6636" />
              </div>
              <h2 className="m-auto text-center text-lg mb-3 font-semibold">
                3. Create your new course
              </h2>
              <p className="text-center text-secondary text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg w-[220px] h-[220px]">
              <div className="flex justify-center items-center m-auto rounded-md mb-3 w-20 h-20 bg-[#E1F7E3]">
                <Handshake size={30} className="text-[#23BD33]" />
              </div>
              <h2 className="m-auto text-center text-lg mb-3 font-semibold">
                4. Start teaching & earning
              </h2>
              <p className="text-center text-secondary text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex gap-8 flex-col lg:flex-row">
            <div className="w-full">
              <h2 className=" mb-4 text-2xl md:text-3xl md:w-[400px] font-semibold">
                How you ll become successful instructor
              </h2>
              <p className="text-secondary mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s,
              </p>
              <ul className="list-disc ml-5 mb-4">
                <li className="mb-3">Steady stream of new students</li>
                <li className="mb-3">Smart calendar</li>
                <li className="mb-3">Interactive classroom</li>
                <li className="mb-3">Convenient payment methods</li>
                <li className="mb-3">Professional development webinars</li>
                <li className="mb-3">Supportive tutor community</li>
                <li className="mb-3">Create a tutor profile now</li>
              </ul>
              <IconBtn width={300}>
                <span>Create a tutor profile now</span>
                <ArrowRight />
              </IconBtn>
            </div>
            <div className="w-full">
              <div className="relative md:w-[400px] md:h-[450px] w-[300px] h-[350px] mx-auto">
                <div>
                  <Image
                    src={Tutor_1}
                    alt="Person Learning"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="absolute w-36 h-36 bg-white top-0 left-0"></span>
                <span className="absolute w-4 h-full bg-white top-0 left-36"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#eee]">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex gap-8 flex-col-reverse lg:flex-row">
            <div className="w-full">
              <div className="relative md:w-[400px] md:h-[450px] w-[300px] h-[350px] mx-auto">
                <div>
                  <Image
                    src={Tutor_2}
                    alt="Person Learning"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="absolute w-36 h-36 bg-[#eee] top-0 right-0"></span>
                <span className="absolute w-4 h-full bg-[#eee] top-0 right-36"></span>
              </div>
            </div>
            <div className="w-full">
              <h2 className="mb-4 text-2xl md:text-3xl md:w-[400px] font-semibold">
                Dont worry were always here to help you
              </h2>
              <p className="text-secondary mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s,
              </p>
              <ul className="mb-4">
                <li className="flex items-center gap-2 mb-5">
                  <ArrowRight size={18} className="text-primary" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </li>
                <li className="flex items-center gap-2 mb-5">
                  <ArrowRight size={18} className="text-primary" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </li>
                <li className="flex items-center gap-2 mb-5">
                  <ArrowRight size={18} className="text-primary" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </li>
                <li className="flex items-center gap-2 mb-5">
                  <ArrowRight size={18} className="text-primary" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </li>
              </ul>
              <div className="flex gap-4">
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <span className="text-sm text-secondary">
                    Email us, anytime anywhere
                  </span>
                  <h2>help.Tutorhub@mail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex gap-8 items-center flex-col-reverse lg:flex-row">
            <div className="w-full">
              <h2 className=" mb-4 text-2xl md:text-3xl md:w-[400px] font-semibold">
                How you ll become successful instructor
              </h2>
              <p className="text-secondary mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s,
              </p>
              <TestimonialCard testimonials={testimonials} />
            </div>
            <div className="w-full">
              <div className="relative md:w-[500px] md:h-full w-[300px] h-full mx-auto">
                <div>
                  <Image
                    src={Tutor_3}
                    alt="Person Learning"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BecomeTutor;
