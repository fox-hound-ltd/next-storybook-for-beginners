import { ComponentProps } from 'react';

import { api } from 'lib/api';

import AggregateManHourComponent from './aggregatemanhour';

export default async function Page() {
  const date = new Date()
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
  const aggregatemanhours = await getAggregateManHourComponent(date);
  return <AggregateManHourComponent aggregatemanhours={aggregatemanhours} />;
}

async function getAggregateManHourComponent(date: string) {
  return await api<ComponentProps<typeof AggregateManHourComponent>['aggregatemanhours']>(`aggregate/manhour/${date}`);
}
