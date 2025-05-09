import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 0px 300px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0px;
  }
`;

export const OrderId = styled.h3`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;

export const InfoText = styled.div`
  h4 {
    font-size: 16px;
    margin: 0;
  }
`;

export const Price = styled.p`
  color: green;
  font-weight: bold;
`;

export const ChatSection = styled.div`
  margin: 20px 0;
  button {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
`;

export const TrackingText = styled.p`
  font-size: 12px;
  color: #333;
  line-height: 1.4;
`;

export const Details = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  flex: 2;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Section = styled.div`
  margin-top: 20px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  flex: 3;
`;

export const Block = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-top: 10px;
  background-color: white;
`;

export const Title = styled.p`
  font-weight: 600;
  color: gray;
  margin-bottom: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
`;

export const ReceiverName = styled.p`
  font-weight: 500;
`;

export const PhoneNumber = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const DeliveryCharge = styled.span`
  color: #10b981;
`;

export const Separator = styled.div`
  border-top: 1px solid #e5e7eb;
  margin: 8px 0;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.125rem;
`;

export const Amount = styled.span`
  font-weight: 500;
`;

const grow = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 24px;
    opacity: 1;
  }
`;
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CustomTimeline = styled.div`
  margin-top: 2rem;
  position: relative;
  padding-left: 20px;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TimelineIcon = styled.span`
  background-color: ${({ className }) =>
    className?.includes("cancelled") ? "#dc3545" : "#28a745"};
  font-weight: bold;
  font-size: 12px;
  color: white;
  ${({ className }) =>
    className?.includes("cancelled") ? "#dc3545" : "#28a745"};
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -13px;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out 0.4s forwards;
`;

export const TimelineText = styled.p`
  margin-left: 10px;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out 0.4s forwards;
`;

export const TimelineConnector = styled.div`
  width: 3px;
  height: 30px;
  background-color: #28a745;
  animation: ${grow} 0.4s ease-in;
  position: relative;
  left: -8px;
  margin-top: -5px;
  margin-bottom: -5px;
`;
