'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Image from 'next/image';
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
    <Grid container className="h-screen w-full justify-center">
      <Grid item xs={4}>
        <Image src="/login.jpg" alt="背景画像" width={1000} height={1000} style={{ width: '100%', height: '100%' }} />
      </Grid>
      <Grid item xs={6}>
        <Box className="mx-auto flex h-screen w-2/3 flex-col items-center justify-center bg-white">
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
      </Grid>
    </Grid>
  );
}
