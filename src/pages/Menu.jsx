import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import coffeeImg from '../utils/img/gallery1a.jpg';
import dessertImg from '../utils/img/gallery4a.jpg';


const breakfast = [
    {
        id: 1,
        name: 'Pancake',
        description: 'Lorem ipsum, dolor, sit amet, consectetur, adipisicing elit',
        price: '50₺'
    },
    {
        id: 2,
        name: 'Tost',
        description: 'Lorem, ipsum, dolor sit',
        price: '65₺'
    },
    {
        id: 3,
        name: 'Yulaf Kasesi',
        description: 'Lorem ipsum, dolor, sit amet, consectetur',
        price: '70₺'
    }
];
const coffee = [
    {
        id: 1,
        name: 'Turkish Coffee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '50₺'
    },
    {
        id: 2,
        name: 'Mocha',
        description: 'Lorem ipsum dolor sit amet consectetur',
        price: '75₺'
    },
    {
        id: 3,
        name: 'Latte',
        description: 'Lorem ipsum dolor sit amet',
        price: '60₺'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Kruvasan',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, rerum',
        price: '80₺'
    },
    {
        id: 2,
        name: 'Tarçınlı Kek',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        price: '60₺'
    },
    {
        id: 3,
        name: 'Kurabiye',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: '40₺'
    }
];



function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menü</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='coffee bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Coffee</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {coffee.map((coffee) => (
                                <div key={coffee.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {coffee.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {coffee.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {coffee.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={coffeeImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={dessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    )
}

export default Menu;