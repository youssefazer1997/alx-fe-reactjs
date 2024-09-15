function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-2 max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm hover:shadow-xl">
      <img
        className="rounded-full w-24 h-24 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
