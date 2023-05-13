## Stripe Coupon Management Script

This project provides a simple Node.js/React.js script for creating, retrieving, updating, deleting, and listing coupons using the Stripe API.

Prerequisites
Node.js
npm
A Stripe account and API key
Getting Started
First, clone the repository:

```bash
git clone https://github.com/your-username/your-project-name.git
```

Navigate into the project directory:

```bash
cd your-project-name
```

Install the required dependencies:

```bash
npm install
```

Add a .env file in the root of your project and insert your Stripe API key:

```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Now you can run the server:

```bash
npm start
```

Usage
The script provides several routes for managing coupons:

Create a Coupon
Send a POST request to /api/coupons with the following data:

```json
{
"percent_off": 25,
"duration": "repeating",
"duration_in_months": 3
}
```

Example:

```javascript
const couponData = {
percent_off: 25,
duration: 'repeating',
duration_in_months: 3
};

axios.post('http://localhost:3001/api/coupons', couponData)
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

Retrieve a Coupon
Send a GET request to /api/coupons/:id where :id is the ID of the coupon.

Example:

```javascript
axios.get('http://localhost:3001/api/coupons/Z4OV52SU')
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

Update a Coupon
Send a PUT request to /api/coupons/:id with the new data:

```json
{
"metadata": {
"order_id": "6735"
}
}
```

Example:

```javascript
const updateData = {
metadata: {
order_id: '6735'
}
};

axios.put('http://localhost:3001/api/coupons/Z4OV52SU', updateData)
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

Delete a Coupon
Send a DELETE request to /api/coupons/:id.

Example:

```javascript
axios.delete('http://localhost:3001/api/coupons/Z4OV52SU')
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

List All Coupons
Send a GET request to /api/coupons.

Example:

```javascript
axios.get('http://localhost:3001/api/coupons')
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

Error Handling
The server uses try/catch blocks to handle errors and returns a 500 error with the error message. On the client side, use try/catch blocks to handle errors when making requests.

Best Practices
Validate and sanitize input on both the client and the server side.
Avoid hardcoding secrets (like your Stripe API key) in your code. Instead, store them

in environment variables.
- Use a linter (like ESLint) to enforce consistent coding style.
- Write unit tests to ensure your code behaves as expected.

## Testing

You can use a tool like Postman or curl to test the API endpoints.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
