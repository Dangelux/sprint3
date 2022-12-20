import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PRODUCTOSCREADOS_GET_ENDPOINT } from '../connections/endpoints';
import ProductoCard from '../components/ProductoCard';

function ProductosCreados() {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[] )

    return ( 
        <Container className='mb-3 mt-3 text-center'>
            <h3>Productos Creados</h3>
            <Row className='justify-content-center'>
                <Col sm='12' md='8' lg='6'>
                    <Row className='justify-content-center' >
                        {productos.map(producto=><ProductoCard key={producto.idProducto} producto={producto} ></ProductoCard>)}
                    </Row>
                </Col>
            </Row>

        </Container>
     );
}

export default ProductosCreados;