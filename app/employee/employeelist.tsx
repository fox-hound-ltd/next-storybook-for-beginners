'use client';

import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';

import { Employee } from './types';

const employees: Employee[] = [
  { name: 'サンプル', email: 'test99@example.com', phone: '080-1234-1234' },
  { name: '八尋 祐輝', email: 'aoi15@gmail.com', phone: '080-1234-1234' },
  { name: '北島 蓮也', email: 'aoi14@gmail.com', phone: '080-1234-1234' },
  { name: '千々岩 友惟', email: 'aoi12@gmail.com', phone: '080-1234-1234' },
  { name: '吉单 禮秀一', email: 'aoi11@gmail.com', phone: '080-1234-1234' },
];

const partners: Employee[] = [
  { name: '赤星設備', email: 'partnerA@example.com', phone: '080-1234-1234' },
  { name: '吉川空調設備', email: 'partnerB@example.com', phone: '080-1234-1234' },
  { name: '田中空調設備', email: 'partnerC@example.com', phone: '080-1234-1234' },
  { name: '阪口さん', email: 'partnerD@example.com', phone: '080-1234-1234' },
  { name: '岩森', email: 'partnerE@example.com', phone: '080-1234-1234' },
  { name: 'YMD', email: 'partnerF@example.com', phone: '080-1234-1234' },
];

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];

export default function EmployeeList() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div className="p-4">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography component="h2" variant="h6" color="primary" gutterBottom align="center">
          <strong>社員・協力会社</strong>
        </Typography>
      </Box>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="社員タブ">
        <Tab label="社員一覧" />
        <Tab label="協力会社一覧" />
      </Tabs>
      <Paper>
        <TabPanel value={tabIndex} index={0}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained">
              社員を登録＋
            </Button>
          </Box>
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
                {employees.map((employee, index) => (
                  <TableRow key={employee.email}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {employee.name !== 'サンプル' && (
                          <Avatar sx={{ bgcolor: colors[index % colors.length] }}>{employee.name.charAt(0)}</Avatar>
                        )}
                        <Box ml={2}>{employee.name}</Box>
                      </Box>
                    </TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="flex-end">
                        <Button variant="outlined">編集</Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained">
              協力会社を登録＋
            </Button>
          </Box>
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
                {partners.map((partner) => (
                  <TableRow key={partner.email}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar>{partner.name.charAt(0)}</Avatar>
                        <Box ml={2}>{partner.name}</Box>
                      </Box>
                    </TableCell>
                    <TableCell>{partner.phone}</TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="flex-end">
                        <Button variant="outlined">編集</Button>
                      </Box>
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
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
