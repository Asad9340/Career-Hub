function Category({ category }) {
  console.log(category);
  const { logo, category_name, availability } = category;
  return (
    <div className="border py-4 px-6 space-y-1 rounded-lg mx-4">
      <div className="flex justify-center items-center">
        <img className="w-12 rounded-full" src={logo} alt="" />
      </div>
      <h3 className="text-xl font-bold text-[#474747] pt-4">{category_name}</h3>
      <p className="font-medium text-[#A3A3A3]">{availability}</p>
    </div>
  );
}

export default Category;
