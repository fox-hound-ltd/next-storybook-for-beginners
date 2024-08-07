'use client';

import { Link, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

import { OrderData } from './types';

export default function Order({ data }: Readonly<OrderData>) {
  return (
    <Paper className="flex flex-col p-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.shipTo}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell align="right">
                {order.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href="#" color="primary" className="mt-6">
        See more orders
      </Link>
    </Paper>
  );
}
