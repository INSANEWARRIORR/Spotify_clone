import {
  PLAY_SONG_REQUEST, // For Card
  PAUSE_SONG_REQUEST, // For Card
  PLAY_MASTER, //For SongBar
  PAUSE_MASTER, // For SongBar
} from "../Constants/SongConstant";

// For Card
export const playSong = (song) => async (dispatch) => {
  dispatch({ type: PLAY_SONG_REQUEST, payload: song });
};
export const pauseSong = () => async (dispatch) => {
  dispatch({ type: PAUSE_SONG_REQUEST });
};

// For SongBar
export const pauseMaster = () => async (dispatch) => {
  dispatch({ type: PAUSE_MASTER });
};
export const playMaster = () => async (dispatch) => {
  dispatch({ type: PLAY_MASTER });
};
