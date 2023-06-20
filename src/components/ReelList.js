import { useCallback, useEffect, useInsertionEffect, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import Reel from "./Reel";
import "./ReelList.css";
import { useReels } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { addReels } from "../redux/slice/reels";
import { API } from "../utils/constants";
import { api } from "../api";

export default function ReelList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(API.startPage);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const reels = useReels();
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useInsertionEffect(() => {
    (async () => {
      const { data: newComments } = await api.comments(page);
      dispatch(addReels(newComments));
      setHasMore(newComments?.length > 0);
      setIsLoading(false);
    })();
  }, [page, dispatch]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting, hasMore, loadMore]);

  return (
    <ul className="reels-list">
      {reels?.map((reel, index) => (
        <Reel
          key={index}
          mesureRef={index === reels?.length - 1 ? measureRef : null}
          reel={reel}
        />
      ))}
      {isLoading && <li>Loading...</li>}
    </ul>
  );
}
