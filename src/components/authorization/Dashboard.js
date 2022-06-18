import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import {Navigation} from "../index";
import Headroom from "react-headroom";
import { getFirestore, query, collection, getDocs, where, setDoc, doc } from 'firebase/firestore';


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const q = await query(collection(db, "users"), where("uid", "==", user?.uid));
      console.log(q)
      const querySnapshot = await getDocs(q)
      console.log(querySnapshot)
      if (querySnapshot.docs.length > 0) {
        const data = querySnapshot.docs[0].data();
        setName(data.name);
      } else {
        fetchUserName()
      }
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user)
      window.location.assign("/login");
    else
     fetchUserName();
  }, [user, loading]);

  return (
      <div>
        <Headroom>
          <Navigation/>
        </Headroom>
      <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
      </div>
  );
}

export default Dashboard;
