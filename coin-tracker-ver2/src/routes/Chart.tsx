import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isLightAtom } from "../atoms";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const isLight = useRecoilValue(isLightAtom);
  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close],
    };
  });
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[{ data: chartData }]}
          options={{
            theme: {
              mode: isLight ? "light" : "dark",
            },
            chart: {
              height: 350,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
              tooltip: {
                enabled: true,
              },
            },
            xaxis: {
              type: "datetime",
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                datetimeFormatter: { month: "mmm 'yy" },
              },
              categories: data?.map((price) => +price.time_close * 1000),
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
            plotOptions: {
              candlestick: {
                wick: {
                  useFillColor: true,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
