import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Get form data from request body
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Connect to MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db('portfolio');

        // Insert contact form submission
        await db.collection('contacts').insertOne({
            name,
            email, 
            message,
            createdAt: new Date()
        });

        // Close DB connection
        await client.close();

        // Return success
        return res.status(200).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.error('Error saving contact form:', error);
        return res.status(500).json({ message: 'Error sending message' });
    }
}
