import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getAllHotels } from '../../../shared/auth/actions/actions';
import { HotelsTemplate } from '../components/hotels/hotelsTemplate';
import { useStyles } from '../../login/styles/login';
import { Button } from '@material-ui/core';

interface DashboardProps {
    hotels?: []
}
function DashboardRender(props: DashboardProps) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const allHotels = props.hotels ?? [];

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
            {allHotels?.length > 0 && allHotels.map((hotel, index) => (<HotelsTemplate hotel={hotel} key={index} />))}
        </React.Fragment>
    );
}

const mapStateToProps = (state: any) => {
    return {
        hotels: state.authState.hotels,
    };
};

export const Dashboard = connect(mapStateToProps, undefined)(DashboardRender);

