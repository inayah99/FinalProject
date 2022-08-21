import React from "react";
import {
    Row,
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    CardGroup,
    Modal,
} from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios'
import './cards-styles.css'
import FormRecipe from '../recipe/form';
import ReactPaginate from 'react-paginate'

const CardsProduct = () => {
    const [recipes, setRecipes] = useState([]);
    const [formType, setFormType] = useState(null)
    const [formVisible, setFormVisible] = useState(false)
    const [formEdited, setEditedForm] = useState(false)

    const [page, setPage] = useState(0);
    const [limit] = useState(10);
    const [totalPages, setTotalPage] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword] = useState('');
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");


    const fetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/recipes?search_query=${keyword}&page=${page}&limit=${limit}`);
            setRecipes(response.data.result);
            setPage(response.data.page);
            setTotalPage(response.data.totalPage);
            setRows(response.data.totalRows)
        } catch(error){
            console.log(error);
        }
    }

    const deleteRecipe = async (recipeId) => {
        try {
            await axios.delete(`http://localhost:5000/recipes/${recipeId}`)
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }

    const handleEditRecipe = (data) => {
        setEditedForm(data)
        setFormType('edit')
        setFormVisible(true)
    }

    const changePage = ({ selected }) => {
        setPage(selected)
        if (selected === 9) {
            setMsg(
                "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
            );
        } else {
            setMsg("");
        }
    }


    useEffect(() => {
        fetchData();
    }, [page, keyword])

    return (
        <div className="d-flex container-fluid">
            <Container className='my-4 px-5 mx-2.5' fluid>
                <div className="d-flex container-content" id="container">
                    {/* Category*/}
                    <Row>
                        <Col className="d-flex align-items-center justify-content-between mb-2">
                            <h5 className="">
                                <small>Recipe</small>
                            </h5>
                            <DropdownButton
                                align='center'
                                title="Category"
                                id="dropdown-menu-align-center"
                            >
                                <Dropdown.Item eventKey={0}>Action</Dropdown.Item>
                                <Dropdown.Item eventKey={1}>Action2</Dropdown.Item>
                                <Dropdown.Item eventKey={2}>Action3</Dropdown.Item>
                            </DropdownButton>

                        </Col>
                        <hr className='divider' />
                        <Row className="g-4" md={5}>

                            {recipes.map((recipe) => (
                                <CardGroup>
                                    <Card className="cardz" key={recipe.id}>
                                        <Card.Img variant="top" src={recipe.url} className="cards-img" />
                                        <Card.Body>
                                            <Card.Title><h3>{recipe.name}</h3></Card.Title>
                                            <Card.Text>
                                                {recipe.deskripsi}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="d-flex justify-content-center" id="footer-cards">
                                            <Row>
                                                <Col>
                                                    <Button
                                                        variant="outline-warning"
                                                        onClick={() => handleEditRecipe(recipe)}
                                                    >Edit
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-danger"
                                                        onClick={() => deleteRecipe(recipe.id)}
                                                    >Delete</Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            ))}
                        </Row>
                        <Row className="g-4">
                            <p>Total Rows: {rows} Page: {rows ? page + 1 : 0} of {totalPages}</p>
                            <ReactPaginate
                                className="paginate"
                                previousLabel={"< Prev"}
                                nextLabel={"Next >"}
                                pageCount={Math.min(10, totalPages)}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                pageLinkClassName={"page-num"}
                                previousLinkClassName={"page-num"}
                                nextLinkClassName={"page-num"}
                                activeLinkClassName={"active"}
                                disabledLinkClassName={"disbled"}
                            />
                        </Row>
                    </Row>
                </div>
            </Container>
            <Modal show={formVisible} toggle={() => setFormVisible(!formVisible)}>
                <Modal.Header>{`Form ${formType} data`}</Modal.Header>
                <Modal.Body>
                    <FormRecipe
                        type={formType}
                        setFormVisible={setFormVisible}
                        formEdited={formEdited}
                        fetchData={fetchData}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CardsProduct;



