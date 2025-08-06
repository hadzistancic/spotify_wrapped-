import React from "react";
import { Tabs, Tab, Typography, useTheme } from "@mui/material";

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

  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ mb: 4, color: theme.palette.text.primary }}
      >
        Welcome to your Spotify statistic
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          mb: 8,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {TIME_RANGES.map(({ value, label }) => (
          <Tab key={value} label={label} value={value} />
        ))}
      </Tabs>
    </>
  );
};

export default TimeRangeTabs;
