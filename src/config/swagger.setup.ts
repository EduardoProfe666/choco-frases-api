import * as basicAuth from 'express-basic-auth';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function setupSwagger(app: INestApplication, swaggerPath: string) {
  const swaggerPassword = app.get(ConfigService).get('ADMIN_PASSWORD');

  const options = new DocumentBuilder()
    .setTitle('Choco Frases API')
    .setDescription('### API que brinda frases de ChocolateMC.')
    .setLicense('MIT', 'https://opensource.org/license/mit')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const doc = SwaggerModule.createDocument(app, options);

  const paths = Object.keys(doc.paths).sort();
  const sortedPaths = {};
  paths.forEach((path) => {
    sortedPaths[path] = doc.paths[path];
  });
  doc.paths = sortedPaths;

  const schemas = Object.keys(doc.components.schemas).sort();
  const sortedSchemas = {};
  schemas.forEach((schema) => {
    sortedSchemas[schema] = doc.components.schemas[schema];
  });
  doc.components.schemas = sortedSchemas;

  app.use(
    [swaggerPath, `${swaggerPath}-json`],
    basicAuth({
      challenge: true,
      users: {
        chocolate: swaggerPassword,
      },
    }),
  );


  SwaggerModule.setup(swaggerPath, app, doc);
}