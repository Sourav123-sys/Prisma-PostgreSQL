import { PrismaClient } from '@prisma/client'


 const prisma = new PrismaClient()

//const prisma = new PrismaClient({log:['query']})
async function main() {
    // ... you will write your Prisma Client queries here
    
//await prisma.user.deleteMany()
//   const user = await prisma.user.create({
//     data: {
//       name: "Sourav",
//       email: "Sourav58@gmail.com",
//       age: 25,
//       userPreference: {
//         create: {
//           emailUpdates : true,
//         },
//       },
     
//  },
// //  include: {
// //   userPreference:true
// // },
//     select: {
//       //name: true,
//       email: true,
//      // userPreference:{select:{id:true}}
//     }
//   })
  // const user = await prisma.user.createMany({
  //   data: [{
  //     name: "Sourav",
  //     email: "Sourav58@gmail.com",
  //     age: 25,
     
     
  //   },
  //    { name: "Arefin",
  //     email: "Arefin58@gmail.com",
  //     age: 23,},
  //    { name: "khan",
  //     email: "khan58@gmail.com",
  //     age: 24,},
  //    { name: "Asif",
  //     email: "Asif58@gmail.com",
  //     age: 28,},
     
  //   ]
  

   
  // })
  // const user = await prisma.user.findUnique({
  //   where: {
  //     // email: "Sourav58@gmail.com"
  //     age_name: {
  //       age: 28,
  //       name:"Asif"
  //     }
  //   }
  // })
  // const user = await prisma.user.findFirst({
  //   where: {
  //     // email: "Sourav58@gmail.com"
  //     name:"Asif",
  //   }
  // })
  // const user = await prisma.user.createMany({
  //   data: [{
  //     name: "Rahman",
  //     email: "Sourav59@gmail.com",
  //     age: 12,
     
     
  //   },
  //    { name: "Rahman",
  //     email: "Arefin59@gmail.com",
  //     age: 15,},
  //    { name: "Rahman",
  //     email: "khan59@gmail.com",
  //     age: 24,},
    
     
  //   ]
  

   
  // })
  // const user = await prisma.user.findMany({
  //     where: {
  //       name:"Rahman",
  //   },
  //   //distinct : ['name','age']
  //   take: 2,
  //   skip:1
    
  //   })
  const user = await prisma.user.update({
      where: {
        email:"Arefin59@gmail.com",
    },
    data: {
      email:"Rahman59@gmail.com",
  }
    
    })
  console.log(user);
 

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e,"error")
    await prisma.$disconnect()
    process.exit(1)
  })