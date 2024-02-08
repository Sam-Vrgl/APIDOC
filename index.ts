import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

// Define your API routes here


app.get('/ads', async (req, res) => {
    try {
        const response = await axios.get('https://trackmania.p.rapidapi.com/ads', {
            headers: {
                'X-RapidAPI-Key': 'YOUR_API_KEY',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
