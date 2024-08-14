import { ComponentProps } from 'react';

import { api } from 'lib/api';

import AggregateManHourComponent from './aggregatemanhour';

export default async function Page() {
  const date = '2024-04-01';
  const aggregatemanhours = await getAggregateManHourComponent(date);
  console.log(aggregatemanhours);
  return <AggregateManHourComponent aggregatemanhours={aggregatemanhours} />;
}

async function getAggregateManHourComponent(date: string) {
  return await api<ComponentProps<typeof AggregateManHourComponent>['aggregatemanhours']>(`aggregate/manhour/${date}`);
}
