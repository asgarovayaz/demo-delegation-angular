import { IUser } from '../users.service';

const data: IUser[] = [
  {
    id: 1,
    Role: 'LOC',
    FirstName: 'Some',
    LastName: 'John',
    Country: 'Azerbaijan',
    Email: 'john@agf.az',
    Status: 1
  },
  {
    id: 2,
    Role: 'NF',
    FirstName: 'Some',
    LastName: 'Marry',
    Country: 'Turkey',
    Email: 'marry@agf.az',
    Status: 1
  },
  {
    id: 3,
    Role: 'Observer',
    FirstName: 'Some',
    LastName: 'Jane',
    Country: '',
    Email: 'jane@agf.az',
    Status: 1
  }
];

export default data;
