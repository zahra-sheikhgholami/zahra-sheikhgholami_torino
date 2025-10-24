import UserPaymentPage from "@/src/components/templates/UserPaymentPage"

export const metadata = {
  title: "پرداخت | تورینو",
}

async function Payment({searchParams}) {
 const query = await searchParams;
  return (
    <UserPaymentPage searchParams={query} />
  )
}
export default Payment