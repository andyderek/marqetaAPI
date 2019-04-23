class cardProductCreator {
   constructor (startDate, cardName){
  this.start_date = startDate;
  this.name = cardName;
  this.config = {};
  this.config.fulfillment = {};
  this.config.poi = {};
  this.config.fulfillment.payment_instrument = "VIRTUAL_PAN";
  this.config.poi.ecommerce = true;
  this.config.card_life_cycle = {};
  this.config.card_life_cycle.activate_upon_issue = true;
};
}

module.exports = cardProductCreator;
