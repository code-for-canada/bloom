import { Prisma } from '@prisma/client';
import { randomInt } from 'node:crypto';

export const addressFactory =
  (): Prisma.AddressCreateWithoutBuildingAddressInput =>
    [
      vancouverDowntownAddress,
      victoriaAddress,
      surreyAddress,
      burnabyAddress,
      richmondAddress,
      kelownaAddress,
      nanaimoAddress,
      kamloopsAddress,
    ][randomInt(8)];

export const vancouverDowntownAddress = {
  placeName: 'Downtown Vancouver',
  city: 'Vancouver',
  county: 'Metro Vancouver',
  state: 'BC',
  street: '750 Robson St',
  zipCode: 'V6Z 1A1',
  latitude: 49.2827,
  longitude: -123.1207,
};

export const victoriaAddress = {
  placeName: 'Downtown Victoria',
  city: 'Victoria',
  county: 'Capital Regional District',
  state: 'BC',
  street: '812 Government St',
  zipCode: 'V8W 1W9',
  latitude: 48.4284,
  longitude: -123.3656,
};

export const surreyAddress = {
  placeName: 'Surrey City Centre',
  city: 'Surrey',
  county: 'Metro Vancouver',
  state: 'BC',
  street: '10233 King George Blvd',
  zipCode: 'V3T 2W1',
  latitude: 49.1913,
  longitude: -122.8490,
};

export const burnabyAddress = {
  placeName: 'Metrotown',
  city: 'Burnaby',
  county: 'Metro Vancouver',
  state: 'BC',
  street: '4720 Kingsway',
  zipCode: 'V5H 4N2',
  latitude: 49.2276,
  longitude: -123.0076,
};

export const richmondAddress = {
  placeName: 'Richmond Centre',
  city: 'Richmond',
  county: 'Metro Vancouver',
  state: 'BC',
  street: '6551 No. 3 Rd',
  zipCode: 'V6Y 2B6',
  latitude: 49.1666,
  longitude: -123.1336,
};

export const kelownaAddress = {
  placeName: 'Downtown Kelowna',
  city: 'Kelowna',
  county: 'Central Okanagan',
  state: 'BC',
  street: '1435 Water St',
  zipCode: 'V1Y 1J4',
  latitude: 49.8863,
  longitude: -119.4966,
};

export const nanaimoAddress = {
  placeName: 'Downtown Nanaimo',
  city: 'Nanaimo',
  county: 'Regional District of Nanaimo',
  state: 'BC',
  street: '100 Cameron Rd',
  zipCode: 'V9R 2X1',
  latitude: 49.1659,
  longitude: -123.9401,
};

export const kamloopsAddress = {
  placeName: 'Downtown Kamloops',
  city: 'Kamloops',
  county: 'Thompson-Nicola',
  state: 'BC',
  street: '450 Lansdowne St',
  zipCode: 'V2C 1Y3',
  latitude: 50.6745,
  longitude: -120.3273,
};
