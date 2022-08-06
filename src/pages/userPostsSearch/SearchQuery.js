import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUserSearchRequest } from "../../api";
import Card from "../../components/cards/CardsVerticalAligned";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";

const SearchQuery = () => {
  const { query } = useParams();
  const [posts, setPosts] = useState();
  const [isDisplayed, setIsDisplayed] = useState(false);
  console.log(query);
  const [isLoading, setIsLoading] = useState(false);
  const userId = useSelector((state) => state.authUser.currentUser.user._id);

  useEffect(() => {
    setIsLoading(true);
    setIsDisplayed(false);
    fetchPosts();
    setTimeout(() => {
      setIsDisplayed(true);
    }, 3000);
  }, [query]);

  const fetchPosts = async () => {
    const { data } = await fetchUserSearchRequest(query);
    if (data) {
      // console.log(data);
      setPosts(data);
      setIsLoading(false);
    }
  };

  posts && console.log(posts);

  const favoritePosts = JSON.parse(
    window.localStorage.getItem("favoritePostsList")
  );
  // console.log(favoritePosts);

  const token = useSelector((state) => state.authUser.currentUser.token);
  // console.log(token);

  return (
    <>
      {" "}
      <div>
        {/* Search Filters */}
        <div className="text-center">
          {posts?.length > 0 ? (
            <h1 className="font-bold  text-2xl">
              Search results for "{query}"
            </h1>
          ) : (
            isDisplayed && (
              <h1 className=" font-bold flex justify-center items-center  h-[100vh]   text-2xl">
                Search Result Not Found, Please try again!
              </h1>
            )
          )}

          {isLoading ? (
            <div className="mx-10 grid md:grid-cols-1 lg:grid-cols-2">
              <CardSkeleton cards={4} />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {posts &&
                posts.map((post) => {
                  return (
                    <>
                      <div key={post._id} className="flex">
                        <Card
                          description={post.description}
                          image={post.image.url}
                          address={post.address}
                          title={post.title}
                          post={post}
                          userId={userId}
                          token={token}
                          fetchPosts={fetchPosts}
                          isFavoritePost={favoritePosts?.some(
                            (favPost) => favPost["_id"] === post._id
                          )}
                        />
                      </div>
                    </>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchQuery;
