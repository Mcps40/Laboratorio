import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21554,
  login: 'uaZHzt',
};

export const sampleWithPartialData: IUser = {
  id: 11413,
  login: 'K',
};

export const sampleWithFullData: IUser = {
  id: 23989,
  login: 'M',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
