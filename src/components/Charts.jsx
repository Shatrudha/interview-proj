import { PieChart, Pie, LineChart, Line, XAxis, YAxis } from "recharts";

const Charts = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="amount" nameKey="category" />
      </PieChart>

      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="amount" />
      </LineChart>
    </div>
  );
};

export default Charts;