import User from '@prisma/client';
import getCurrentUser from '@/app/actions/getCurrentUser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="">
      {/* пофиксить ошибку тс */}
      <Header currentUser={currentUser!} />
      <div className="w-[1200px] m-auto pb-14">{children}</div>
      <Footer />
    </div>
  );
}
