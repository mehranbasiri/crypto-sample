import React, { useEffect, useState } from "react";
import millify from "millify";

import { Link } from "react-router-dom";

import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoDetails from "./CryptoDetails";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryposList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryposList?.data?.coins);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryposList?.data?.coins);
    const filteredData = cryposList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryposList, searchTerm]);

  if (isFetching) return "Loading.....";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
