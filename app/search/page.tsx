/* eslint-disable @typescript-eslint/no-unused-vars */

const SearchPage: React.FC = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const {
    q: query,
    country,
    cCd,
  } = searchParams as {
    [key: string]: string;
  };

  // TODO: the result comes from a server function
  const result = { success: "", data: { data: [], total: 0 } };
  if (!result.success || !result.data) return <h1>No jobs found</h1>;
  const { data, total } = result.data;
  return (
    <div className="w-full px-2 md:px-6 md:pl-9 lg:w-[80%]">
      {/* TODO: here you can should only view the result data */}
      {/* <DataView data={data} total={total} /> */}

      {/* here if you found no data you should display no data found  */}
      {total === 0 && (
        <div>
          <div className=" p-4 text-center">
            <h1 className="text-3xl font-semibold mb-4">No data found</h1>
            <p className="text-gray-600">
              Please refine your search by changing the keywords
            </p>
          </div>
        </div>
      )}
      {/* TODO: add your custom Pagination and make it take the page and number of items per page from the url */}
      {/* {total > 0 && total > data.length && (
        <Pagination totalItems={total} />
      )} */}
    </div>
  );
};

export default SearchPage;
