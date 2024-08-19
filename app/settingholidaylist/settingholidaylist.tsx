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

import { SettingHolidayListData } from './types';

export default function SettingHolidayListComponent({
  settingholidaylist,
}: {
  settingholidaylist: SettingHolidayListData;
}) {
  const handleDisplay = () => {};
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i);
  }

  return (
    <div className="flex h-[687px] justify-center px-3 pb-0 pt-3">
      <div className="w-[830px] justify-center px-0 pb-10 pt-5">
        <Typography className="font-noto-sans-jp text-center text-2xl font-bold leading-[80px] text-blue-700">
          <strong>カレンダー休日設定</strong>
        </Typography>
        <div className="mb-2 flex items-center">
          <select className="mr-2 w-[150px] rounded border border-gray-300 px-3 py-2 text-base">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          <Button
            variant="outlined"
            className="mr-2 bg-white px-4 py-1.5 text-sm text-blue-500"
            onClick={handleDisplay}
          >
            表示
          </Button>
          <Button type="submit" variant="contained" className="ml-auto">
            休日を登録 ＋
          </Button>
        </div>
        <div className="justify-betwee flex justify-start gap-32">
          <Typography className="my-4 text-lg text-gray-500">
            <strong>公休</strong>
          </Typography>
          <Paper elevation={1} className="my-4 flex w-[660px] items-center pb-10 pl-10 pr-10 pt-5">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="w-64 p-2 text-left text-sm text-blue-700">
                      <strong>日付</strong>
                    </TableCell>
                    <TableCell className="w-64 p-2 text-left text-sm text-blue-700">
                      <strong>休日名</strong>
                    </TableCell>
                    <TableCell className="w-14 p-2 text-left text-sm text-blue-700">
                      <strong></strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {settingholidaylist.data
                    .filter((item) => !item.isNationalHoliday)
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="p-2 text-left text-base">{item.date}</TableCell>
                        <TableCell className="p-2 text-left text-base">{item.name}</TableCell>
                        <TableCell className="w-14 p-2 text-left">
                          <Button size="small" variant="outlined">
                            編集
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <div className="justify-betwee flex justify-start gap-32">
          <Typography className="my-4 text-lg text-gray-500">
            <strong>祝日</strong>
          </Typography>
          <Paper elevation={1} className="my-4 flex w-[660px] items-center pb-10 pl-10 pr-10 pt-5">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="w-64 p-2 text-left text-sm text-blue-700">
                      <strong>日付</strong>
                    </TableCell>
                    <TableCell className="w-64 p-2 text-left text-sm text-blue-700">
                      <strong>休日名</strong>
                    </TableCell>
                    <TableCell className="w-14 p-2 text-left text-sm text-blue-700">
                      <strong></strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {settingholidaylist.data
                    .filter((item) => item.isNationalHoliday)
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="p-2 text-left text-base">{item.date}</TableCell>
                        <TableCell className="p-2 text-left text-base">{item.name}</TableCell>
                        <TableCell className="w-14 p-2 text-left">
                          <Button size="small" variant="outlined">
                            編集
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
}
