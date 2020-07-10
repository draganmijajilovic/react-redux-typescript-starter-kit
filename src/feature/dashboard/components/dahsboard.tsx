import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getAllHotels, addNewHotel } from '../../../shared/auth/actions/actions';
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
    const generateRandomString = (length: number) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const loadHotels = () => {
        dispatch(getAllHotels())
    }

    const dispatchAddNewHotel = () => {
        dispatch(addNewHotel(
            {
                name: generateRandomString(3),
                city: generateRandomString(7),
                country: generateRandomString(3),
                stars: 3,
                description: generateRandomString(152),
                price: 156,
                location: 50,
                user: generateRandomString(3),
            }
        ));
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
                onClick={dispatchAddNewHotel}
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

