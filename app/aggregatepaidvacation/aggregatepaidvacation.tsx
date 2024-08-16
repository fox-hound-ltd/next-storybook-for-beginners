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
      <Paper elevation={0} className="my-4 flex items-center pb-10 pl-10 pr-10 pt-5">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="p-2 text-sm text-blue-700">
                  <strong>社員名</strong>
                </TableCell>
                <TableCell className="p-2 text-sm text-blue-700">
                  <strong>集計期間</strong>
                </TableCell>
                <TableCell className="w-[120px] p-2 text-sm text-blue-700">
                  <strong>有給取得日数</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregatepaidvacations.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="px-2 py-4 text-base">{item.name}</TableCell>
                  <TableCell className="px-2 py-4 text-base">
                    {item.aggregationPeriod} ~ {date.replaceAll('/', '-')}
                  </TableCell>
                  <TableCell className="px-2 py-4 text-base">{item.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
