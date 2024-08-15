'use client';

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

import { AggregateManHourData } from './types';

export default function AggregateManHourComponent({ aggregatemanhours }: { aggregatemanhours: AggregateManHourData }) {
  const handleDisplay = () => {};
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i);
  }

  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-2xl font-bold leading-[80px] text-blue-700">
        <strong>工数集計</strong>
      </Typography>
      <div className="mb-2 flex items-center">
        <select className="mr-2 h-10 w-36 rounded border border-gray-300 p-2 text-base">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}年
            </option>
          ))}
        </select>
        <select className="mr-2 h-10 w-36 rounded border border-gray-300 p-2 text-base">
          <option value="01">1月</option>
          <option value="02">2月</option>
          <option value="03">3月</option>
          <option value="04">4月</option>
          <option value="05">5月</option>
          <option value="06">6月</option>
          <option value="07">7月</option>
          <option value="08">8月</option>
          <option value="09">9月</option>
          <option value="10">10月</option>
          <option value="11">11月</option>
          <option value="12">12月</option>
        </select>
        <Button
          variant="outlined"
          className="mr-2 h-9 w-16 bg-white p-1 px-4 py-1.5 text-sm text-blue-500"
          onClick={handleDisplay}
        >
          表示
        </Button>
      </div>
      <Paper elevation={0} className="my-4 flex items-center gap-3 px-5 py-3 pb-10 pl-10 pr-10 pt-5">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-sm text-blue-700">
                  <strong>現場名</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>現場開始日時</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>現場最終日時</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>対象月の工数</strong>
                </TableCell>
                <TableCell className="text-sm text-blue-700">
                  <strong>総工数</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregatemanhours.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="text-base">{item.name}</TableCell>
                  <TableCell className="text-base">{item.startAt}</TableCell>
                  <TableCell className="text-base">{item.endAt}</TableCell>
                  <TableCell className="text-base">{item.manHour}</TableCell>
                  <TableCell className="text-base">{item.totalManHour}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
