import { useSelector } from "react-redux";

export const useReels = () => useSelector(({ reels }) => reels);