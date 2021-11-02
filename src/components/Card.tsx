const Card: React.FC = ({ children }) => {
  return (
    <section className="bg-white py-8 px-6 rounded-lg sm:px-10 max-w-lg w-full shadow-lg my-6">
      {children}
    </section>
  );
};
export default Card;
