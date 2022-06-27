import { User } from "firebase/auth";
import { getFirebaseCollectionWithQuery } from "./firebaseService";

export const validUsers = async (email: string): Promise<boolean> => {
  const users = await getFirebaseCollectionWithQuery<User>("/Authentication", [
    "email",
    "==",
    email,
  ]);
  return users.length > 0;
};
