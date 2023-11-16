import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import moment from "moment/moment";
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} />
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
