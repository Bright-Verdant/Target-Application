const { saveDataModel  } = require('../../models');
exports.saveCard = async (req, res) =>  {
    if (!req.session.loggedIn) {
      res.status(401).json({ message: 'You must be logged in to save a card' });
      return;
    }
  
    const { tNumber, address, cityStatePostalEl } = req.body;
  
    try {
      const card = await saveDataModel.create({
        tNumber,
        address,
        cityStatePostalEl,
      });
  
      res.status(200).json({ message: 'Card saved successfully', card });
    } catch (error) {
      console.error('Error saving card:', error);
      res.status(500).json({ message: 'Failed to save card' });
    }
  
};
