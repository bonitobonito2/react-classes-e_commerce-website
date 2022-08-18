import React from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import TotalAmount from "./CartComponents/totalAmount/totalAmount";
import fetch from "../helper/fetch";
import { getSingleProduct } from "../Schemas/getSingleProduct";
import Modal from "../Modal/Modal";
import ChekoutButton from './CartComponents/actions/checkoutButton'
import ViewBagButton from "./CartComponents/actions/viewBagButton";
import CartProducts from "./CartComponents/products/product";
import { cartSliceActions } from "../../store/cartSlice";
import TotalPrice from "./CartComponents/totalPrice/totalPrice";
class CartProperties  extends React.Component{

}