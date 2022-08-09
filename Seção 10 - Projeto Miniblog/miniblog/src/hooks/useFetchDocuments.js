import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [canceled, setCanceled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (canceled) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        // search
        if (search) {
          q = await query(
            collectionRef,
            where('tagsArray', 'array-contains', search),
            orderBy('createdAt', 'desc')
          );
        } else {
          q = await query(collectionRef, orderBy('createdAt', 'desc'));
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, [docCollection, search, uid, canceled]);

  useEffect(() => {
    setCanceled(true);
  }, []);

  return { documents, loading, error };
};
