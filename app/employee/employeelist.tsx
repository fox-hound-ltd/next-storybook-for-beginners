'use client';

import { Edit, Visibility } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { Employee } from './types';

const employees: Employee[] = [
  { name: '中山 幸太郎', email: 'test99@example.com', phone: '080-1234-1234' },
  { name: '八尋 祐輝', email: 'aoi15@gmail.com', phone: '080-1234-1234' },
  { name: '北島 蓮也', email: 'aoi14@gmail.com', phone: '080-1234-1234' },
  { name: '千々岩 友惟', email: 'aoi12@gmail.com', phone: '080-1234-1234' },
  { name: '吉单 禮秀一', email: 'aoi11@gmail.com', phone: '080-1234-1234' },
];

export default function EmployeeList() {
  return (
    <Paper className="p-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        社員一覧
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>社員名</TableCell>
              <TableCell>メールアドレス</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.email}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                  <IconButton>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
