import {Button ,Card } from 'react-bootstrap';
const Product = (props) => {
    const { product } = props;
    return (
        <>
            <div className='container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.image} alt={product.title}/>
                            <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
        </>
    );
}
export default Product;