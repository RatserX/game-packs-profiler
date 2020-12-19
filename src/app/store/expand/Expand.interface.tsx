export interface Instance {
  [key: string]: InstanceValue;
}

export interface InstanceValue {
  isEnabled: boolean;
}
