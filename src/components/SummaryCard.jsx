const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-5 rounded-2xl transition-all hover:scale-105">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-xl font-bold">₹{value}</p>
    </div>
  );
};

export default SummaryCard;