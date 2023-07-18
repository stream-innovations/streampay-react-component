import React from 'react';
import { StreamPayButton } from '@streampay/react-components';

const Checkout = () => {
  const handlePaymentComplete = (paymentData) => {
    // Handle the payment completion
    console.log('Payment completed:', paymentData);
  };

  return (
    <div>
      {/* Your checkout form */}
      {/* ... */}

      {/* Render the StreamPay button */}
      <StreamPayButton
        clientId="<CLIENT_ID>"
        onComplete={handlePaymentComplete}
        onCancel={() => console.log('Payment canceled')}
        onError={(error) => console.log('Payment error:', error)}
      >
        Pay with StreamPay
      </StreamPayButton>
    </div>
  );
};

export default Checkout;
