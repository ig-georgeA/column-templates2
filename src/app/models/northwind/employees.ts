import { AddressType } from './address';

export interface EmployeesType {
  employeeID: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: Date;
  hireDate: Date;
  address: AddressType;
  managerID: number;
  notes: string;
  territoryIDs: Object[];
  avatarUrl: string;
}
