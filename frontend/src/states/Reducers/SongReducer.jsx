import {
  PLAY_SONG_REQUEST, // For Card
  PAUSE_SONG_REQUEST, // For Card
  PLAY_MASTER, // For SongBar
  PAUSE_MASTER, // For SongBar
} from "../Constants/SongConstant";
export const songReducer = (
  state = { masterSong: {}, isPlaying: false },
  action
) => {
  switch (action.type) {
    // For Card
    case PLAY_SONG_REQUEST:
      return { ...state, masterSong: action.payload, isPlaying: true };
    case PAUSE_SONG_REQUEST:
      return { ...state, isPlaying: false };
    // For SongBar
    case PLAY_MASTER:
      return { ...state, isPlaying: true };
    case PAUSE_MASTER:
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};
