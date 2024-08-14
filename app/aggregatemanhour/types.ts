export interface AggregateManHourData {
  data: [
    {
      name: string;
      startAt: string;
      endAt: string;
      manHour: number;
      totalManHour: number;
    },
  ];
}
