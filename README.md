# Hướng Dẫn Cài Đặt và Chạy Chương Trình

Hướng dẫn này cung cấp các bước để khởi động backend server và chạy ứng dụng.

## Yêu Cầu

- Node.js đã được cài đặt trên hệ thống.
- Chạy thử node -v và npm -v (nếu powershell không được thì thử chuyển sang command prompt)

## Các Bước Chạy Ứng Dụng

### Bước 1: Khởi động Backend Server

1. Mở terminal và điều hướng đến thư mục dự án.
   ```bash
   cd src/backend
   copy link thư mục backend ví dụ: cd C:\D\nmcnpm\Test\Esport\src\backend
   ```
2. Chạy lệnh sau để khởi động backend server:
   ```bash
   node server.js
   copy link tệp server.js ví dụ: node C:\D\nmcnpm\Test\Esport\src\backend\server.js
   ```
   Lệnh này sẽ khởi chạy server tại `http://localhost:3000`.

### Bước 2: Truy Cập Ứng Dụng

Bạn có thể truy cập ứng dụng theo một trong các cách sau:

#### Cách 1: Sử Dụng Trình Duyệt Web

1. Mở trình duyệt web bạn muốn.
2. Truy cập vào:
   ```
   http://localhost:3000
   ```

#### Cách 2: Sử Dụng Lệnh Terminal

- **PowerShell**:
  ```powershell
  start http://localhost:3000
  ```
- **Command Prompt**:
  ```cmd
  start "" "http://localhost:3000"
  ```

## Lưu Ý

- Đảm bảo backend server đang chạy trước khi truy cập ứng dụng.
- Nếu gặp sự cố, hãy kiểm tra xem cổng `3000` có đang được sử dụng bởi ứng dụng khác hay không.
