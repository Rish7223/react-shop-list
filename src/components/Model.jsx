import { FaTimes } from 'react-icons/fa';
const Model = ({ children, setIsOpen }) => {
  return (
    <div className=" fixed top-0 min-h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center px-20">
      <section className="bg-white relative px-10 py-6">
        <button
          className="absolute right-10 top-10"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <FaTimes size={20} color="black" />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Model;
