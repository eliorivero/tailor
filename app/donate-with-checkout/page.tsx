import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Donate with hosted Checkout | ${APP_NAME}`,
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Donate with hosted Checkout</h1>
      <p>Donate to our project 💖</p>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}
