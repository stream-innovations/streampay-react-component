# StreamPay - React component

The folder structure for integrating StreamPay into a React-based storefront.

### Install

To add a StreamPay button for payments on the Solana blockchain to your checkout page, you can follow these steps:

1. Install Dependencies: Install the required dependencies for integrating StreamPay into your React-based storefront. You need to install the StreamPay React components library and any other necessary dependencies. You can use a package manager like npm or yarn to install these dependencies:

```bash
npm install @streampay/react-components
```

2. Render StreamPay Button: In your checkout page or payment section, render the StreamPay button using the StreamPayButton component from the StreamPay React components library. Pass the required props such as `clientId` and `onComplete` to the component. Replace `<CLIENT_ID>` with your StreamPay Client ID.

```jsx
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
```

3. Style the Button: You can style the StreamPay button according to your storefront's design by adding CSS or using a CSS-in-JS library. You can apply classes or inline styles to customize the button's appearance.

```jsx
<StreamPayButton
  clientId="<CLIENT_ID>"
  onComplete={handlePaymentComplete}
  onCancel={() => console.log('Payment canceled')}
  onError={(error) => console.log('Payment error:', error)}
  className="streampay-button"
>
  Pay with StreamPay
</StreamPayButton>
```

4. Customize Payment Completion: Inside the `handlePaymentComplete` function, you can perform any necessary actions after the payment is completed. This can include updating the order status, displaying a confirmation message, or redirecting to a success page.

```jsx
const handlePaymentComplete = (paymentData) => {
  // Handle the payment completion
  console.log('Payment completed:', paymentData);

  // Perform necessary actions, e.g., update order status, show confirmation message, etc.
};
```

By following these steps and customizing the code according to your storefront's structure and design, you should be able to add the StreamPay button for payments on the Solana blockchain to your checkout page.

### Folder structure

The folder structure for integrating StreamPay into a React-based storefront can vary based on your specific project setup and preferences. However, here is a general folder structure that you can follow:

```
src/
├── components/
│   ├── Checkout/
│   │   ├── CheckoutForm.js
│   │   └── StreamPayButton.js
│   ├── Cart/
│   │   ├── CartItem.js
│   │   └── CartTotal.js
│   └── ...
├── css/
│   ├── checkout.css
│   ├── cart.css
│   ├── 
│   └── ...
├── pages/
│   ├── Home.js
│   ├── Shop.js
│   ├── Cart.js
│   └── Checkout.js
├── services/
│   ├── api.js
│   ├── cart.js
│   ├── payment.js
│   └── ...
├── utils/
│   ├── formatCurrency.js
│   ├── validateForm.js
│   └── ...
└── App.js
```

### Explanation of the folder structure:

- `components/`: This directory contains reusable components used throughout the application. For example, the `Checkout` folder may contain components related to the checkout process, including the `CheckoutForm` component for rendering the form fields and the `StreamPayButton` component for the StreamPay integration.

- `pages/`: This directory contains the page components of your application. Each page represents a different route or view. For example, the `Cart.js` component represents the cart page, and the `Checkout.js` component represents the checkout page.

- `services/`: This directory contains service modules responsible for handling API requests, managing the cart state, handling payment-related operations, and more. These services can be used by different components throughout the application.

- `utils/`: This directory contains utility modules or helper functions that provide common functionalities used across the application. For example, the `formatCurrency` module can provide formatting functions for currencies, and the `validateForm` module can contain form validation functions.

- `App.js`: This is the entry point of your application where you define the overall structure and routing of your app. It can contain the main router and the layout components.

Note that this is just a basic example, and your actual folder structure may vary depending on the complexity and requirements of your project. It's essential to organize your code in a way that makes sense for your specific application.

