export type ITransferFromState = {
  date?: string;
  flightNumber?: string;
  nameOfSignage?: string;
  guests?: number;
  amountBags?: number;
  phone?: string;
};

export type ITransferToState = {
  location?: string;
  date?: string;
  time?: string;
  guests?: number;
  amountBags?: number;
  phone?: string;
};

export type ITransferState = {
  from: ITransferFromState;
  to: ITransferToState;
};

export type IContactState = {
  locale?: string;
  name: string;
  email: string;
  phoneNumber: string;
};
