import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("/apps.json");
        setApps(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
};

export default useApps;
