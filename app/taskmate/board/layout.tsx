export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-screen md:flex-row">
      <div className="flex-grow w-full">
        {children}
      </div>
    </div>
  );
}
