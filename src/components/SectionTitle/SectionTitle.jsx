const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-12 lg:mt-16 mb-9 lg:mb-12">
      <p className="text-[#D99904]">---{subTitle}---</p>
      <h3 className="md:w-4/12 text-2xl lg:text-4xl mt-3 mx-auto border-y-4 py-2 lg:py-3">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
