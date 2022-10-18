export const getAuthHeader = (accessToken: string) => ({
  'Authorization': `JWT ${accessToken}`,
});