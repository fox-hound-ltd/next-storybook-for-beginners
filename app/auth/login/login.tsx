'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid2 as Grid, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';

import { type loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: Readonly<{ onSubmit: typeof loginAction }>) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box className="mt-16 flex flex-col items-center">
        <Avatar className="m-2" sx={{ bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" action={action} className="mt-2" {...getFormProps(form)}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="メールアドレス"
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
            autoComplete="current-password"
            {...getInputProps(fields.password, { type: 'password' })}
            key={fields.password.key}
            error={!!fields.password.errors}
            helperText={fields.password.errors}
          />
          {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
          <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
            ログイン
          </Button>
          <Grid container>
            <Grid size={6}>
              <Link component={NextLink} href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid size={6}>
              <Link component={NextLink} href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
