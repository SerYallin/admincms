import { PrismaClient, Prisma } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Admin Name',
    email: 'test@test.com',
    password: 'test',
    nodes: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content:
            '<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu. Metus tempor fringilla praesent ullamcorper turpis turpis parturient dictum? Quisque vitae porttitor montes eleifend neque pellentesque platea elit. Praesent pellentesque nam finibus aenean in id sociosqu urna. Vitae suspendisse nascetur et id ex duis lectus pretium.</p>' +
            '</p>Convallis id fermentum odio lacinia ullamcorper porttitor leo. Penatibus ac auctor fringilla pulvinar tempus massa arcu vestibulum. Sit malesuada urna duis inceptos condimentum commodo. Eget aliquet tempus leo fermentum sapien egestas. Netus commodo neque dapibus a cras habitasse dignissim potenti. Facilisis sed sapien montes orci habitant ex dui. Habitasse malesuada fringilla tempor, commodo aenean suspendisse ornare. Tristique eu mi elementum dignissim potenti. Magna mollis sollicitudin nibh montes; id ipsum volutpat dis. Neque sodales aenean imperdiet lectus viverra purus aliquam congue.</p>',
          description:
            'Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu.',
          published: true,
        },
        {
          title: 'Lorem ipsum odor amet',
          content:
            '<p>Second Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu. Metus tempor fringilla praesent ullamcorper turpis turpis parturient dictum? Quisque vitae porttitor montes eleifend neque pellentesque platea elit. Praesent pellentesque nam finibus aenean in id sociosqu urna. Vitae suspendisse nascetur et id ex duis lectus pretium.</p>' +
            '</p>Convallis id fermentum odio lacinia ullamcorper porttitor leo. Penatibus ac auctor fringilla pulvinar tempus massa arcu vestibulum. Sit malesuada urna duis inceptos condimentum commodo. Eget aliquet tempus leo fermentum sapien egestas. Netus commodo neque dapibus a cras habitasse dignissim potenti. Facilisis sed sapien montes orci habitant ex dui. Habitasse malesuada fringilla tempor, commodo aenean suspendisse ornare. Tristique eu mi elementum dignissim potenti. Magna mollis sollicitudin nibh montes; id ipsum volutpat dis. Neque sodales aenean imperdiet lectus viverra purus aliquam congue.</p>',
          description:
            'Second Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu.',
          published: true,
        },

        {
          title: 'Tested',
          content:
            '<p>Tested Second Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu. Metus tempor fringilla praesent ullamcorper turpis turpis parturient dictum? Quisque vitae porttitor montes eleifend neque pellentesque platea elit. Praesent pellentesque nam finibus aenean in id sociosqu urna. Vitae suspendisse nascetur et id ex duis lectus pretium.</p>' +
            '</p>Convallis id fermentum odio lacinia ullamcorper porttitor leo. Penatibus ac auctor fringilla pulvinar tempus massa arcu vestibulum. Sit malesuada urna duis inceptos condimentum commodo. Eget aliquet tempus leo fermentum sapien egestas. Netus commodo neque dapibus a cras habitasse dignissim potenti. Facilisis sed sapien montes orci habitant ex dui. Habitasse malesuada fringilla tempor, commodo aenean suspendisse ornare. Tristique eu mi elementum dignissim potenti. Magna mollis sollicitudin nibh montes; id ipsum volutpat dis. Neque sodales aenean imperdiet lectus viverra purus aliquam congue.</p>',
          description:
            'Tested Second Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu.',
          published: false,
        },
      ],
    },
  },
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'pass',
    nodes: {
      create: [
        {
          title: 'Title 1',
          content:
            '<p>Any Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu. Metus tempor fringilla praesent ullamcorper turpis turpis parturient dictum? Quisque vitae porttitor montes eleifend neque pellentesque platea elit. Praesent pellentesque nam finibus aenean in id sociosqu urna. Vitae suspendisse nascetur et id ex duis lectus pretium.</p>' +
            '</p>Convallis id fermentum odio lacinia ullamcorper porttitor leo. Penatibus ac auctor fringilla pulvinar tempus massa arcu vestibulum. Sit malesuada urna duis inceptos condimentum commodo. Eget aliquet tempus leo fermentum sapien egestas. Netus commodo neque dapibus a cras habitasse dignissim potenti. Facilisis sed sapien montes orci habitant ex dui. Habitasse malesuada fringilla tempor, commodo aenean suspendisse ornare. Tristique eu mi elementum dignissim potenti. Magna mollis sollicitudin nibh montes; id ipsum volutpat dis. Neque sodales aenean imperdiet lectus viverra purus aliquam congue.</p>',
          description:
            'Any Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu.',
          published: true,
        },
        {
          title: 'Title 2',
          content:
            '<p>Supper Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu. Metus tempor fringilla praesent ullamcorper turpis turpis parturient dictum? Quisque vitae porttitor montes eleifend neque pellentesque platea elit. Praesent pellentesque nam finibus aenean in id sociosqu urna. Vitae suspendisse nascetur et id ex duis lectus pretium.</p>' +
            '</p>Convallis id fermentum odio lacinia ullamcorper porttitor leo. Penatibus ac auctor fringilla pulvinar tempus massa arcu vestibulum. Sit malesuada urna duis inceptos condimentum commodo. Eget aliquet tempus leo fermentum sapien egestas. Netus commodo neque dapibus a cras habitasse dignissim potenti. Facilisis sed sapien montes orci habitant ex dui. Habitasse malesuada fringilla tempor, commodo aenean suspendisse ornare. Tristique eu mi elementum dignissim potenti. Magna mollis sollicitudin nibh montes; id ipsum volutpat dis. Neque sodales aenean imperdiet lectus viverra purus aliquam congue.</p>',
          description:
            'Supper Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sagittis nulla sollicitudin sagittis non est sapien. Facilisis porta nascetur scelerisque sollicitudin pharetra convallis erat. Dolor magnis cubilia ante proin a arcu.',
          published: true,
        },
      ],
    },
  },
];

const main = async () => {
  for (let i = 0; i < userData.length; i++) {
    await prisma.user.create({ data: userData[i] });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
