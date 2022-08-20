import React from "react"
import CardsCarouselProduct from "../../pages/cards/cardsCarousel";
import CardsProduct from "../../pages/cards/cardsProduct";
import CarouselProduct from "../../pages/carousel/carouselProduct";
import NavBar from "./navbar";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import { useEffect } from "react";


const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state) => state.auth)
    useEffect(() =>{
        dispatch(getMe())
    }, [dispatch])

    useEffect(() =>{
        if(isError){
            navigate("/")
        }
    }, [isError, navigate])
    return (
        <div>
            <NavBar />
            <CarouselProduct />
            <CardsCarouselProduct />
            <CardsProduct />
        </div>
    )
}

export default MainPage;