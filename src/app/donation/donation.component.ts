import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  paymentHandler:any = null;

  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LBv6QSGY6999E4fKz9cgqPnf97DKipORPoBjUBfsng1ODvBN1C4USV1qYQ9h7rz0PnzZ7cYbDJQOUne9pEaJEOa00uZZFKMiN',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: '',
      description: 'Donation for cancer patients',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LBv6QSGY6999E4fKz9cgqPnf97DKipORPoBjUBfsng1ODvBN1C4USV1qYQ9h7rz0PnzZ7cYbDJQOUne9pEaJEOa00uZZFKMiN',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }


}
