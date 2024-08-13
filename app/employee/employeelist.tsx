'use client';

import { Avatar, Button, Tab, Tabs } from '@mui/material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';

import { Employee, Partner } from './types';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];

export default function EmployeeList({ employees, partners }: { employees: Employee; partners: Partner }) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div className="p-4">
      <Typography className="font-noto-sans-jp text-center text-[22px] font-bold leading-[33px] text-blue-700">
        <strong>社員・協力会社</strong>
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="社員タブ" className="flex flex-row items-center">
        <Tab label="社員一覧" className="font-noto-sans-jp text-left text-sm font-normal leading-6 tracking-wide" />
        <Tab label="協力会社一覧" className="font-noto-sans-jp text-left text-sm font-normal leading-6 tracking-wide" />
      </Tabs>
      <Paper>
        <TabPanel value={tabIndex} index={0}>
          <div className="flex justify-end">
            <Button type="submit" variant="contained">
              社員を登録＋
            </Button>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-blue-700">
                    <strong>社員名</strong>
                  </TableCell>
                  <TableCell className="text-blue-700">
                    <strong>メールアドレス</strong>
                  </TableCell>
                  <TableCell className="text-blue-700">
                    <strong>電話番号</strong>
                  </TableCell>
                  <TableCell className="text-blue-700"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.data.map((employee, index) => (
                  <TableRow key={employee.email}>
                    <TableCell>
                      <div className="flex items-center">
                        {employee.name === 'サンプル' ? (
                          <div className="ml-8 rounded-full bg-white text-black">
                            <span className="text-white">S</span>
                          </div>
                        ) : (
                          <Avatar sx={{ bgcolor: colors[index % colors.length] }}>{employee.name.charAt(0)}</Avatar>
                        )}
                        <div className="ml-2">{employee.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button variant="outlined">編集</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <div className="flex justify-end">
            <Button type="submit" variant="contained">
              協力会社を登録＋
            </Button>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-blue-700">
                    <strong>協力会社名</strong>
                  </TableCell>
                  <TableCell className="text-blue-700">
                    <strong>電話番号</strong>
                  </TableCell>
                  <TableCell className="text-blue-700"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {partners.data.map((partner) => (
                  <TableRow key={partner.name}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar>{partner.name.charAt(0)}</Avatar>
                        <div className="ml-2">{partner.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{partner.phone}</TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Button variant="outlined">編集</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={value === index ? 'p-3' : ''}
      {...other}
    >
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}
