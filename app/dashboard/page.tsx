import Link from 'next/link';

export default function Page() {
  return (
    <>
      <p>Dashboard Page</p>
      <div className="flex flex-col">
        <Link href="/dashboard/customers">customers</Link>
        <Link href="./dashboard/invoices">invoices</Link>
      </div>
    </>
  );
}
