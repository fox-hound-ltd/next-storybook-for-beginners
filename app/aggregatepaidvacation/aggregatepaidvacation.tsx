'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import { AggregatePaidVacationData } from './types';

export default function AggregatePaidVacationComponent({
  aggregatepaidvacations,
}: {
  aggregatepaidvacations: AggregatePaidVacationData;
}) {
  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-[22px] font-bold leading-[80px] text-blue-700">
        <strong>有給休暇集計</strong>
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-blue-700">
                <strong>社員名</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>集計期間</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>有給取得日数</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aggregatepaidvacations.data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.aggregationPeriod}</TableCell>
                <TableCell>{item.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
