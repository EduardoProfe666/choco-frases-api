# Frases de ChocolateMC API 🍫

<div align="center">

![Choco](/assets/banner.png)

[![Made with NestJS][nestjs-badge]][nestjs-url]
[![TypeScript][ts-badge]][ts-url]
[![License][license-badge]][license-url]
[![PRs Welcome][prs-badge]][prs-url]

_An API to expose ChocolateMC famous phrases, built with NestJS and TypeScript_

[🚀 Getting Started](#-getting-started) | [🛠️ Tech Stack](#-tech-stack) | [📄 API Endpoints](#-api-endpoints)

</div>

## 🛠️ Tech Stack

### Backend

- ⚡ [NestJS](https://nestjs.com/) for building efficient and scalable server-side applications
- 📝 [TypeScript](https://www.typescriptlang.org/) for type-safe coding
- 🌱 [PostgreSQL](https://www.postgresql.org/) as the database
- 🔒 [JWT](https://jwt.io/) for secure authentication
- 📦 [TypeORM](https://typeorm.io/) for database interaction

## 🚀 Getting Started

### Prerequisites

- Node.js version **16.0 or higher**
- NPM/PNPM/YARN
- PostgreSQL installed and running

### Installation

```bash
# Clone the repository
git clone https://github.com/EduardoProfe666/choco-frases-api

# Navigate to project directory
cd choco-frases-api

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env # Update .env with your settings

# Start the application
pnpm run start:dev
```

### Production Build

```bash
# Build for production
pnpm run build

# Start production server
pnpm run start:prod
```

## 📄 API Endpoints

Here are the public available API endpoints for choco phrases:

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/v1/phrases`      | Get all phrases     |
| GET    | `/v1/phrases/{id}` | Get a cat by its ID |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
<strong>Created with ❤️ by EduardoProfe666 <a href="https://eduardoprofe666.github.io">🎩</a></strong>
</div>



<!-- MARKDOWN LINKS & BADGES -->

[nestjs-badge]: https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white

[nestjs-url]: https://nestjs.com/

[ts-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white

[ts-url]: https://www.typescriptlang.org/

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge

[license-url]: https://opensource.org/licenses/MIT

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge

[prs-url]: http://makeapullrequest.com