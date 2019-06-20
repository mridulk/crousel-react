import React, { Component } from 'react'
import './Slider.css'
import image1 from './Mobile.png'
import image2 from './Mobile2.png'
import image3 from './Mobile5.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import jQuery from 'jquery'
window.jQuery = jQuery
require('owl.carousel')

class Slider extends Component {
    componentDidMount(){
        $(document).ready(function() {
 
            var owl = $("#owl-demo");
           
            owl.owlCarousel({
                items : 3.5, //3.5 items above 1000px browser width
                itemsDesktop : [1000,3], //4 items between 1000px and 901px
                itemsDesktopSmall : [900,2], // betweem 900px and 601px
                itemsTablet: [600,2], //2 items between 600 and 0
                itemsMobile : false// itemsMobile disabled - inherit from itemsTablet option
            });
           
            // Custom Navigation Events
            $(".next").click(function(){
              owl.trigger('owl.next');
            })
            $(".prev").click(function(){
              owl.trigger('owl.prev');
            })
            $(".play").click(function(){
              owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
            })
            $(".stop").click(function(){
              owl.trigger('owl.stop');
            })
           
          });
    }
    
    render() {
        const tasks = [
            {
                task: 'GET SALES AND EARN COMMISION',
                company: 'YOUNG ENGINE',
                mission: 'Mission 1',
                taskno: 'TASK1',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 500'
            },
            {
                task: 'DO DIGITAL MARKETING AND EARN',
                company: 'YOUNG ENGINE',
                mission: 'Mission 2',
                taskno: 'TASK2',
                noofdays: '14 DAYS TO APPLY',
                amount: ' INR 550'
            },
            {
                task: 'MAKE PROJECT ON CLEAN INDIA',
                company: 'YOUNG ENGINE',
                mission: 'Mission 3',
                taskno: 'TASK3',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 900'
            },
            {
                task: 'SELL PRODUCTS AND EARN COMMISION',
                company: 'YOUNG ENGINE',
                mission: 'Mission 3',
                taskno: 'TASK4',
                noofdays: '13 DAYS TO APPLY',
                amount: ' INR 300'
            }
        ]
        return (
            <div>
                
            <OwlCarousel id="owl-demo" className="owl-carousel owl-theme container container-class">
                    {tasks.map(ar=>
                        <div className="item">
                        <img src={image1} width="100px" height="100px" className="rounded-circle " />
                        <h4>{ar.task}</h4>
                        <p>{ar.company}</p>
                        <p>{ar.mission}</p>
                        <p>{ar.taskno}</p>
                        <p>{ar.noofdays}</p>
                        <h5><strong>{ar.amount}</strong></h5>
                    </div>

                    )}
                   


                
                    </OwlCarousel>
                <div className="customNavigation">
                    <a className="btn prev">Previous</a>
                    <a className="btn next">Next</a>
                    <a className="btn play">Autoplay</a>
                    <a className="btn stop">Stop</a>
                </div>
                
            </div>
        )
    }
}



export default Slider
