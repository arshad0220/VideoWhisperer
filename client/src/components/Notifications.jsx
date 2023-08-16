import React, { useContext } from 'react';
import { Button, Typography, Box } from '@material-ui/core'; // Make sure to import Typography and Box from Material-UI

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      {call.isReceivingCall && !callAccepted && (
        <Box>
          <Typography variant="h6">{call.name} is calling:</Typography>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Notifications;
