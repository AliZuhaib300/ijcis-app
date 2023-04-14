import React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import {getLocalStorageValues} from "@/constants/local-storage";

type Props = {
  children: any,
  value: number,
  index: number,
  headings: Array<any>,
  setValue: any,
};

export const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const RadioTabs = (props: Props) => {
  const { children, headings, value, setValue } = props;
  // const { journalId } = getLocalStorageValues();
  const handleChange = (e, newValue) => {
    // if (journalId) {
      setValue(newValue);
    // }
  };
  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {headings.map(heading => (
          <Tab label={heading} />
        ))}
      </Tabs>
      {children}
    </React.Fragment>
  );
};
export default RadioTabs;
