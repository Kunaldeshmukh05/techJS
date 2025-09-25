const salesData = [];

const categories = ['Electronics', 'Fashion', 'Home', 'Books', 'Toys'];
const products = [
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'Laptop', category: 'Electronics' },
    { name: 'T-shirt', category: 'Fashion' },
    { name: 'Jeans', category: 'Fashion' },
    { name: 'Sofa', category: 'Home' },
    { name: 'Cookware', category: 'Home' },
    { name: 'Novel', category: 'Books' },
    { name: 'Textbook', category: 'Books' },
    { name: 'Action Figure', category: 'Toys' },
    { name: 'Board Game', category: 'Toys' }
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 100; i++) {
    const product = products[getRandomInt(0, products.length - 1)];
    const entry = {
        orderId: `ORD${1000 + i}`,
        customer: {
            customerId: `CUST${getRandomInt(100, 999)}`,
            name: `Customer${i}`,
            address: {
                city: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'][getRandomInt(0, 4)],
                pincode: getRandomInt(100000, 999999)
            }
        },
        items: [
            {
                productName: product.name,
                category: product.category,
                quantity: getRandomInt(1, 5),
                price: getRandomInt(100, 5000)
            },
            {
                productName: products[getRandomInt(0, products.length - 1)].name,
                category: product.category,
                quantity: getRandomInt(1, 3),
                price: getRandomInt(100, 5000)
            }
        ],
        orderDate: new Date(2024, getRandomInt(0, 5), getRandomInt(1, 28)).toISOString(),
        payment: {
            method: ['COD', 'Credit Card', 'UPI', 'Net Banking'][getRandomInt(0, 3)],
            status: ['Paid', 'Pending', 'Failed'][getRandomInt(0, 2)]
        }
    };
    salesData.push(entry);
}

console.log(salesData);9