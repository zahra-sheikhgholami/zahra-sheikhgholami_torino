import QueryString from "qs";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" }
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  try {
    const res = await fetch(`${url}`,cache);
    const json = await res.json();
    return json;
  } catch (error) {
    toast.error("مشکلی رخ داده است.")
    console.error(error);
    return false
  }
};

export {serverFetch}