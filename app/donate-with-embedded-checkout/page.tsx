import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Donate with embedded Checkout | ${APP_NAME}`,
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Donate with embedded Checkout</h1>
      <p>Donate to our project 💖</p>
      <CheckoutForm uiMode="embedded" />
    </div>
  );
}
