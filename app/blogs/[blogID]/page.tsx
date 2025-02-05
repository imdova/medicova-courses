import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import imageCourse from "@/assets/images/image-2.jpg";
import Avatar from "@/assets/images/avarar.avif";
import { use } from "react";
import { Calendar } from "lucide-react";
import Accordion from "@/components/UI/Accordion";
import { Blogs } from "@/constants/blogs.data";
import BlogCard from "@/components/UI/BlogCard";

interface SingleBlogeProps {
  params: Promise<{ blogID: string }>;
}

type BlogePost = {
  title: string;
  content: string;
};

export default function SingleBloge({ params }: SingleBlogeProps) {
  const { blogID } = use(params);

  const BlogesList: Record<string, BlogePost> = {
    "1": {
      title: "Next.js App Router",
      content: "Learn about the new App Router in Next.js!",
    },
    "2": {
      title: "React Server Components",
      content: "React Server Components are powerful...",
    },
  };

  const Bloge = BlogesList[blogID];

  if (!Bloge) return <NotFoundPage />;
  const accordionData = [
    {
      title: "Introduction",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Medical Terminology",
      content:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      title: "Medical Neuroscience",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Become an EMT",
      content:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <main className="mb-16">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center ">
          Blog Details
        </h1>
        <div className="flex gap-6 flex-col lg:flex-row mb-10">
          <div className="w-full">
            {/* Blog Image  */}
            <Image
              className="object-cover w-full h-[350px] rounded-xl mb-4"
              src={imageCourse}
              alt="course image"
            />
            <div className="flex items-start sm:items-center sm:flex-row flex-col gap-3 mb-5">
              {/* Profile image  */}
              <Image
                className="w-12 h-12 object-cover rounded-full"
                width={40}
                height={40}
                src={Avatar}
                alt="Avatar"
              />
              <div className="flex justify-between items-center w-full">
                <p className="text-secondary">
                  By<span className="text-black ml-2">Dr/ Teacher Here</span>
                </p>
                <div className="flex gap-2 items-center text-secondary">
                  <Calendar size={17} />
                  <span>20/06/2024</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Blog Title Here
            </h2>
            {/* Description content  */}
            <div className="box-content">
              <h2 className="text-2xl font-semibold mb-3">Description</h2>
              <p className="text-secondary mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <h2 className="text-2xl font-semibold mb-3">
                What youll learn in this course?
              </h2>
              <p className="text-secondary mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan.
              </p>
              <div className="mb-4">
                <Accordion items={accordionData} />
              </div>
              <p className="text-secondary mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
              </p>
            </div>
          </div>
          <div className="lg:w-[500px]">
            <div className="box-content mb-4">
              <h2 className="text-2xl font-semibold mb-6">Description</h2>
              {/* Lasted blogs  */}
              {Blogs.slice(0, 4).map((blog) => {
                return (
                  <div
                    key={blog.id}
                    className="flex gap-4 items-center bg-[#f7f7f7] p-3 rounded-md mb-3">
                    <Image
                      className="object-cover w-24 h-24 rounded-xl"
                      src={imageCourse}
                      alt="course image"
                    />
                    <div>
                      <span className="block text-sm mb-2 text-primary">
                        September 21, 2023
                      </span>
                      <p className="text-sm">Lorem Ipsum is simply dummy</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="box-content">
              {/* Tags content  */}
              <h2 className="text-2xl font-semibold mb-6">Tags</h2>
              <div className="flex flex-wrap gap-2">
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
                <div className="p-2 rounded-md text-xs font-semibold bg-primary text-white w-fit">
                  Tag Title Here
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Other Blogs
          </h2>
          <div className="flex flex-col md:flex-row gap-10 ">
            {/* Other Blogs  */}
            {Blogs.slice(0, 2).map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  describtion={blog.describtion}
                  userName={blog.userName}
                  blogTitle={blog.blogTitle}
                  viewNumber={blog.viewNuber}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
