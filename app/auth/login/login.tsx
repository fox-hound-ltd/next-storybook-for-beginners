'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
// import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
// import { url } from 'inspector';
// import NextLink from 'next/link';
// import { normalize } from 'path';
import { useFormState } from 'react-dom';

import { loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <div className="h-full w-full bg-red-600">
      <Box className="mt-16 flex w-1/3 flex-col items-center bg-white">
        <Typography component="h1" variant="h5" sx={{ color: '#002E6E', fontWeight: 'bold' }}>
          業務管理システム
        </Typography>
        <Box component="form" action={action} {...getFormProps(form)} className="mt-2">
          <TextField
            margin="normal"
            required
            fullWidth
            label="メールアドレス"
            InputLabelProps={{ shrink: true }}
            placeholder="example@example.com"
            autoComplete="email"
            autoFocus
            {...getInputProps(fields.email, { type: 'email' })}
            key={fields.email.key}
            error={!!fields.email.errors}
            helperText={fields.email.errors}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="パスワード"
            InputLabelProps={{ shrink: true }}
            placeholder="********"
            autoComplete="current-password"
            {...getInputProps(fields.password, { type: 'password' })}
            key={fields.password.key}
            error={!!fields.password.errors}
            helperText={fields.password.errors}
            style={{ marginBottom: '0px' }}
          />
          <Typography variant="overline" color="textSecondary" style={{ marginLeft: '16px' }}>
            パスワードを忘れた方は管理者にご連絡ください
          </Typography>
          {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mb-4 mt-6"
            style={{ backgroundColor: '#3F51B5' }}
          >
            ログイン
          </Button>
        </Box>
      </Box>
    </div>
  );
}
