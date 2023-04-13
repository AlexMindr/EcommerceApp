## ECommerce App

A responsive fullstack ecommerce shop made in React and TypeScript with Stripe integration and Strapi backend.

Fully responsive layout implemented using Material UI and React-responsive-carousel.

The users can add/manage products in page or in cart and then buy them using Stripe payment.

Other technologies/libraries used:

- Material UI for design
- React-responsive-carousel for home page carousel
- Formik for form handling
- Yup for form validation
- React Router for page navigation
- Redux & Redux Toolkit for frontend data storage

### App presentation

#### Home page

Home page with carousel presenting featured items, it can also be manually swiped left or right using the arrows.
![Home1](_readmeimg/home1.PNG)

The items presented by categories which the user can see filtered by clicking on the tabs, the user can also add items directly to the cart.
![Home2](_readmeimg/home2.PNG)

A subscribe section and the footer.
![Home3](_readmeimg/home3.PNG)

#### Item page

Individual item presentation page with the option to navigate through items, add to cart and see detailed information about the items.
![Item1](_readmeimg/item1.PNG)

A section containing more information about the individual item and reviews(not implemented) also possible related items(not implemented).
![Item2](_readmeimg/item2.PNG)

#### Cart

The cart where the user can see/manage their items and checkout to the payment information form if they decide to buy something.
![Cart](_readmeimg/cart.PNG)

#### Checkout page

The user is prompted to complete a form with their information.
![Checkout1](_readmeimg/checkout1.PNG)

If they want a different address for shippment, they can uncheck the mark and complete the information.  
The fields that are not filled will be marked in red.
![Checkout2](_readmeimg/checkout2.PNG)

After clicking the next button, the user is prompted for the last information before making the purchase.
![Checkout3](_readmeimg/checkout3.PNG)

#### Stripe payment

The stripe payment with information about the items and their quantity.
![Stripe](_readmeimg/stripe.PNG)

#### Success page

The user is redirected to a page to confirm their order was successful.
![Success](_readmeimg/success.PNG)

### What I learned?

In this project my focus was the implementation of Stripe with it's payment features and also Strapi backend.

How to make a responsive carousel with React-responsive-carousel.

Making a modern, ecommerce UI/UX with MUI.

How to use Formik and handle the validation with Yup.

### How to run ?

Frontend(client)

> npm run build

Backend(server)

> npm run build
