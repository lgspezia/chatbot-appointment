# Chatbot Appointment Application
An app easy to use to help you with your schedule

## Structure
clinic-whatsapp-bot/
├── 📄 Dockerfile
├── 📄 docker-compose.yml
├── 📄 railway.toml
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 migrations/
│   └── 001_initial_schema.sql
├── 📄 .github/workflows/
│   └── deploy.yml
└── src/
    ├── 📄 app.ts
    ├── 📄 types/index.ts
    ├── 📄 config/database.ts
    ├── 📄 services/
    │   ├── whatsapp.service.ts
    │   ├── appointment.service.ts
    │   └── session.service.ts
    ├── 📄 handlers/
    │   └── flow.handler.ts
    ├── 📄 routes/
    │   └── webhook.route.ts
    └── 📄 jobs/
        └── reminder.job.ts
