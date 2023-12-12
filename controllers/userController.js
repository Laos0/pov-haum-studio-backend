/** This is a where all the requests are created for users */


const getTest = async (req, res) => {
    try {
        console.log('user router testing');
        res.send('User router testing from server');
    } catch (error) {
        res.status(500).send('Error fetching test...');
    }
};

export { getTest }; // this is how you export with ESM not commonjs

