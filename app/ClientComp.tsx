"use client";
import { ExampleTable, db, getExampleTable } from "@/lib/drizzle";

import { useEffect, useState } from "react";

export default function ClientComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getExampleTable();
      //   setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addUserToDatabase = async () => {
    const newUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/john-doe-profile-image.jpg",
    };

    try {
      await db.insert().into(ExampleTable).values(newUser);
      console.log("New user added to the database!");
      fetchData();
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  console.log(data);
  return <div>Client Comp</div>;
}
