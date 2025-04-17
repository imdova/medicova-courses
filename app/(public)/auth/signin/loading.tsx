import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderCircle className="animate-spin" size={40} />
      <h6 className="ml-4">Loading...</h6>
    </div>
  );
};

export default LoadingPage;
