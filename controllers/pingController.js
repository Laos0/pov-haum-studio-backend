/** Purpose of this file is to control the logic when the server gets pinged */

const ping = async (req, res) => {
    try {
        console.log('Server pinged successfully');
        res.status(200).json({ message: 'Pinging server successful.'});
    } catch (error) {
        res.status(500).json({ message: 'Failed to ping server', error: error.message});
    }
};

export default {ping};
