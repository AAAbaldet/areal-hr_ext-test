# areal-hr_ext-test
My 2 repository on GitHub.

├── api/                # Папка для API сервера
│   ├── node_modules/   # Зависимости для API
│   ├── migrations/      # Миграции базы данных
├── app/                # Папка для клиентского приложения
│   ├── node_modules/    # Зависимости для приложения
└── containers/         # Папка для Docker-контейнеров
    ├── api/           # Контейнер для API
    │   └── Dockerfile  # Файл для настройки контейнера API
    └── app/           # Контейнер для приложения
        └── Dockerfile  # Файл для настройки контейнера приложения
├── docs/               # Документация проекта
├── .gitignore          # Файлы, которые Git будет игнорировать
├── .env                # Переменные окружения
├── .env.example        # Пример файла .env
├── docker-compose.yml  # Настройки для Docker
├── README.md           # Информация о проекте
