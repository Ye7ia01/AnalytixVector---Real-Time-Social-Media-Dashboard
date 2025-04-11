import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useSearchParams } from "react-router";

export default function CallbackPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get("code");
  const [successData, error, loading] = useAxios(
    `http://localhost:5000/auth/callback?code=${code}`,
    "GET",
    code,
    code
  );

  useEffect(() => {
    if (successData) {
      navigate("/", { replace: true });
    }
  }, [successData]);

  if (loading) {
    return <div> Loading... you will be directing to Home Page</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return <div>CallbackPage</div>;
}
