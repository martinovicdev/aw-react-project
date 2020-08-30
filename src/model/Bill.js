import CreditCard from './CreditCard';
import Seller from './Seller';

class Bill {
    Id = 0;
    Date ;
    BillNumber = '';
    CustomerId = 0;
    SellerId = 0;
    CreditCardId = 0;
    Comment = '';
    CreditCard ;
    Seller ;
}

export default Bill;
