import axios from 'axios';

const createCoupon = async () => {
    try {
        const couponData = {
            percent_off: 25,
            duration: 'repeating',
            duration_in_months: 3
        };

        const response = await axios.post('http://localhost:3001/api/coupons', couponData);

        console.log(response.data); // Logs the created coupon
    } catch (err) {
        console.error(err);
    }
}
