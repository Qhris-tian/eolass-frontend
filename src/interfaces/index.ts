export interface Status {
  accept: string
  rejected: string
  pending: string
  success: string
  danger: string
  info: string
  warning: string
  [key: string]: string
}

export enum StatusEnum {
  accept = 'accept',
  rejected = 'rejected',
  pending = 'pending',
  success = 'success',
  danger = 'danger',
  info = 'info',
  warning = 'warning'
}

export interface StringObject {
  [key: string]: boolean
}
