import { UUID } from 'crypto';

export interface Employee {
  data: {
    id: UUID;
    name: string;
    email: string;
    phone: string;
    initial: string;
    hiredDate: string;
    color: string;
    isCalendarVisible: boolean;
    role: string;
  }[];
}

export interface Partner {
  data: {
    id: UUID;
    name: string;
    initial: string;
    phone: string;
  }[];
}
