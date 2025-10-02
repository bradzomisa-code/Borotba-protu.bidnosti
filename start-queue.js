// api/start-queue.js
// Це Node.js (Serverless Function для Vercel)

export default async (req, res) => {
    // 1. Встановлюємо, що приймаємо лише POST-запити
    if (req.method !== 'POST') {
        // Відповідь з помилкою, якщо метод не POST
        return res.status(405).send('Method Not Allowed');
    }

    try {
        // 2. Отримуємо дані, які надіслав фронтенд (з Alpine.js/Axios)
        const { ids } = req.body;

        // Перевірка наявності необхідних даних
        if (!ids) {
            return res.status(400).json({ error: 'Missing required field: ids' });
        }

        // === 3. Основна Логіка (Твоя автоматизація) ===
        // Тут ти будеш:
        // - Використовувати 'ids' для роботи з чергою.
        // - Надсилати запити до OpenAI, StabilityAI, тощо.
        // - Запускати скрипти для обробки відео/аудіо.
        // - Зберігати/оновлювати дані у Базі Даних (якщо є).

        console.log(`Received queue IDs: ${ids}`);
        
        // Тут можна симулювати затримку, щоб показати, що робота "виконується"
        // await new Promise(resolve => setTimeout(resolve, 5000)); 

        // 4. Надсилаємо успішну відповідь фронтенду
        res.status(200).json({ 
            message: 'Queue processing started successfully',
            data_received: ids,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Backend error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};