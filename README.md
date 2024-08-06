# Laravel Project Installation Guide

This project is a simple way to search for drinks. It will return an image with the drinks ingredients and its proportions.

# Laravel Project Installation Guide

This guide will walk you through the steps required to install and set up a Laravel project.

## Prerequisites

Make sure you have the following software installed on your machine:

- PHP 8.2.12
- Composer
- Node.js (20.10.0) and npm
- MySQL or any other database you prefer

## Installation Steps

1. **Clone the repository**

    ```sh
    git clone https://github.com/Rhegan/Mixer.git
    cd mixers
    ```

2. **Install PHP dependencies**

    Run the following command to install all PHP dependencies required by Laravel:

    ```sh
    composer install
    ```

3. **Install Node.js dependencies**

    Run the following command to install all Node.js dependencies:

    ```sh
    npm install
    ```

4. **Copy .env file**

    Copy the example environment configuration file to create your own `.env` file:

    ```sh
    cp .env.example .env
    ```

5. **Generate application key**

    Run the following command to generate a new application key:

    ```sh
    php artisan key:generate
    ```

6. **Configure your environment variables**

    Open the `.env` file and update the necessary configuration for your database and other services:

    ```dotenv
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
    ```

7. **Run database migrations and seeders**

    Run the following command to create the necessary database tables and seed initial data:

    ```sh
    php artisan migrate
    ```

8. **Create symbolic link for storage**

    Run the following command to create a symbolic link from `public/storage` to `storage/app/public`:

    ```sh
    php artisan storage:link
    ```

9. **Build front-end assets**

    Compile your application's front-end assets using Vite:

    ```sh
    npm run build
    ```

10. **Start the development server**

    Run the following command to start the Laravel development server:

    ```sh
    php artisan serve
    ```

    ```sh
    npm run dev
    ```

    Your application should now be accessible at `http://localhost:8000`.

## Additional Commands

- **Running tests**

    If your project includes tests, run them using:

    ```sh
    php artisan test
    ```

- **Clear caches**

    If you need to clear Laravel caches, use the following commands:

    ```sh
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    ```

## Troubleshooting

If you encounter any issues during installation, consider the following:

- Ensure all prerequisites are installed and configured properly.
- Check your `.env` file for correct configuration.
- Review the Laravel logs located at `storage/logs/laravel.log` for any error messages.

## Conclusion

You have successfully set up your Laravel project. Happy coding!
