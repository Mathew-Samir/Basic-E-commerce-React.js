import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import './Slider.css';

const Slider = () => {
    return (
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img className="d-block w-100 imageHight" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 imageHight" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 imageHight"n src={image3} alt="Third slide"/>
        </Carousel.Item>
    </Carousel>
    );
}

export default Slider;