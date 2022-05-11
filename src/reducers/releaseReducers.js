import { ADD_A_RELEASE, GET_ALL_RELEASES } from "../actions";
import { getReleaseList } from "../data/releaseList";
const existingReleases = getReleaseList();

export default function releaseReducers(state = existingReleases,action){
    switch (action.type) {
        case GET_ALL_RELEASES:
            return [
              ...state,
              ...action.releases,
            ]
        case ADD_A_RELEASE :
            return [
                action.newRelease,
                ...state,
            ]
            default:
                return [
                  ...state,
                ]
    }
}