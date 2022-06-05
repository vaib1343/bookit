import React from "react";
import { useSelector } from "react-redux";
import Head from 'next/head';
import Image from 'next/image';
import {Carousel} from 'react-bootstrap';
import RoomFeature from "./RoomFeature";

const RoomDetail = () => {
  const { roomDetail } = useSelector((state) => state.room);
  return (
    <>
    <Head>
        <title>{roomDetail.name} -bookit</title>
    </Head>
      <div className="container container-fluid">
        <h2 className="mt-5">{roomDetail.name}</h2>
        <p>{roomDetail.address}</p>
        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="no_of_reviews">({roomDetail.numOfReviews} Reviews)</span>
        </div>
        
        <Carousel>
            {
                roomDetail?.images?.map(image => (
                    <Carousel.Item key={image.public_id}>
                        <div style={{width: '100px', height:'440px'}}>
                            <Image className="m-auto display-block" src={image.url} alt={roomDetail.name} layout='fill'/>
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
        

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{roomDetail.description}</p>

            <RoomFeature roomDetail={roomDetail}/>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${roomDetail.pricePerNight}</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
