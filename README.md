# areal-hr_ext-test
areal-hr-test-2025/
├── /api/................................
│   ├── /node_modules/...................
│   ├── /migrations/.....................
├── /app/................................
│   ├── /node_modules/...................
├── /containers/.........................
│   ├── /api/............................
│   │   ├── Dockerfile...................
│   ├── /app/............................
│   │   ├── Dockerfile...................
├── /docs/...............................
├── /.gitignore..........................
├── /.env................................
├── /.env.example........................
├── /docker-compose.yml..................
├── /README.md/..........................


1.Прямое (локальное) развертывание PostgreSQL:
(Установка PostgreSQL непосредственно на операционную систему, например, Windows, потому что у меня установлена эта система).
Преимущества:
1)Простота установки и настройки для небольших проектов.
2)Прямой доступ к файловой системе и настройкам базы данных.
3)Меньшая накладная нагрузка, так как не требуется виртуализация.
Недостатки:
1)Потенциальные конфликты с другими приложениями или версиями PostgreSQL.
2)Сложности при переносе на другой сервер или среду.
3)Требуется больше времени на настройку и управление зависимостями.

2.Использование Docker:
(Развертывание PostgreSQL в контейнере Docker.)
Преимущества:
1)Лёгкость в развертывании и управление версиями. Можно быстро создать и удалить контейнеры.
2)Изоляция среды, что минимизирует конфликты с другими приложениями.
3)Упрощенная миграция и перенос проекта между разными средами (локальная машина, сервер, облако).
4)Возможность легко масштабировать и управлять инфраструктурой с помощью Docker Compose.
Недостатки:
1)Требует установки Docker и некоторого времени на изучение, если вы не знакомы с ним.
2)Небольшая накладная нагрузка из-за виртуализации.

Объективно, при использовании Docker плюсов больше, а минусов меньше. Меня в этом способе подкупает изоляция, ведь это позволяет избежать конфликтов с другими приложениями и библиотеками.

Основные команды Git
1. Инициализация репозитория:
git init — инициализация нового репозитория.

2. Клонирование репозитория:
git clone <url> — создание локальной копии удаленного репозитория.

3.Проверка статуса:
git status — отображение состояния репозитория.

4. Добавление изменений:
git add <file> — добавление конкретного файла.
git add . — добавление всех изменений.

5. Коммит изменений:
git commit -m "Сообщение коммита" — создание нового коммита.

6. Просмотр истории коммитов:
git log — отображение истории коммитов.

7. Переключение веток:
git checkout <branch> — переключение на ветку.
git checkout -b <branch> — создание и переключение на новую ветку.

8. Слияние веток:
git merge <branch> — слияние ветки.

9. Удаление ветки:
git branch -d <branch> — удаление локальной ветки.

10. Отправка изменений на удаленный репозиторий:
 git push origin <branch> — отправка изменений.

11. Получение изменений из удаленного репозитория:
 git pull — получение изменений.

12. Создание тегов:
 git tag <tagname> — создание тега для коммита.
