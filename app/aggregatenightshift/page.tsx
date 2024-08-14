import { ComponentProps } from 'react';

import { api } from 'lib/api';

import AggregateNightShiftComponent from './aggregatenightshift';

export default async function Page() {
  const aggregatenightshifts = await getAggregateNightShiftComponent();
  console.log(getAggregateNightShiftComponent);
  return <AggregateNightShiftComponent aggregatenightshifts={aggregatenightshifts} />;
}

async function getAggregateNightShiftComponent() {
  return await api<ComponentProps<typeof AggregateNightShiftComponent>['aggregatenightshifts']>('aggregate/nightshift');
}
