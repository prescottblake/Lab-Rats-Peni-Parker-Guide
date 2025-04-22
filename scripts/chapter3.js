var promoMessage = "";
var dateString = "";
const currDate = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
dateString += month[currDate.getMonth()] + " " + (currDate.getDate() + 7);


promoMessage += "Want a coaching session with the Lab Rat? \r\n";
promoMessage += "Submit your request before " + dateString + " to reserve a coaching session.";




var el = document.getElementById('limited-time-offer-message');
el.textContent = promoMessage;