import prisma from "@repo/prisma/client"

export default async function Home() {
  
  //creates the problem of static site generation -> creates challenges for deployment, will see how it will be resolved
  const user =  await prisma.user.findFirst();
  return (
    <div>
      {user?.userName}
      {user?.password}
    </div>
  );
}
