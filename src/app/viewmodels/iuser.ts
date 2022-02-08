export interface IUser {
  fullName: string,
  email: string;
  pass: string;
  phoneNo: string[];
  address: {
    city: string;
    code: string;
    st: string
  };
}
