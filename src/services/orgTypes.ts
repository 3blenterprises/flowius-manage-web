export interface IFirebaseObject {
  id: string;
}

export interface Project {
  ProjectName: string;
  description: string;
  docId: string;
  Name: string;
  manageId: string;
  id: string;
  ProjectId: string;
}

export interface Material {
  material: string;
  actualquantity: string;
  size: string;
  id: string;
  description: string;
  type: string;
  unit: string;
  quantity: string;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface ICases {
  materials: Material[];
  finalActivity: boolean;
  existingCase: boolean;
  timestamp: Timestamp;
  description: string;
  userId: string;
  caseName: string;
  geoLocation: string;
  done: boolean;
  id: string;
  parentActivityID: string;
  first: boolean;
}
