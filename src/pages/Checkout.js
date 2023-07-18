import React from 'react';
import { StreamPayButton, SolanaWalletConnector } from '@streampay/react-components';

const StreamPayCheckout = () => {
  const handlePaymentComplete = (paymentData) => {
    // Handle the payment completion
    console.log('Payment completed:', paymentData);
  };

  const handlePaymentCancel = () => {
    // Handle payment cancellation
    console.log('Payment canceled');
  };

  const handlePaymentError = (error) => {
    // Handle payment error
    console.log('Payment error:', error);
  };

  return (
    <div>
      {/* Your checkout form */}
      {/* ... */}

      {/* Render the StreamPay button */}
      <StreamPayButton
        clientId="<CLIENT_ID>"
        onComplete={handlePaymentComplete}
        onCancel={handlePaymentCancel}
        onError={handlePaymentError}
        walletConnector={SolanaWalletConnector}
        buttonProps={{
          style: {
            backgroundColor: '#000c14',
            border: '1px solid #000c14',
            color: '#ffffff',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '8px',
          },
        }}
      >
        Pay with StreamPay
      </StreamPayButton>
    </div>
  );
};

export default StreamPayCheckout;

