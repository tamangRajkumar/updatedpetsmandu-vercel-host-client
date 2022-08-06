import axios from "axios";

//User Sign Up
export const signUpUser = (signUpData) => {
  return axios.post(`/api/signup`, signUpData);
};

//User Log In
export const userLogIn = (userLogInData) => {
  return axios.post(`/api/login`, userLogInData);
};

// Image Upload in Clodinary and gets Public key and Image Url form cloudinary
export const uploadImage = (formData) => {
  return axios.post(`/api/upload-image`, formData);
};

// Post Submit
export const postSubmit = (postSubmitData, token) => {
  return axios.post(`/api/create-post`, postSubmitData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// fetch Posts
export const fetchPosts = (token) => {
  return axios.get(`/api/user-posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete Post
export const deletePost = (postId, token) => {
  return axios.delete(`/api/delete-post/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Fetch Adopt Pets Posts
export const fetchPostsByCategory = (category) => {
  return axios.post(`/api/fetchpostsbycategory`, {
    category,
  });
};

//Get individual post
export const fetchIndividualPost = (postId, token) => {
  return axios.get(`/api/fetchindividualpost/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//fetch post to edit in Modal
export const fetchPostToEdit = (postId) => {
  return axios.post(`/api/fetchposttoedit`, {
    postId,
  });
};

// Update post
export const updatePost = (postSubmitData, postId) => {
  return axios.put(`/api/updatepost/${postId}`, postSubmitData);
};

// Update User Profile
export const updateUserProfile = (postSubmitData, token) => {
  return axios.put(`/api/update-user-profile`, postSubmitData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Handle comments in the post
export const postCommentSubmit = (addComment, postId, token) => {
  return axios.post(
    `/api/submit-post-comment`,
    { addComment, postId },

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Handle Delete Post Comment

export const deletePostComment = (postId, commentId, token) => {
  return axios.put(
    `/api/delete-post-comment`,
    { postId, commentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// fetch post comments data only
export const fetchPostCommentsDataOnly = (postId, token) => {
  return axios.post(
    `/api/post-comments-data`,
    { postId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Add Favorite Post Data
export const addFavoritePost = (post, token) => {
  return axios.post(
    `/api/add-favorite-post`,
    { post },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// fetch search data
export const fetchUserSearchRequest = (query) => {
  return axios.get(`/api/user-search-request/${query}`);
};
