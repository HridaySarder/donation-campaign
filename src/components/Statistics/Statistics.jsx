import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);
  const [donatedPercentage, setDonatedPercentage] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const totalDonations = jsonData.length;
        const donated = JSON.parse(localStorage.getItem("donations")) || [];
        const donatedPercentage = (donated.length / totalDonations) * 100;
        setDonatedPercentage(donatedPercentage.toFixed(2));

        const data = [
          { name: "Your Donation", value: donatedPercentage },
          { name: "Total Donation", value: 100 - donatedPercentage },
        ];
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div className="flex items-center justify-center">
      <PieChart width={600} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={300}
          cy={200}
          outerRadius={100}
          fill="#8884d8"
          label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
