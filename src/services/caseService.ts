import { getFirebaseCollection } from "./firebaseService";
import { ICases } from "./orgTypes";

export const getProjectCases = async (projectID: string): Promise<ICases[]> => {
  return getFirebaseCollection<ICases>(`/Project/${projectID}/cases`);
};
