import { Suspense } from "react";
import SearchBar from "./search-Input";
import Filter from "@/components/Layout/filter/filter";
import courseFilter from "@/constants/filters/courseFilter";

const layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <div className="bg-[url('/images/search-background.jpg')] bg-cover bg-center">
        <div className="bg-gradient-to-b from-light-primary-transparent to-primary-transparent p-4 shadow-md">
          <div className="container mx-auto mt-[70px] p-4 lg:max-w-[1170px]">
            <SearchBar />
          </div>
        </div>
      </div>
      {/* Main Layout */}
      <main className="container mx-auto my-8 flex min-h-screen w-full flex-row p-2 lg:max-w-[1170px]">
        {/* FilterSection */}
        <Suspense
          fallback={
            <div className="hidden w-1/5 rounded-[10px] border border-gray-100 bg-white p-[20px] shadow-xl lg:block">
              Loading...
            </div>
          }
        >
          {/* TODO: here is a custom filter component , it eill look diffrent but it
          only need some custmiztion more organized and more reliable you will
          find a sample of filter data in constants */}
          <Filter sections={courseFilter} />
        </Suspense>
        {/* Jobs result Section */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </div>
  );
};

export default layout;
