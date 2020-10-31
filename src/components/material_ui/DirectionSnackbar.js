import React from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}



export default function DirectionSnackbar() {

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [ShowData, setShowData] = React.useState('true')

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      {ShowData && <div>


        <Button onClick={handleClick(TransitionUp)}>
          <Chip
            label='Click to up'
            onDelete={() => setShowData(false)}
          />
        </Button>

        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="I love snacks"
          key={transition ? transition.name : ''}
        />

      </div>
      }
    </>
  );
}