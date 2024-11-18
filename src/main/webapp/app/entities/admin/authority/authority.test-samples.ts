import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '2b054560-c3c5-4f55-93dc-5051f0e73638',
};

export const sampleWithPartialData: IAuthority = {
  name: 'd8d5f4ab-c9e1-47d8-8ece-c9f71f245c2e',
};

export const sampleWithFullData: IAuthority = {
  name: 'cbbb60b4-386a-4540-ba7c-953ebe0f0140',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
