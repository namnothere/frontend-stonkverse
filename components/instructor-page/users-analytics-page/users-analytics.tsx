"use client";

import AnalyticsAreaChart from "@/components/analytics-area-chart";
import LoadingSpinner from "@/components/loading-spinner";
import { useGetUsersAnalyticsQuery } from "@/store/analytics/analytics-api";
import { FC, JSX, useEffect, useState } from "react";

interface Props {
  isDashboard?: boolean;
}

const UserAnalytics: FC<Props> = ({ isDashboard }): JSX.Element => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});

  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    if (data) {
      const formattedData = data.users.map((item: any) => ({
        name: item.month,
        Count: Number(item.count),
      }));

      setRenderedData(formattedData);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <AnalyticsAreaChart
          data={renderedData}
          title="USERS ANALYTICS"
          isDashboard={isDashboard}
        />
      )}
    </>
  );
};

export default UserAnalytics;
