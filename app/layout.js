import './globals.css';

export const metadata = {
  title: 'Farhan K. | US Tax Preparer, QuickBooks & Xero Expert',
  description:
    'IRS-registered US tax preparer (PTIN holder). Bookkeeping, federal and state tax returns, IRS notices and financial modeling. 210 Upwork engagements, Top Rated, 4.8 from 107 reviews.',
  openGraph: {
    title: 'Farhan K. | US Tax Preparer, QuickBooks & Xero Expert',
    description:
      'Clean books, filed returns, zero surprises. 210 engagements, 96% Job Success, rated 4.8 by 107 clients.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
