'use client';

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';

import { AggregateManHourData } from './types';

export default function AggregateManHourComponent({ aggregatemanhours }: { aggregatemanhours: AggregateManHourData }) {
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState('04');

  const handleDisplay = () => {
    console.log(`表示する期間: ${year}年${month}月`);
  };

  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-[22px] font-bold leading-[80px] text-blue-700">
        <strong>工数集計</strong>
      </Typography>
      <div className="mb-4 flex h-10 items-center">
        <select
          className="mr-2 w-36 rounded border border-gray-300 p-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="2024">2024年</option>
          <option value="2023">2023年</option>
          <option value="2022">2022年</option>
        </select>
        <select
          className="mr-2 w-36 rounded border border-gray-300 p-2"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
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
        <Button variant="outlined" className="mr-2 bg-white p-1 text-blue-500" onClick={handleDisplay}>
          表示
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-blue-700">
                <strong>現場名</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>現場開始日時</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>現場最終日時</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>対象月の工数</strong>
              </TableCell>
              <TableCell className="text-blue-700">
                <strong>総工数</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aggregatemanhours.data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.startAt}</TableCell>
                <TableCell>{item.endAt}</TableCell>
                <TableCell>{item.manHour}</TableCell>
                <TableCell>{item.totalManHour}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
