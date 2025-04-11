//! if flag="", return, else invoke the request, post request put a dependency and flag="" at first time render to prevent invoking the request at the first time render and make useEffect listen to the next change in dependency which will happen when the form is submitted, whereas if useEffect rendered the first time without a dependency it won't listen to the dependency changes and cannot add the dependency to it after the first render
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/GlobalContext";
function useAxios(
  api,
  method,
  flag = "",
  dependency = "",
  body = "",
  showToasts,
  dependency2
) {
  const AuthState = useAuthState();
  const AuthDispatch = useAuthDispatch();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchData() {
    setLoading(true);

    const options = {
      url: api,
      method: method,
      headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer 2vYtdImedq7DUh2RoIhBixCC074_2bjGjTog6o9JLProVYDbY`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      data: body,
    };
    try {
      //axios.defaults.withCredentials=true;

      const res = await axios(options);
      const axiosData = await res.data;
      if (axiosData.status === false) {
        setError(axiosData.message);
        setData(null);
      } else {
        setData(axiosData);
        setError(null);
      }
      setLoading(false);
    } catch (axiosError) {
      setError(axiosError);
      setLoading(false);

      if (axiosError.response.status === 401) {
        localStorage.removeItem("userData");
        AuthDispatch({ type: "setUserData", payload: null });
        navigate("/login");
      }
    }
  }
  useEffect(() => {
    if (flag === "" || flag === undefined || flag === false) {
      setLoading(false);
      return;
    }
    fetchData();
  }, [dependency, dependency2]);

  return [data, error, loading];
}

export default useAxios;
