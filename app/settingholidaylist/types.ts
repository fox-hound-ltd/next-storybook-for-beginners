import { UUID } from 'crypto';

export interface SettingHolidayListData {
  data: {
    id: UUID;
    date: string;
    name: string;
    isNationalHoliday: boolean;
  }[];
}
