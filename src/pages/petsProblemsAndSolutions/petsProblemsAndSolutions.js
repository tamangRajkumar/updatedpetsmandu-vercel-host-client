import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import allPetsLists from "../../components/AllPetsLists/allPetsList";
import Cards from "../../components/cards/CardsVerticalAligned";
import { fetchPostsByCategory } from "../../api";
import { useSelector } from "react-redux";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";

const PetsProblemsAndSolutions = () => {
  const [posts, setPosts] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.authUser.currentUser.user._id);

  useEffect(() => {
    if (posts == null) {
      fetchPosts();
      setIsLoading(true);
    }
  }, [posts == null]);

  const fetchPosts = async () => {
    try {
      let category = "pets_problems_and_solutions";
      const { data } = await fetchPostsByCategory(category);
      setPosts(data.posts);
      data && setIsLoading(false);

      // console.log(data);
    } catch (error) {
      console.log("Error => ", error);
    }
  };

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
          <h1 className="mt-10 font-bold  text-2xl">
            Pets Problems And Solutions
          </h1>

          {isLoading ? (
            <div className="mx-10 grid md:grid-cols-2 lg:grid-cols-2">
              <CardSkeleton cards={4} />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {posts &&
                posts.map((post) => {
                  return (
                    <>
                      <div key={post._id} className="flex">
                        <Cards
                          description={post.description}
                          image={post.image.url}
                          address={post.address}
                          title={post.title}
                          post={post}
                          userId={userId}
                          token={token}
                          fetchPosts={fetchPosts}
                          isFavoritePost={
                            favoritePosts &&
                            favoritePosts.some(
                              (favPost) => favPost["_id"] === post._id
                            )
                          }
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

export default PetsProblemsAndSolutions;
