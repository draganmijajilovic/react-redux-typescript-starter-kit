import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getAllHotels } from '../../../shared/auth/actions/actions';
import { HotelsTemplate } from '../components/hotels/hotelsTemplate';
import { useStyles } from '../../login/styles/login';
import { Button } from '@material-ui/core';

interface DashboardProps {
    hotels?: []
    details?: {}
}
function DashboardRender(props: DashboardProps) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const allHotels = props.hotels ?? [];
    // @ts-ignore
    const details = props?.details?.description ?? 'no selected hotel';

    const loadHotels = () => {
        dispatch(getAllHotels())
    }
    return (
        <React.Fragment>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                style={{ maxWidth: '150px' }}
                className={classes.submit}
                onClick={loadHotels}
            >
                Load Hotels
            </Button>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                style={{ maxWidth: '150px' }}
                className={classes.submit}
                onClick={loadHotels}
            >
                Add new hotel:
            </Button>
            <div>
                <p>hotel deatails description</p>
                <p>{details}</p>
            </div>
            {allHotels?.length > 0 && allHotels.map((hotel, index) => (<HotelsTemplate hotel={hotel} key={index} />))}
        </React.Fragment>
    );
}

const mapStateToProps = (state: any) => {
    return {
        hotels: state.authState.hotels,
        details: state.authState.hotelDetail
    };
};

export const Dashboard = connect(mapStateToProps, undefined)(DashboardRender);

