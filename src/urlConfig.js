/* const baseUrl = process.env.API || "herokuapp.com";
 */export const api = 'http://localhost:9000/api';
const baseUrl = "http://localhost:9000/api";

/* export const api = `${baseUrl}/api`;
 */
export const generatePublicUrl = (fileName) => {
  return `http://localhost:9000/public/${fileName}`;
};
