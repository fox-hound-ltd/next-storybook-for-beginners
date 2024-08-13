import { ComponentProps } from 'react';

import { api } from 'lib/api';

import EmployeeList from './employeelist';

export default async function Page() {
  const employees = await getEmployees();
  const partners = await getPartners();
  console.log(employees);
  console.log(partners);
  return <EmployeeList employees={employees} partners={partners} />;
}

async function getEmployees() {
  return await api<ComponentProps<typeof EmployeeList>['employees']>('employee');
}

async function getPartners() {
  return await api<ComponentProps<typeof EmployeeList>['partners']>('partner');
}
