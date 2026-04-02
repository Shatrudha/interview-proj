const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-xl font-bold">₹{value}</p>
    </div>
  );
};

export default SummaryCard;