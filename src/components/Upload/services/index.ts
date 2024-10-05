import axios from "axios";

export const getFiles = async (limit: number) => {
  return await axios({
    baseURL: "https://api.uploadcare.com",
    url: "/files/?limit=" + limit,
    method: "get",
    headers: {
      Authorization: `Uploadcare.Simple ${process.env.NEXT_PUBLIC_UPLOADCARE_PUB_KEY}:${process.env.NEXT_PUBLIC_UPLOADCARE_SECRET_KEY}`,
      Accept: "application/vnd.uploadcare-v0.7+json",
    },
  });
};
export const deleteFile = async (fileId: string) => {
  return await axios({
    baseURL: "https://api.uploadcare.com",
    url: `/files/${fileId}/storage/`,
    method: "delete",
    headers: {
      Authorization: `Uploadcare.Simple ${process.env.NEXT_PUBLIC_UPLOADCARE_PUB_KEY}:${process.env.NEXT_PUBLIC_UPLOADCARE_SECRET_KEY}`,
      Accept: "application/vnd.uploadcare-v0.7+json",
    },
  });
};
