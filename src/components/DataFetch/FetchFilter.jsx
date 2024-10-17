import React , {useState , useEffect} from "react";
import "./FetchData.css";
import { fetchGenreData } from "./api";

const FetchFilter = async () => {
  try {
    const data = await fetchGenreData(); // Fetches all genres
    return data; // Return the genre data
  } catch (error) {
    console.error('Error fetching genre data:', error);
    throw error;
  }
};

export default FetchFilter;
