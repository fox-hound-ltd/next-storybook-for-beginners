'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import { AggregateNightShiftData } from './types';

export default function AggregateNightShiftComponent({
  aggregatenightshifts,
}: {
  aggregatenightshifts: AggregateNightShiftData;
}) {
  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-[22px] font-bold leading-[80px] text-blue-700">
        <strong>夜間勤務集計</strong>
      </Typography>
      <Typography className="mb-4 flex h-10 items-center bg-indigo-50">集計期間 ： 2024/04/01 - 2024/04/17</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-blue-700">
                <strong>社員名</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>夜間勤務日数</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aggregatenightshifts.data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
