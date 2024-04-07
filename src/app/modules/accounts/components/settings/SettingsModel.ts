export interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  EmployeeID: string
  IndiaPhoneNo: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  currency: string
  IDCardNumber: string,
  AccessDoorNumber: string,
  PassportNumber: string,
  PlaceOfWork: string,
  VisaType: string,
  VisaNumber: string,
  Department: string,
  InternalJobTitle: string,
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedAccounts {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    email: boolean
    phone: boolean
  }
  billingUpdates: {
    email: boolean
    phone: boolean
  }
  newTeamMembers: {
    email: boolean
    phone: boolean
  }
  completeProjects: {
    email: boolean
    phone: boolean
  }
  newsletters: {
    email: boolean
    phone: boolean
  }
}

export interface IDeactivateAccount {
  confirm: boolean
}

export const profileDetailsInitValues: IProfileDetails = {
  avatar: '/media/avatars/300-1.jpg',
  fName: 'Saji',
  lName: 'Babu',
  EmployeeID: '011',
  company: 'Keenthemes',
  IndiaPhoneNo: '044 3276 454 935',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  country: 'Oman',
  language: '',
  timeZone: '',
  currency: '',
  IDCardNumber: '8889999118881',
  AccessDoorNumber: '2211',
  PassportNumber: '663773632',
  VisaType: 'TM',
  PlaceOfWork: 'Tamimah Telecom',
  VisaNumber: '3773732',
  Department: 'Business',
  InternalJobTitle: 'HR manager',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
}

export const updateEmail: IUpdateEmail = {
  newEmail: 'support@keenthemes.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
}
