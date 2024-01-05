
/** Purpose of this file is to control the logics when server gets pinged */

const ping = async (req, res) => {
    try {
        console.log('user router testing');
        res.status(200).json({message: 'Pinging server sucessful.'});
    }catch(error) {
        res.status(500).json({message: 'Failed to ping server', error: error.message});
    }
};

export default {ping};