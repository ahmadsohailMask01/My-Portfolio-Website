import { useEffect, useState } from "react";

const useGithubInfo = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ahmadsohailMask01")
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((error) => new Error(error));
  }, []);
  return result;
};

export default useGithubInfo;
