import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const timeRanges = ["1W", "1M", "3M", "6M", "1Y"];

const dummyData = {
  labels: ["Sept 21", "Sept 14", "Sept 7", "Sept 3"],
  datasets: [
    {
      label: "APY",
      data: [0.8, 1.1, 0.6, 1.2, 0.7, 1.0, 0.5, 1.1],
      borderColor: "#4A7C59",
      backgroundColor: "rgba(74, 124, 89, 0.2)",
      tension: 0.3,
      fill: true,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 2,
      ticks: {
        stepSize: 1,
        callback: function (value: number) {
          return value + "%";
        },
      },
      grid: {
        borderColor: "transparent",
      },
    },
    x: {
      grid: {
        borderColor: "transparent",
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      mode: "index" as const,
      intersect: false,
    },
  },
};

interface supplyProps {
  title: string;
}

const CircularProgressBar = ({ percentage }: { percentage: number }) => {
  const radius = 35;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#E6EDEC"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#4A7C59"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="#4A7C59"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const InfoBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col  border rounded-md p-1 w-1/3">
    <p className="text-sm text-gray-500 pl-2">{label}</p>
    <p className="font-semibold text-lg pl-2">{value}</p>
  </div>
);

const SupplyInfo = ({ title }: supplyProps) => {
  const [selectedRange, setSelectedRange] = useState("1W");

  return (
    <div className="">
      <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-4xl mx-auto border mt-5 ">
        <p>{title}</p>
        <div className="flex items-center gap-6 mb-6 mt-3">
          <div>
            <CircularProgressBar percentage={70} />
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div>
              <p className="text-xs text-gray-500">Total Supply</p>
              <p className="font-bold">3.41M of 3.90M</p>
              <p className="text-xs text-gray-400">$3.10B of $3.90</p>
            </div>
            <p className="text-4xl text-[#F6F6F6]">|</p>
            <div className="">
              <p className="text-xs text-gray-500">APY</p>
              <p className="font-bold text-lg">1.63%</p>
            </div>
          </div>
        </div>

        <div className="border bg-[#F6F6F6] rounded-lg py-1 mb-6 w-65 ml-82">
          <div className="space-x-2 pl-3 ">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-1 rounded-md text-sm font-semibold ${
                  selectedRange === range
                    ? "bg-white text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="border rounded-lg mb-6 p-2">
          <Line options={options} data={dummyData} className=" ml-8" />
        </div>

        <div className="flex gap-4">
          <InfoBox label="Max LTV" value="70.12%" />
          <InfoBox label="Liquidation threshold" value="80.12%" />
          <InfoBox label="Liquidation penalty" value="7.12%" />
        </div>
      </div>
    </div>
  );
};

export default SupplyInfo;
