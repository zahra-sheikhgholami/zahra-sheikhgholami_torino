import HomePage from "@/src/components/templates/HomePage";
import { serverFetch } from "@/src/core/services/http";

export const metadata = {
  title: "تورهای گردشگری | تورینو",
  description: "لیست تورهای داخلی و خارجی با بهترین قیمت",
};

async function Home({ searchParams }) {
  const query = await searchParams;
  const initialData = await serverFetch("/tour", query, {cache:  "no-store"});
  
  return (
    <div>
      <HomePage initialData={initialData} />
    </div>
  );
}

export default Home;
