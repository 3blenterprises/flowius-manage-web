import { deleteDocument, getFirebaseCollection } from "./firebaseService";
import { ICases } from "./orgTypes";

export const getProjectCases = async (projectID: string): Promise<ICases[]> => {
  return getFirebaseCollection<ICases>(`/Project/${projectID}/cases`);
};

export const deleteCase = async (
  projectID: string,
  caseID: string
): Promise<string> => {
  return deleteDocument(`/Project/${projectID}/cases/`, caseID);
};
