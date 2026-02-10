import axiosInstance from "../../ApiInstacne/axiosInstance";

const loggedInUserId = localStorage.getItem("userId");
console.log(loggedInUserId);

export const countMusic = async (musicId: number) => {
  await axiosInstance.post(
    `http://localhost:8080/api/music/${musicId}/play`,
    null,
    {
      params: {
        userId: loggedInUserId,
      },
    },
  );
};
