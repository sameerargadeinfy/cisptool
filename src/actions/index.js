export const ADD_A_RELEASE = "ADD_A_RELEASE";
export const GET_ALL_RELEASES = "GET_ALL_RELEASES";

export function addARelease(newRelease) {
  return {
    type: ADD_A_RELEASE,
    newRelease,
  };
}
export function getAllReleases(releases) {
  return {
    type: GET_ALL_RELEASES,
    releases,
  }
}
export function getAllReleases_AsyncActionCreator(releases) {
  return (dispatch) => {
      dispatch(getAllReleases(releases));
  };
}
