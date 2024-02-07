import { userData } from "../usersDatabaseContext/actions";
import {
  ActionType,
  ManageContextTypeState,
  SET_STATE,
  SET_USER,
  manageMainContentEnum,
} from "./actions";

export const initialState = {
  usersList: manageMainContentEnum.USER_LIST,
  letterCreator: manageMainContentEnum.CURRENT_USER_DOESNT_HAS_LETTER,
  user: {} as userData,
};

export const elementsOnBoardReducer: React.Reducer<
  ManageContextTypeState,
  ActionType
> = (state: ManageContextTypeState, action: ActionType) => {
  switch (action.type) {
    case SET_STATE:
      if (
        action.payload ===
          manageMainContentEnum.CURRENT_USER_DOESNT_HAS_LETTER ||
        action.payload === manageMainContentEnum.CURRENT_USER_HAS_LETTER ||
        action.payload === manageMainContentEnum.LETTER_EDITOR
      ) {
        return {
          ...state,
          letterCreator: action.payload,
        };
      } else {
        return {
          ...state,
          usersList: action.payload as manageMainContentEnum,
        };
      }
    case SET_USER:
      return { ...state, user: action.payload as userData };
    default:
      console.log("something went wrong");
      return state;
  }
};
