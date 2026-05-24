import express from 'express';
import dotenv from 'dotenv';
import { webhookRouter } from './routes/webhook.route';
import { reminderJob } from './jobs/reminder.job';
import { db } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ── Health Check (required for Railway) ──────────────────────────
app.get('/health', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
    });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', database: 'disconnected' });
  }
});

// ── Routes ────────────────────────────────────────────────────────
app.use('/webhook', webhookRouter);

// ── Start Server ──────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  reminderJob.start();
});

export default app;
