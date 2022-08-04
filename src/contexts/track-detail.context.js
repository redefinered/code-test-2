import React, {useState} from 'react';
import {createContext} from 'react';

export const TrackDetailContext = createContext({
  selectedTrack: null,
  setSelectedTrack: () => {},
});

const TrackDetaiProvider = ({children}) => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  return (
    <TrackDetailContext.Provider value={{selectedTrack, setSelectedTrack}}>
      {children}
    </TrackDetailContext.Provider>
  );
};

export default TrackDetaiProvider;
