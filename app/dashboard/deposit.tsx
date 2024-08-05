'use client';

import { Link, Paper, Typography } from '@mui/material';

import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Paper className="flex h-48 flex-col p-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <Typography component="p" variant="h4">
        {data.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
      <Typography color="textSecondary">on {data.date}</Typography>
      <Link href="#" color="primary" className="mt-auto">
        View balance
      </Link>
    </Paper>
  );
}
