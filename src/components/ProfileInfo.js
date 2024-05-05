// components/ProfileInfo.js

const ProfileInfo = ({ username }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-gray-600">Email: example@example.com</span>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-gray-600">Phone: +1234567890</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
