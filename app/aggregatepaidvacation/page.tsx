import { ComponentProps } from 'react';

import { api } from 'lib/api';

import AggregatePaidVacationComponent from './aggregatepaidvacation';

export default async function Page() {
  const aggregatepaidvacations = await getAggregatePaidVacationComponent();
  return <AggregatePaidVacationComponent aggregatepaidvacations={aggregatepaidvacations} />;
}

async function getAggregatePaidVacationComponent() {
  return await api<ComponentProps<typeof AggregatePaidVacationComponent>['aggregatepaidvacations']>(
    'aggregate/paidvacation',
  );
}
