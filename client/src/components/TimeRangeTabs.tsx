import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";

const TIME_RANGES = [
  { value: "short_term", label: "Last 4 Weeks" },
  { value: "medium_term", label: "Last 6 Months" },
  { value: "long_term", label: "All Time" },
];

interface TimeRangeTabsProps {
  value: string;
  onChange: (value: string) => void;
}

const TimeRangeTabs = ({ value, onChange }: TimeRangeTabsProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Welcome to your Spotify statistic
      </Typography>
      <Tabs value={value} onChange={handleChange} centered sx={{ mb: 8 }}>
        {TIME_RANGES.map(({ value, label }) => (
          <Tab key={value} label={label} value={value} />
        ))}
      </Tabs>
    </>
  );
};

export default TimeRangeTabs;
