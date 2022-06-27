import { User } from "firebase/auth";
import {
  getFirebaseCollection,
  getFirebaseCollectionWithQuery,
} from "./firebaseService";
import { Project } from "./orgTypes";

export const validUsers = async (email: string): Promise<boolean> => {
  const users = await getFirebaseCollectionWithQuery<User>("/Authentication", [
    "email",
    "==",
    email,
  ]);
  return users.length > 0;
};

export const getProjects = async (): Promise<Project[]> => {
  return getFirebaseCollection<Project>("/Project");
};
