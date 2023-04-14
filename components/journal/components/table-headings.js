// @flow
import React from 'react';
import { tableHeadings } from '@/constants/journal-constants';

const TableHeadings = () => {
  return (
    <thead className=" text-primary">
      {tableHeadings.map((heading, i) => (
        <th key={i}>{heading}</th>
      ))}
    </thead>
  );
};
export { TableHeadings };
