'use client';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import { AggregateNightShiftData } from './types';

export default function AggregateNightShiftComponent({
  aggregatenightshifts,
}: {
  aggregatenightshifts: AggregateNightShiftData;
}) {
  return (
    <div className="p-5">
      <Typography className="font-noto-sans-jp py-8 text-center text-2xl font-bold text-blue-700">
        <strong>夜間勤務集計</strong>
      </Typography>
      <Paper elevation={0} className="mb-4 flex items-center gap-3 bg-indigo-50 px-5 py-3">
        <Typography className="text-sm text-gray-600">集計期間&emsp;:</Typography>
        <Typography className="text-base">2024 / 04 / 01 ～ 2024 / 04 / 17</Typography>
      </Paper>
      <Paper className="mb-5">
        <TableContainer className="px-10 pb-10 pt-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-sm text-blue-700">
                  <strong>社員名</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>夜間勤務日数</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregatenightshifts.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="text-base">{item.name}</TableCell>
                  <TableCell className="text-base">{item.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
