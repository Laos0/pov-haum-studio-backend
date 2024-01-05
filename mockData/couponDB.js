const startingDateForPromoCode = '2024-01-01';
const endingDateForPromoCode = '2024-12-31';

const startingDateForAdminCode = '2024-02-01';
const endingDateForAdminCode = '2024-12-15';

const promoCategory = 1;
const adminCategory = 2;

const coupons = [
  {
    code: 'summer2024',
    amount: 10,
    category: promoCategory,
    startDate: startingDateForPromoCode,
    endDate: endingDateForPromoCode,
  },
  {
    code: 'just50',
    amount: 50,
    category: promoCategory,
    startDate: startingDateForPromoCode,
    endDate: endingDateForPromoCode,
  },
  {
    code: 'newyear2024',
    amount: 20,
    category: promoCategory,
    startDate: startingDateForPromoCode,
    endDate: endingDateForPromoCode,
  },
  {
    code: 'admin5',
    amount: 5,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin10',
    amount: 10,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin15',
    amount: 15,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin20',
    amount: 20,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin25',
    amount: 25,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin30',
    amount: 30,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin35',
    amount: 35,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin40',
    amount: 40,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin45',
    amount: 45,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
  {
    code: 'admin50',
    amount: 50,
    category: adminCategory,
    startDate: startingDateForAdminCode,
    endDate: endingDateForAdminCode,
  },
];

const validateCoupon = (code) => {
    
    const foundCoupon = coupons.find(coupons => coupons.code === code);
    if(!!foundCoupon){ // if the code was found

        return foundCoupon;
    }
}

export default {coupons, validateCoupon};
