import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  deleteDoc,
  writeBatch,
} from "firebase/firestore/lite";
import firebase from "./firebaseInit";
import { IFirebaseObject } from "./orgTypes";

const { db } = firebase;

export const getFirebaseCollection = <T>(url: string): Promise<T[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const citiesCol = collection(db, url);
      const citySnapshot = await getDocs(citiesCol);
      const ret = citySnapshot.docs.map((doc) => doc.data() as T);
      return resolve(ret);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateCreateSingleDocument = <T>(
  url: string,
  id: string,
  data: T
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(collection(db, url), id);
      await setDoc(docRef, data, { merge: true });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getFirebaseDocument = <T>(url: string, id: string): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    const docRef = doc(db, url, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      resolve(docSnap.data() as T);
    } else {
      reject("NO DOCUMENT");
    }
  });
};

export const deleteDocument = (url: string, id: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, url, id));
      resolve(id);
    } catch (error) {
      reject(error);
    }
  });
};

export const getFirebaseCollectionWithQuery = <T>(
  url: string,
  Query: any[]
): Promise<T[]> => {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, url), where(Query[0], Query[1], Query[2]));
    const ret: T[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ret.push(doc.data() as T);
    });
    resolve(ret);
  });
};

export const writeFirebaseBatch = <T extends IFirebaseObject>(
  url: string,
  data: T[]
): Promise<T[]> => {
  return new Promise(async (resolve, reject) => {
    const batch = writeBatch(db);
    data.forEach((d) => {
      batch.set(doc(collection(db, url), d.id), d);
    });
    await batch.commit();
    resolve(data);
  });
};
