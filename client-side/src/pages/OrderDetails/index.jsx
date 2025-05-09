import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../../components/Header";
import { API_URL } from "../../utils/data";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

import {
  Container,
  OrderId,
  ProductInfo,
  CustomTimeline,
  TimelineItem,
  TimelineIcon,
  TimelineText,
  TimelineConnector,
  ProductImage,
  InfoText,
  Price,
  ChatSection,
  TrackingText,
  Details,
  Section,
  Block,
  Title,
  ReceiverName,
  PhoneNumber,
  Label,
  PriceItem,
  DeliveryCharge,
  Separator,
  TotalPrice,
  Amount,
} from "./styledComponent";
import { BeatLoader } from "react-spinners";

const OrderDetails = () => {
  const { orderId } = useParams();
  const token = Cookies.get("token");
  const [order, setOrder] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/order-details/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const orderData = res.data.order;
        setOrder(orderData);
        animateTimeline(orderData.status);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    const animateTimeline = (status) => {
      const baseSteps = ["confirmed"];
      const steps = {
        pending: ["pending"],
        "in progress": ["pending", "inProgress"],
        delivered: ["pending", "inProgress", "delivered"],
        cancelled: ["pending", "inProgress", "cancelled"],
      };

      const timeline = [...baseSteps, ...(steps[status] || [])];
      timeline.forEach((step, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, step]);
        }, index * 800);
      });
    };

    fetchOrder();
  }, [orderId, token]);

  const getStepContent = (step) => {
    if (!order) return {};

    switch (step) {
      case "confirmed":
        return {
          label: "Order Confirmed",
          date: order.createdAt,
          icon: <TiTick />,
          className: "active",
        };
      case "pending":
        return {
          label: "Pending",
          date: order.createdAt,
          icon: <TiTick />,
          className: "active",
        };
      case "inProgress":
        return {
          label: "In Progress",
          date: order.updatedAt,
          icon: <TiTick />,
          className: "active",
        };
      case "delivered":
        return {
          label: "Delivered",
          date: order.updatedAt,
          icon: <TiTick />,
          className: "active",
        };
      case "cancelled":
        return {
          label: "Cancelled",
          date: order.updatedAt,
          icon: <RxCross2 />,
          className: "cancelled",
        };
      default:
        return {};
    }
  };

  return (
    <>
      <Header />
      {!order ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <BeatLoader color="#F7931E" />
        </div>
      ) : (
        <Container>
          <Section>
            <OrderId>Order ID - {order._id}</OrderId>

            {order.items && order.items.length > 0 && (
              <ProductInfo>
                <InfoText>
                  <h4>{order.items[0].foodName}</h4>
                  <Price>₹{order.items[0].price}</Price>
                </InfoText>
                <ProductImage
                  src={order.items[0].foodImage}
                  alt={order.items[0].foodName}
                />
              </ProductInfo>
            )}

            <CustomTimeline>
              {visibleSteps.map((step, index) => {
                const { label, date, icon, className } = getStepContent(step);
                return (
                  <React.Fragment key={step}>
                    {index > 0 && <TimelineConnector />}
                    <TimelineItem>
                      <TimelineIcon className={className}>{icon}</TimelineIcon>
                      <TimelineText>
                        {label},{" "}
                        {new Date(date).toLocaleString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TimelineText>
                    </TimelineItem>
                  </React.Fragment>
                );
              })}
            </CustomTimeline>

            <ChatSection>
              <button>💬 Chat with us</button>
            </ChatSection>

            <TrackingText>
              Order can be tracked by {order.address.mobile || "your number"}.
              <br />
              Tracking link is shared via SMS.
            </TrackingText>
          </Section>
          <Details>
            <Block>
              <Title>Shipping Details</Title>
              <ReceiverName>{order.address.receiverName}</ReceiverName>
              <p>{order.address.houseNumber}</p>
              <p>
                {order.address.city}, {order.address.state}
              </p>
              <p>{order.address.pincode}</p>
              <PhoneNumber>
                <Label>Phone number:</Label> {order.address.mobile}
              </PhoneNumber>
            </Block>

            <Block>
              <Title>Price Details</Title>
              {order.items && order.items.length > 0 && (
                <>
                  <PriceItem>
                    <span>Selling Price</span>
                    <Amount>₹{order.items[0].price.toFixed(2)}</Amount>
                  </PriceItem>
                  <PriceItem>
                    <span>Delivery Charge</span>
                    <DeliveryCharge>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "black",
                        }}
                      >
                        ₹50
                      </span>{" "}
                      Free
                    </DeliveryCharge>
                  </PriceItem>
                  <Separator />
                  <TotalPrice>
                    <span>Total Amount</span>
                    <Amount>₹{order.items[0].price.toFixed(2)}</Amount>
                  </TotalPrice>
                </>
              )}
            </Block>
          </Details>
        </Container>
      )}
    </>
  );
};

export default OrderDetails;
