"use client";
import Pagination from "@/components/UI/Pagination/Pagination";
import BlogCard from "@/components/UI/BlogCard";
import { Blogs } from "@/constants/blogs.data";
import { useState } from "react";

const BlogsList: React.FC = () => {
  const showpageNum = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const CoursePerPage = showpageNum;

  //  Pagination Logic**
  const indexOfLastProduct = currentPage * CoursePerPage;
  const indexOfFirstProduct = indexOfLastProduct - CoursePerPage;
  const currentBlogs = Blogs.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <main className="mb-12 min-h-[600px]">
      <div className="container mx-auto px-6 lg:max-w-[1170px] ">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          Medicova Blog
        </h1>
        {/* Grid Blogs Veiw  */}
        {currentBlogs?.length === 0 ? (
          <div className="text-center text-secondary text-lg">
            Not Found Blogs!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {currentBlogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                describtion={blog.describtion}
                user={blog.user}
                title={blog.title}
                image={blog.image}
                viewNumber={blog.viewNuber}
              />
            ))}
          </div>
        )}

        {/* Pagination Component */}
        <div className="my-6">
          <Pagination
            total={Blogs.length}
            PerPage={CoursePerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
};
export default BlogsList;
