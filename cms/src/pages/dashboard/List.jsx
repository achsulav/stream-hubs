import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import http from '../../http';
import { useSelector } from 'react-redux';

export const List = () => {

  const user = useSelector(st => st.user.value || '')

  const [staffs, setStaffs] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [categories, setCategories] = useState(0);
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    if(user.type == 'Admin') {
      http.get('cms/staffs')
        .then((response) => {
          setStaffs(response.data);
        });
    }
    
  }, []);
  const count_staff = staffs.length;


  useEffect(() => {
    http.get('cms/customers').then((response) => {
      setCustomers(response.data);
    });
  }, []);
  const count_customer = customers.length;


  useEffect(() => {
    http.get('cms/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);
  const count_category = categories.length;


  useEffect(() => {
    http.get('cms/brands').then((response) => {
      setBrands(response.data);
    });
  }, []);
  const count_brand = brands.length;


  useEffect(() => {
    http.get('cms/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  const count_product = products.length;


  useEffect(() => {
    http.get('cms/reviews').then((response) => {
      setReviews(response.data);
    });
  }, []);
  const count_review = reviews.length;


  useEffect(() => {
    http.get('cms/orders').then((response) => {
      setOrders(response.data);
    });
  }, []);
  const count_order = orders.length;




  return (
    <Container>
      <Row>
      <Col xs="12">
             <Row>
                <Col>
                    <h1 className='text-center mt-2'><u>Dashboard</u></h1>
               </Col>
           </Row>
       </Col>
       
       {user.type == 'Admin' ? <Col xs="12" md="3" className="mt-3">
        <Card>
            <Card.Header>Total Staffs<i className="fa-solid fa-users ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_staff}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>: null}

        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Customers<i className="fa-solid fa-user-friends ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_customer}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Categories<i className="fa-solid fa-tags ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_category}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Brands<i className="fa-solid fa-star ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_brand}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Products<i className="fa-solid fa-gifts ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_product}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Reviews<i className="fa-solid fa-comments ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_review}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="3" className="mt-3">
          <Card>
            <Card.Header>Total Orders<i className="fa-solid fa-money-bill ms-2"></i></Card.Header>
            <Card.Body>
              <Card.Title>{count_order}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

