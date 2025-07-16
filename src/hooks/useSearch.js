import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { toast } from "react-hot-toast";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { showInput, setShowInput } = useContext(MenuContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[.,]/;
    // true o false
    const hasInvalidChars = regex.test(query);

    if (hasInvalidChars) {
      toast.error("Commas and periods are not allowed");
      return;
    } else if (!query.length) {
      toast.error("Please enter a search term");
      return;
    }

    navigate(`/results/${query}`);
    setQuery("");
    showInput && setShowInput(false);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    let queryRedeable = value.trim().split(" ").join("");
    setQuery(queryRedeable);
  };

  return { query, handleSubmit, handleChange };
};
