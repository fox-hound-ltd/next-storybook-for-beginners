import { registerAction } from 'lib/actions/auth';

import Register from './register';

export default async function Page({ searchParams }: Readonly<{ searchParams: Promise<{ register?: 'ok' }> }>) {
  return <Register onSubmit={registerAction} registered={(await searchParams).register === 'ok'} />;
}
