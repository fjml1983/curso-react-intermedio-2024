import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalesTable = ({ sales }) => {
  return (
    <ResponsiveContainer className="ResponsiveChartContainer">
      <BarChart data={sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesTable;
