import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
  return (
    <div>
      <div className="bg-[url('/images/search-background.jpg')] bg-cover bg-center">
        <div className="bg-gradient-to-b from-light-primary-transparent to-primary-transparent p-4 shadow-md">
          <div className="container mx-auto mt-[70px] flex flex-col-reverse items-center gap-6 p-4 lg:flex-row lg:max-w-[1170px]">
            <div className="col-span-4 md:col-span-3">
              <h2 className="mb-6 text-[45px] font-black leading-none text-primary-foreground md:text-[60px]">
                <span className="text-[45px] font-black text-main md:text-[60px]">
                  Discover
                </span>{" "}
                More <br />
                Than 5000
                <span className="text-[45px] font-black text-main md:text-[60px]">
                  {" "}
                  + Course
                </span>{" "}
              </h2>
              {/* <Suspense>
                <SearchForm pathname="/search" />
              </Suspense> */}
              <p className="mt-4 text-gray-100">
                {" "}
                <span className="font-bold text-primary-foreground">
                  Popular
                </span>{" "}
                : Medical Claims Officer,Dental Designer, Healthcare- Presales
                specialist, Medical Ambassador
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-nowrap">
                <Link
                  href="/search?q=Pediatric Consultant"
                  className="rounded-full border border-white px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-white hover:text-primary focus:ring-2 focus:ring-white"
                >
                  Pediatric Consultant
                </Link>
                <Link
                  href="/search?q=ICU Nurse"
                  className="rounded-full border border-white px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-white hover:text-primary focus:ring-2 focus:ring-white"
                >
                  ICU Nurse
                </Link>
                <Link
                  href="/search?q=Obsteric+Consultant&country=Saudi Arabia&cCd=SA"
                  className="rounded-full border border-white px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-white hover:text-primary focus:ring-2 focus:ring-white"
                >
                  Obsteric Consultant Saudi Arabia
                </Link>

                <Link
                  href="/search?q=Internal Medicine&country=Oman&cCd=om"
                  className="rounded-full border border-white px-4 py-2 text-sm text-primary-foreground transition-colors duration-300 hover:bg-white hover:text-primary focus:ring-2 focus:ring-white"
                >
                  Internal Medicine Registrar Oman
                </Link>
              </div>
            </div>
            <Image
              src="/images/hero.png"
              alt="search background"
              width={400}
              height={400}
              className="col-span-1 h-auto w-[300px] object-contain md:w-[250px] xl:w-[400px]"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
