import { ADD_A_RELEASE } from "../actions";
import { getReleaseList } from "../data/releaseList";
const existingReleases = getReleaseList();

export default function releaseReducers(state = existingReleases,action){
    switch (action.type) {
        case ADD_A_RELEASE :
            return [
                ...state,
                ...action.releases,
            ]
            default:
                return [
                  ...state,
                ]
    }
}