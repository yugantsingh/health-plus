import { fromJSON } from "postcss";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";

function MedData() {
  const [medData, setMedData] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "MedData");
    const q = query(collectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMedData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
        );
    });
    return unsubscribe
  },[]);
  console.log(medData)
  return <div>
      {medData.map(data => <div key={data.id}>{medData.title}</div>)}
  </div>;
}

export default MedData;
