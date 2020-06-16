import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector } from 'react-redux';


MainPage.propTypes = {};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    console.log('List of photos: ', photos);

    return (
        <div className="photo-main">
            <Banner title="Your awsome photos" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">Add New Photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;