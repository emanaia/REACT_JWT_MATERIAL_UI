import React from 'react';

import { useListUsers } from '../../context/Context';

import CssBaseline from "@material-ui/core/CssBaseline";
import DirectionSnackbar from '../../components/material_ui/DirectionSnackbar'
import FullScreenDialog from '../../components/material_ui/FullScreenDialog'
import IconLabelTabs from '../../components/material_ui/IconLabelTabs'
import ProgressMobileStepper from '../../components/material_ui/ProgressMobileStepper'
import { Box } from '@material-ui/core';


function Home() {

    const { user, users, setUsers } = useListUsers();

    return (
        <>
            <CssBaseline />

            {user ? <Box >Olá, {user.email} ({user.id}) </Box> : null}

            <IconLabelTabs />

            {users ? users.map(u => (<Box key={u.id_usuario}>{u.email} </Box>)) : <Box >Aguarde </Box>}


            {/* <Box my={2}>
                {[...new Array(55)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}

                    <DirectionSnackbar />
                    <FullScreenDialog />
                    <ProgressMobileStepper />
            </Box> */}

        </>
    )
}

export default Home;