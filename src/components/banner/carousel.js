import React, { useEffect, useState } from 'react'; // Import useState and useEffect from React
import { makeStyles } from '@mui/styles'; // Import makeStyles
import axios from 'axios'; 
import { useCryptoState } from "../../cryptocontext"; // Import the custom hook 'useCryptoState'
import { TrendingCoins } from "../../config/api"; // Assuming TrendingCoins is an API endpoint or URL
import AliceCarousel from 'react-alice-carousel'; 

const useStyles = makeStyles(() => ({
  Carousel: {
    alignItems: "center",
    display: 'flex',
    height: '50%',
  },
  carouselItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "column", // Add this if you'd like the coin's name and price under the image
    textAlign: "center",
    textTransform:"uppercase",
    color:'white'
  },
}));

const Carousel = () => {
  const classes = useStyles(); // Use the styles
  const [trending, setTrending] = useState([]); // State to store trending coins data
  const { currency, symbol } = useCryptoState(); // Use the 'useCryptoState' hook to access context

  // Function to fetch trending coins
  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency)); // Make sure TrendingCoins is an API endpoint or URL
      console.log(data);
      setTrending(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  // Fetch trending coins when currency changes
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  // Helper function to format numbers with commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <div key={coin.id} className={classes.carouselItem}>
        <img
          src={coin?.image || 'fallback-image-url.jpg'} // Fallback image if no image is available
          alt={coin.name}
          height={80}
          style={{ marginBottom: 30 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.Carousel}>
      <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
