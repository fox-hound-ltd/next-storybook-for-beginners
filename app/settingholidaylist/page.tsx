import { ComponentProps } from 'react';

import { api } from 'lib/api';

import SettingHolidayListComponent from './settingholidaylist';

export default async function Page() {
  const nowMonth = new Date().getMonth();
  const settingholidaylist = await getSettingHolidayListComponent(nowMonth);
  return <SettingHolidayListComponent settingholidaylist={settingholidaylist} />;
}
async function getSettingHolidayListComponent(nowMonth: number) {
  return await api<ComponentProps<typeof SettingHolidayListComponent>['settingholidaylist']>(
    `setting/holiday?month=${nowMonth}`,
  );
}
