import * as admin from "firebase-admin";
import { firestore } from "firebase-admin";
import { join } from "path";

export class Firepl {
  db: firestore.Firestore;

  constructor(serviceAccountPath: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require(join(process.cwd(), serviceAccountPath));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    this.db = admin.firestore();
  }

  /**
   * get data from collectionsReference or documentReference
   * @param ref firestore.CollectionReference or firestore.DocumentReference
   */
  async getData(
    ref: firestore.CollectionReference | firestore.DocumentReference
  ) {
    try {
      const snapShot = await ref.get();
      if ("docs" in snapShot) {
        return snapShot.docs.map((d) => d.data());
      }
      return snapShot.data();
    } catch (e) {
      console.error(e);
    }
  }
}
