const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static('public'));

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle form submissions
app.post('/submit-announcement', (req, res) => {
    // Process announcement data here
    res.json({ status: 'success', announcement_id: '12345' });
});

app.post('/leave-tribute', (req, res) => {
    // Process tribute data here
    res.json({ status: 'success', name: req.body.tribute_name, message: req.body.tribute_message });
});

app.post('/upload-photo', upload.single('photo_upload'), (req, res) => {
    // Handle photo upload
    const filename = req.file.filename;
    res.json({ status: 'success', filename: `/uploads/${filename}` });
});

app.post('/order-flowers', (req, res) => {
    // Handle flower order
    const flowerType = req.body.flower_type;
    const quantity = req.body.quantity;
    const invoice = req.body.invoice ? 'Yes' : 'No';
    const totalAmount = quantity * 100; // Example calculation
    res.json({ 
        status: 'success', 
        flower_type: flowerType, 
        quantity: quantity, 
        invoice: invoice,
        total_amount: `$${totalAmount}`,
        payment_method: 'LinePay' // Example
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
