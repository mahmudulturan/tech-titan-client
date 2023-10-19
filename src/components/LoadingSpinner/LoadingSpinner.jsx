import { MutatingDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center py-4">
      <MutatingDots
        height="100"
        width="100"
        color="#CE5236"
        secondaryColor="#C14A2F"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
