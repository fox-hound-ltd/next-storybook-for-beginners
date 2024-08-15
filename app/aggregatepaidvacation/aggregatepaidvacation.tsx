'use client';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import { AggregatePaidVacationData } from './types';

export default function AggregatePaidVacationComponent({
  aggregatepaidvacations,
}: {
  aggregatepaidvacations: AggregatePaidVacationData;
}) {
  const date = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-2xl font-bold leading-[80px] text-blue-700">
        <strong>有給休暇集計</strong>
      </Typography>
      <Paper elevation={0} className="my-4 flex items-center gap-3 pb-10 pl-10 pr-10 pt-5">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-sm text-blue-700">
                  <strong>社員名</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>集計期間</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>有給取得日数</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregatepaidvacations.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="text-base">{item.name}</TableCell>
                  <TableCell className="text-base">
                    {item.aggregationPeriod} ~ {date}
                  </TableCell>
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
